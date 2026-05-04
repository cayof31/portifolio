import {
  defineConfig,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export default defineConfig({
  // lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components",
  },
});

export const { docs, meta } = defineDocs({
  dir: "src/content/posts",
  docs: {
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      heroImageReel: z
        .array(
          z.object({
            src: z.string(),
            alt: z.string().optional(),
            caption: z.string().optional(),
          }),
        )
        .optional(),
    }),
  },
});
