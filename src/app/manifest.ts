import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "R2N - Andres Artunduaga",
    short_name: "R2N",
    description: "Andres Artunduaga personal landing page",
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
