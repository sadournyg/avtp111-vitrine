import { images } from "../assets/images";
import { GalleryItem, GalleryCategory } from "../types/GalleryItem";

export const galleryItems: GalleryItem[] = [
  {
    id: "t1",
    src: images.terrassement01,
    alt: "Terrassement 1",
    category: "terrassement",
  },
  {
    id: "t2",
    src: images.terrassement02,
    alt: "Terrassement 2",
    category: "terrassement",
  },
  {
    id: "t3",
    src: images.terrassement03,
    alt: "Terrassement 3",
    category: "terrassement",
  },
  {
    id: "tr1",
    src: images.tranchee01,
    alt: "Tranchée 1",
    category: "tranchee",
  },
  {
    id: "tr2",
    src: images.tranchee02,
    alt: "Tranchée 2",
    category: "tranchee",
  },
  {
    id: "a1",
    src: images.amenagement01,
    alt: "Aménagement 1",
    category: "amenagement",
  },
  {
    id: "a2",
    src: images.amenagement02,
    alt: "Aménagement 2",
    category: "amenagement",
  },
  {
    id: "aa1",
    src: images.avantApres01a,
    alt: "Avant 1",
    category: "avant-apres",
  },
  {
    id: "aa2",
    src: images.avantApres01b,
    alt: "Après 1",
    category: "avant-apres",
  },
  {
    id: "aa3",
    src: images.avantApres02a,
    alt: "Avant 2",
    category: "avant-apres",
  },
  {
    id: "aa4",
    src: images.avantApres02b,
    alt: "Après 2",
    category: "avant-apres",
  },
];

export const galleryCategories: { label: string; value: GalleryCategory }[] = [
  { label: "Toutes", value: "all" },
  { label: "Terrassement", value: "terrassement" },
  { label: "Tranchées", value: "tranchee" },
  { label: "Aménagement", value: "amenagement" },
  { label: "Avant / Après", value: "avant-apres" },
];
