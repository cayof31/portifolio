// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"2026-05-01-meu-primeiro-post.mdx": () => import("../src/content/posts/2026-05-01-meu-primeiro-post.mdx?collection=docs"), }),
};
export default browserCollections;