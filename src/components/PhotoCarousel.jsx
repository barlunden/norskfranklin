import { set } from "astro:schema";
import { useState } from "react";

function PhotoCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;
    if (images.length === 1)
      return (
        <div className="bg-white rounded shadow p-4 flex flex-col items-center w-full mb-4">
          <img
            src={images[0].url}
            alt={images[0].title}
            className="w-full h-auto object-cover rounded"
          />
          {'photographer' in images[0] && images[0].photographer ? (
            <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">Foto: <span>{images[0].photographer}</span></figcaption>
          ) : null}
          <div className="text-center mt-2 text-sm text-gray-600">
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
    <div className="bg-white rounded shadow p-4 flex flex-col items-center w-full mb-4 relative">
      <img
        src={images[currentIndex].url}
        alt={images[currentIndex].title}
        className="w-full h-auto object-cover rounded"
      />
      {'photographer' in images[currentIndex] && images[currentIndex].photographer ? (
        <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">Foto: <span>{images[currentIndex].photographer}</span></figcaption>
      ) : null}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-blue-500 hover:text-white text-blue-600 shadow p-2 !rounded-full transition duration-200 border border-blue-100"
        aria-label="Forrige bilde"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-80 hover:bg-blue-500 hover:text-white text-blue-600 shadow p-2 !rounded-full transition duration-200 border border-blue-100"
        aria-label="Neste bilde"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <div className="text-center mt-2 text-sm text-gray-600">
        <p>{images[currentIndex].title}</p>
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}

export default PhotoCarousel;
