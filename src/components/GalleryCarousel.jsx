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
          <figure key={idx} className="bg-white rounded-xl border-1 border-stone-200/70 shadow-lg p-2 flex flex-col items-center h-full transition-transform duration-200 hover:scale-105 hover:shadow-xl">
            <div className="w-full flex-1 flex items-center justify-center">
              <img
                src={img.url}
                alt={img.title || "Bilde"}
                className="w-full h-auto object-cover rounded-lg cursor-pointer transition duration-300 hover:brightness-95 hover:shadow-lg border border-gray-200"
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
          className="fixed inset-0 bg-black/90  flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white  border-1 border-stone-200/70 rounded-3xl shadow-2xl p-4 max-w-2xl w-full flex flex-col items-center animate-fadein"
            onClick={e => e.stopPropagation()}
          >
            {/* Forrige knapp */}
            {images.length > 1 && (
              <button
                onClick={() => setCurrentIdx((currentIdx - 1 + images.length) % images.length)}
                className="absolute left-4 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/60 border border-blue-200 !rounded-full w-14 h-14 flex items-center justify-center text-4xl text-blue-700 hover:text-white hover:bg-blue-600 shadow-xl transition-all duration-200 z-20"
                aria-label="Forrige bilde"
                style={{ lineHeight: 1 }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )}
            {/* Neste knapp */}
            {images.length > 1 && (
              <button
                onClick={() => setCurrentIdx((currentIdx + 1) % images.length)}
                className="absolute right-4 top-1/2 -translate-y-1/2 backdrop-blur-md bg-white/60 border border-blue-200 !rounded-full w-14 h-14 flex items-center justify-center text-4xl text-blue-700 hover:text-white hover:bg-blue-600 shadow-xl transition-all duration-200 z-20"
                aria-label="Neste bilde"
                style={{ lineHeight: 1 }}
              >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )}
            {/* Dot-indikatorer */}
            <div className="flex justify-center items-center gap-2 mt-2 mb-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-3 h-3 !rounded-full border border-blue-300 transition-all duration-200 ${idx === currentIdx ? 'bg-blue-600' : 'bg-gray-200'}`}
                  aria-label={`Gå til bilde ${idx + 1}`}
                />
              ))}
            </div>
            {/* Lukk knapp */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 backdrop-blur-md bg-white/60 border border-red-300 !rounded-full w-14 h-14 flex items-center justify-center text-4xl text-red-700 hover:text-white hover:bg-red-600 shadow-xl transition-all duration-200 z-20 leading-none"
              aria-label="Lukk"
              style={{ lineHeight: 'normal', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
            <img
              src={images[currentIdx].url}
              alt={images[currentIdx].title || "Stort bilde"}
              className="w-full h-auto object-contain rounded-xl mb-2 transition-opacity duration-500 opacity-100 shadow-md border border-gray-200"
            />
            {/* Caption og teller */}
            <div className="text-center mt-2 text-base text-gray-700 font-medium">
              <p>{images[currentIdx].title}</p>
              <span className="text-xs text-gray-500">{currentIdx + 1} / {images.length}</span>
            </div>
            {/* Fotograf */}
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
