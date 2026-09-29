const pad = (value: number) => String(value).padStart(2, "0");

/** e.g. `Andres-Artunduaga-Resume-EN_2026-09-29_14-32.pdf` (local date and time). */
export function buildResumeFilename(name: string, locale: string, date = new Date()): string {
  const slug = name
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .trim()
    .replace(/[^\w]+/g, "-");
  const day = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const time = `${pad(date.getHours())}-${pad(date.getMinutes())}`;
  return `${slug}-Resume-${locale.toUpperCase()}_${day}_${time}.pdf`;
}

/** Fetches `href` and saves it as `filename`. Throws when the request fails. */
export async function downloadFile(href: string, filename: string): Promise<void> {
  const response = await fetch(href);
  if (!response.ok) throw new Error(`Download failed (${response.status})`);
  const url = URL.createObjectURL(await response.blob());
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
