import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, A11y } from 'swiper/modules';

function SwiperModal({ images }) {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [swiperLoaded, setSwiperLoaded] = useState(false);

  useEffect(() => {
    // Dynamisk import av Swiper CSS
    const loadSwiperCSS = async () => {
      await import('swiper/css');
      await import('swiper/css/navigation');
      await import('swiper/css/pagination');
      setSwiperLoaded(true);
    };
    
    loadSwiperCSS();
  }, []);

  if (!images || images.length === 0) return null;

  const openModal = (idx) => {
    setInitialSlide(idx);
    setOpen(true);
    // Forhindre scrolling av bakgrunnen
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setOpen(false);
    // Gjenopprett scrolling av bakgrunnen
    document.body.style.overflow = 'unset';
  };

  // Lukk modal med Escape-tasten
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    
    if (open) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [open]);

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <figure 
            key={idx} 
            className="bg-white rounded-xl border-1 border-stone-200/70 shadow-lg p-2 flex flex-col items-center h-full transition-transform duration-200 hover:scale-105 hover:shadow-xl cursor-pointer"
            onClick={() => openModal(idx)}
          >
            <div className="w-full flex-1 flex items-center justify-center">
              <img
                src={img.url}
                alt={img.title || "Bilde"}
                className="w-full h-auto object-cover rounded-lg transition duration-300 hover:brightness-95 hover:shadow-lg border border-gray-200"
              />
            </div>
            {img.photographer ? (
              <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">
                Foto: <span>{img.photographer}</span>
              </figcaption>
            ) : img.title ? (
              <figcaption className="text-xs text-gray-700 mt-2 w-full text-center self-end">
                {img.title}
              </figcaption>
            ) : null}
          </figure>
        ))}
      </div>

      {/* Swiper Modal */}
      {open && swiperLoaded && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div
            className="relative bg-white rounded-xl shadow-lg p-4 w-full max-w-2xl flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            {/* Tekstbasert lukkeknapp */}
            <div className="w-full flex justify-end mb-2">
              <button 
                onClick={closeModal} 
                className="text-gray-500 hover:text-red-600 font-medium transition-colors duration-200"
                style={{ fontSize: '14px !important' }}
              >
                Lukk
              </button>
            </div>

            {/* Swiper Carousel - samme stil som SwiperCarousel */}
            <Swiper
              modules={[Navigation, Pagination, Keyboard, A11y]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              keyboard={{ enabled: true }}
              initialSlide={initialSlide}
              loop={images.length > 1}
              className="mySwiper w-full"
            >
              {images.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <div className="relative">
                    <img
                      src={img.url}
                      alt={img.title || "Bilde"}
                      className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-200"
                      style={{ minHeight: '300px', maxHeight: '500px', objectFit: 'cover' }}
                    />
                  </div>
                  {/* Caption under hvert bilde - samme stil som SwiperCarousel */}
                  <div className="text-center mt-4 pb-4">
                    {img.title && (
                      <p className="text-base text-gray-700 font-medium">{img.title}</p>
                    )}
                    {img.photographer && (
                      <figcaption className="text-xs text-gray-700 mt-1">
                        Foto: <span>{img.photographer}</span>
                      </figcaption>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      )}
    </>
  );
}

export default SwiperModal;