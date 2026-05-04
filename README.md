# Portfolio

## Getting Started


First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deploy no Cloudflare Pages (100% estatico)

Este projeto esta configurado para export estatico do Next.

- Build command: `npm run build`
- Output directory: `out`

Validacao local:

```bash
npm run build
```

## CMS com API separada (Cloudflare Worker)

As rotas do App Router (`/api/media` e `/api/admin-config`) foram removidas para manter deploy estatico.
O admin em `public/admin/index.html` agora pode chamar uma API externa.

### 1. Criar Worker

```bash
npx wrangler init Portfolio-cms-api --no-deploy
cd Portfolio-cms-api
npm install @aws-sdk/client-s3
```

### 2. Exemplo de `src/index.ts`

```ts
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3";

export interface Env {
	CLOUDFLARE_ACCOUNT_ID: string;
	R2_ACCESS_KEY_ID: string;
	R2_SECRET_ACCESS_KEY: string;
	R2_BUCKET_NAME: string;
	CMS_MEDIA_BASE_URL?: string;
	NEXT_PUBLIC_VIDEO_BASE_URL?: string;
}

const FALLBACK_CMS_MEDIA_BASE_URL =
	"https://pub-3f4cc6c693df4ff5bc004e1d037ebcfe.r2.dev";

function json(data: unknown, status = 200) {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			"content-type": "application/json; charset=utf-8",
			"access-control-allow-origin": "*",
			"access-control-allow-methods": "GET,OPTIONS",
		},
	});
}

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (request.method === "OPTIONS") return json({ ok: true });

		if (url.pathname === "/admin-config") {
			const cmsMediaBaseUrl =
				env.CMS_MEDIA_BASE_URL ||
				env.NEXT_PUBLIC_VIDEO_BASE_URL ||
				FALLBACK_CMS_MEDIA_BASE_URL;

			return json({ cmsMediaBaseUrl: cmsMediaBaseUrl.replace(/\/+$/, "") });
		}

		if (url.pathname === "/media") {
			try {
				const s3 = new S3Client({
					region: "auto",
					endpoint: `https://${env.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
					credentials: {
						accessKeyId: env.R2_ACCESS_KEY_ID,
						secretAccessKey: env.R2_SECRET_ACCESS_KEY,
					},
				});

				const result = await s3.send(
					new ListObjectsV2Command({ Bucket: env.R2_BUCKET_NAME }),
				);

				const files = (result.Contents || [])
					.map((file) => ({ name: file.Key, size: file.Size }))
					.filter((file) => !file.name?.startsWith(".") && !file.name?.includes("/."));

				return json(files);
			} catch {
				return json({ error: "Erro ao listar arquivos" }, 500);
			}
		}

		return json({ error: "Not found" }, 404);
	},
};
```

### 3. Publicar Worker

Configure os secrets e deploy:

```bash
npx wrangler secret put CLOUDFLARE_ACCOUNT_ID
npx wrangler secret put R2_ACCESS_KEY_ID
npx wrangler secret put R2_SECRET_ACCESS_KEY
npx wrangler secret put R2_BUCKET_NAME
npx wrangler secret put CMS_MEDIA_BASE_URL
npx wrangler deploy
```

### 4. Apontar o Admin para o Worker

No admin (`/admin`), use um destes formatos:

- `https://seu-dominio/admin?cmsApiBaseUrl=https://Portfolio-cms-api.seu-subdominio.workers.dev`
- ou salve no navegador: `localStorage.setItem("CMS_API_BASE_URL", "https://Portfolio-cms-api.seu-subdominio.workers.dev")`

Com isso, o front publico continua estatico e a API fica isolada no Worker.

