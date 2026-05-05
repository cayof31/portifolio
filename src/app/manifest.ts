import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.title,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#130e0b",
    theme_color: "#c93332",
    lang: siteConfig.language,
    icons: [
      {
        src: "/icon.png",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "/icon2.png",
        sizes: "106x116",
        type: "image/png",
      },
    ],
  };
}
