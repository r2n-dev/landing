import type { MetadataRoute } from "next";
import { seo } from "./seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seo.siteName,
    short_name: "Andres",
    description: seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b95ff",
    icons: [
      {
        src: "/metadata_icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/metadata_icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
