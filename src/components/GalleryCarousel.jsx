import React, { useState } from "react";

function GalleryCarousel({ images }) {
  const [open, setOpen] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  if (!images || images.length === 0) return null;

  const openModal = (idx) => {
    setCurrentIdx(idx);
    setOpen(true);
  };
  const closeModal = () => setOpen(false);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <figure key={idx} className="bg-white rounded shadow p-2 flex flex-col items-center h-full">
            <div className="w-full flex-1 flex items-center justify-center">
              <img
                src={img.url}
                alt={img.title || "Bilde"}
                className="w-full h-auto object-cover rounded cursor-pointer"
                onClick={() => openModal(idx)}
              />
            </div>
            {img.photographer ? (
              <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">
                Foto: <span>{img.photographer}</span>
              </figcaption>
            ) : null}
            {img.title && !img.photographer ? (
              <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">
                {img.title}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded shadow-lg p-4 max-w-2xl w-full flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Forrige knapp */}
            {images.length > 1 && (
              <button
                onClick={() => setCurrentIdx((currentIdx - 1 + images.length) % images.length)}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/70 border border-gray-300 !rounded-full w-10 h-10 flex items-center justify-center !text-2xl text-gray-700 hover:text-blue-700 hover:bg-blue-100/50 shadow-lg transition duration-200 z-10"
                aria-label="Forrige bilde"
                style={{ lineHeight: 1 }}
              >
                ‹
              </button>
            )}
            {/* Neste knapp */}
            {images.length > 1 && (
              <button
                onClick={() => setCurrentIdx((currentIdx + 1) % images.length)}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/70 border border-gray-300 !rounded-full w-10 h-10 flex items-center justify-center !text-2xl text-gray-700 hover:text-blue-700 hover:bg-blue-100/50 shadow-lg transition duration-200 z-10"
                aria-label="Neste bilde"
                style={{ lineHeight: 1 }}
              >
                ›
              </button>
            )}
            {/* Lukk knapp */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-white/30 border border-gray-300 !rounded-full w-10 h-10 flex items-center justify-center !text-2xl text-gray-700 hover:!text-red-800 hover:bg-red-100/50 shadow-lg transition duration-200 z-10 leading-none"
              aria-label="Lukk"
              style={{ lineHeight: 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="w-full h-full flex items-center justify-center leading-none">×</span>
            </button>
            <img
              src={images[currentIdx].url}
              alt={images[currentIdx].title || "Stort bilde"}
              className="w-full h-auto object-contain rounded mb-2"
            />
            {images[currentIdx].photographer ? (
              <div className="text-xs text-gray-700 mt-2 w-full text-center">
                Foto: <span>{images[currentIdx].photographer}</span>
              </div>
            ) : null}
            {images[currentIdx].title && !images[currentIdx].photographer ? (
              <div className="text-xs text-gray-700 mt-2 w-full text-center">
                {images[currentIdx].title}
              </div>
            ) : null}
          </div>
        </div>
      )}
    </>
  );
}

export default GalleryCarousel;
