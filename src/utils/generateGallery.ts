import { GalleryItem } from "../types/GalleryItem";

export const generateGallery = (
  category: GalleryItem["category"],
  images: Record<string, string>
): GalleryItem[] =>
  Object.entries(images).map(([, src], index) => ({
    id: `${category.slice(0, 2)}${index + 1}`,
    src,
    alt: `${category.charAt(0).toUpperCase() + category.slice(1)} ${index + 1}`,
    category,
  }));
