import { GalleryItem, GalleryCategory } from "../types/GalleryItem";
import { trancheeImages } from "../assets/images/tranchee";
import { terrassementImages } from "../assets/images/terrassement";
import { amenagementImages } from "../assets/images/amenangement";
import { avantApresImages } from "../assets/images/avant-apres";
import { generateGallery } from "../utils/generateGallery";

export const galleryItems: GalleryItem[] = [
  // Terrassement
  ...generateGallery("terrassement", terrassementImages),
  // Tranchées
  ...generateGallery("tranchee", trancheeImages),
  // Amenagements
  ...generateGallery("amenagement", amenagementImages),
  // Avant Apres
  ...generateGallery("avant-apres", avantApresImages),
];

export const galleryCategories: { label: string; value: GalleryCategory }[] = [
  { label: "Toutes", value: "all" },
  { label: "Terrassement", value: "terrassement" },
  { label: "Tranchées", value: "tranchee" },
  { label: "Aménagement", value: "amenagement" },
  { label: "Avant / Après", value: "avant-apres" },
];
