import { useState, useMemo } from "react";
import Title from "../../components/Title";
import { galleryItems, galleryCategories } from "../../data/galleryData";
import { GalleryItem } from "../../types/GalleryItem";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const RealisationsGallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredImages: GalleryItem[] = useMemo(() => {
    return activeCategory === "all"
      ? galleryItems
      : galleryItems.filter((img) => img.category === activeCategory);
  }, [activeCategory]);

  const lightboxSlides = useMemo(
    () =>
      filteredImages.map((img) => ({
        src: img.src,
      })),
    [filteredImages]
  );

  return (
    <section className="py-20 px-4 bg-white text-[#1e3a8a]">
      <div className="max-w-6xl mx-auto">
        <Title
          as="h2"
          className="text-center mb-4 text-3xl md:text-4xl font-bold"
        >
          Nos Réalisations
        </Title>
        <div className="w-16 h-1 bg-orange-500 mx-auto mb-10 rounded" />

        {/* FILTRES */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {galleryCategories.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveCategory(value)}
              aria-pressed={activeCategory === value}
              className={`px-5 py-2 cursor-pointer rounded-full border font-medium text-sm md:text-base transition ${
                activeCategory === value
                  ? "bg-orange-500 text-white shadow"
                  : "bg-gray-100 text-[#1e3a8a] hover:bg-gray-200"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* GALERIE */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {filteredImages.map((img, index) => (
            <div
              key={img.src}
              role="button"
              tabIndex={0}
              onClick={() => {
                setCurrentIndex(index);
                setIsOpen(true);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setCurrentIndex(index);
                  setIsOpen(true);
                }
              }}
              className="overflow-hidden rounded-xl shadow hover:shadow-lg transition duration-300 cursor-pointer outline-none"
            >
              <img
                loading="lazy"
                src={img.src}
                alt={img.alt}
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <Lightbox
        open={isOpen}
        close={() => setIsOpen(false)}
        index={currentIndex}
        slides={lightboxSlides}
      />
    </section>
  );
};

export default RealisationsGallery;
