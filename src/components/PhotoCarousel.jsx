import { useState } from "react";

function PhotoCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;
  if (images.length === 1)
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-full mb-4 max-w-xl mx-auto">
        <div className="relative w-full flex items-center justify-center">
          <img
            src={images[0].url}
            alt={images[0].title}
            className="w-full h-auto object-cover rounded-xl transition-opacity duration-500 opacity-100 shadow-md border border-gray-200"
          />
        </div>
        {'photographer' in images[0] && images[0].photographer ? (
          <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">Foto: <span>{images[0].photographer}</span></figcaption>
        ) : null}
        <div className="text-center mt-2 text-base text-gray-700 font-medium">
          <p>{images[0].title}</p>
          1 / 1
        </div>
      </div>
    );

  function prev() {
    setCurrentIndex(idx => (idx === 0 ? images.length - 1 : idx - 1));
  }

  function next() {
    setCurrentIndex(idx => (idx === images.length - 1 ? 0 : idx + 1));
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-full mb-4 max-w-xl mx-auto relative">
      <div className="relative w-full flex items-center justify-center min-h-[220px]">
        <img
          src={images[currentIndex].url}
          alt={images[currentIndex].title}
          className="w-full h-auto object-cover rounded-xl transition-opacity duration-500 opacity-100 shadow-md border border-gray-200"
          key={currentIndex}
        />
        {/* Pil venstre */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-blue-600 hover:text-white text-blue-700 shadow-lg p-3 !rounded-full transition duration-200 border border-blue-200 z-10"
          aria-label="Forrige bilde"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        {/* Pil høyre */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-blue-600 hover:text-white text-blue-700 shadow-lg p-3 !rounded-full transition duration-200 border border-blue-200 z-10"
          aria-label="Neste bilde"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
      {/* Dot-indikatorer */}
      <div className="flex justify-center items-center gap-2 mt-4">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-3 h-3 rounded-full border border-blue-300 transition-all duration-200 ${idx === currentIndex ? 'bg-blue-600' : 'bg-gray-200'}`}
            aria-label={`Gå til bilde ${idx + 1}`}
          />
        ))}
      </div>
      {/* Caption og teller */}
      <div className="text-center mt-4 text-base text-gray-700 font-medium">
        <p>{images[currentIndex].title}</p>
        <span className="text-xs text-gray-500">{currentIndex + 1} / {images.length}</span>
      </div>
      {/* Fotograf */}
      {'photographer' in images[currentIndex] && images[currentIndex].photographer ? (
        <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">Foto: <span>{images[currentIndex].photographer}</span></figcaption>
      ) : null}
    </div>
  );
}

export default PhotoCarousel;
