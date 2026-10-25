import { renderOgImage, ogImageSize } from "./og-image";
import { seo } from "./seo";

export const alt = seo.title;
export const size = ogImageSize;
export const contentType = "image/png";

export default renderOgImage;
