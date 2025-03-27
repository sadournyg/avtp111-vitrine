export type GalleryCategory =
  | "all"
  | "terrassement"
  | "tranchee"
  | "amenagement"
  | "avant-apres";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
};
