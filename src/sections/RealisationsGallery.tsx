// src/sections/RealisationsGallery.tsx

import { useState } from "react";
import Title from "../components/Title";
import { galleryItems, galleryCategories } from "../data/galleryData";
import { GalleryItem } from "../types/GalleryItem";

const RealisationsGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredImages: GalleryItem[] =
    activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeCategory);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <Title as="h2" className="text-center mb-10">
          Nos Réalisations
        </Title>

        {/* FILTRES */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {galleryCategories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              className={`px-4 py-2 rounded font-medium border transition ${
                activeCategory === value
                  ? "bg-[#f97316] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* GALERIE */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded shadow">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RealisationsGallery;
