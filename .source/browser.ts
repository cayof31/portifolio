// @ts-nocheck
import { browser } from 'fumadocs-mdx/runtime/browser';
import type * as Config from '../source.config';

const create = browser<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>();
const browserCollections = {
  docs: create.doc("docs", {"AlertaUFMT.mdx": () => import("../src/content/posts/AlertaUFMT.mdx?collection=docs"), "Exemplo-Primeiro-Post.mdx": () => import("../src/content/posts/Exemplo-Primeiro-Post.mdx?collection=docs"), "Memoria_e_Ancestralidade.mdx": () => import("../src/content/posts/Memoria_e_Ancestralidade.mdx?collection=docs"), }),
};
export default browserCollections;