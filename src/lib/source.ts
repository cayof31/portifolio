import { docs,meta } from "collections/server";
import { loader } from "fumadocs-core/source";
import { toFumadocsSource } from "fumadocs-mdx/runtime/server";
// import { createMDX } from "fumadocs-mdx/next";
export const source = loader({
  baseUrl: "/posts",
  source: toFumadocsSource(docs,meta),
});
