// @ts-nocheck
import * as __fd_glob_2 from "../src/content/posts/Memoria_e_Ancestralidade.mdx?collection=docs"
import * as __fd_glob_1 from "../src/content/posts/Exemplo-Primeiro-Post.mdx?collection=docs"
import * as __fd_glob_0 from "../src/content/posts/AlertaUFMT.mdx?collection=docs"
import { server } from 'fumadocs-mdx/runtime/server';
import type * as Config from '../source.config';

const create = server<typeof Config, import("fumadocs-mdx/runtime/types").InternalTypeConfig & {
  DocData: {
  }
}>({"doc":{"passthroughs":["extractedReferences"]}});

export const docs = await create.doc("docs", "src/content/posts", {"AlertaUFMT.mdx": __fd_glob_0, "Exemplo-Primeiro-Post.mdx": __fd_glob_1, "Memoria_e_Ancestralidade.mdx": __fd_glob_2, });

export const meta = await create.meta("meta", "src/content/posts", {});