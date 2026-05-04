// source.config.ts
import {
  defineConfig,
  defineDocs,
  frontmatterSchema
} from "fumadocs-mdx/config";
import { z } from "zod";
var source_config_default = defineConfig({
  // lastModifiedTime: "git",
  mdxOptions: {
    providerImportSource: "@/mdx-components"
  }
});
var { docs, meta } = defineDocs({
  dir: "src/content/posts",
  docs: {
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      heroImageReel: z.array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
          caption: z.string().optional()
        })
      ).optional()
    })
  }
});
export {
  source_config_default as default,
  docs,
  meta
};
