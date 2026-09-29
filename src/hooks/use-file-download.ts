"use client";

import { useState } from "react";
import { downloadFile } from "@/lib/download";

/**
 * Tracks an in-flight download. If the fetch fails, the file is opened in a new
 * tab so the visitor still gets it. `isDownloading` resets on success or error.
 */
export function useFileDownload(href: string | undefined, getFilename: () => string) {
  const [isDownloading, setIsDownloading] = useState(false);

  async function download() {
    if (!href) return;
    setIsDownloading(true);
    try {
      await downloadFile(href, getFilename());
    } catch {
      window.open(href, "_blank", "noopener");
    } finally {
      setIsDownloading(false);
    }
  }

  return { download, isDownloading };
}
