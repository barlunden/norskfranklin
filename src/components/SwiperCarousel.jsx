import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function SwiperCarousel({ images }) {
  if (!images || images.length === 0) return null;

  // Hvis bare ett bilde, vis det enkelt
  if (images.length === 1) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col items-center w-full mb-4 max-w-xl mx-auto">
        <div className="relative w-full flex items-center justify-center">
          <img
            src={images[0].url}
            alt={images[0].title || "Bilde"}
            className="w-full h-auto object-cover rounded-xl shadow-md border border-gray-200"
          />
        </div>
        {images[0].photographer ? (
          <figcaption className="text-xs text-gray-700 mt-2 w-full text-center">
            Foto: <span>{images[0].photographer}</span>
          </figcaption>
        ) : null}
        <div className="text-center mt-2 text-base text-gray-700 font-medium">
          <p>{images[0].title}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 w-full mb-4 max-w-2xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          bulletClass: 'swiper-pagination-bullet !bg-blue-600',
          bulletActiveClass: 'swiper-pagination-bullet-active !bg-blue-800',
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={images.length > 1}
        className="swiper-container relative"
        style={{
          '--swiper-pagination-color': '#2563eb',
          '--swiper-pagination-bullet-inactive-color': '#94a3b8',
        }}
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
            {/* Caption under hvert bilde */}
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
        
        {/* Custom Navigation Buttons */}
        {images.length > 1 && (
          <>
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-blue-600 hover:text-white text-blue-700 rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-all duration-200 cursor-pointer border border-blue-200">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-blue-600 hover:text-white text-blue-700 rounded-full w-14 h-14 flex items-center justify-center shadow-xl transition-all duration-200 cursor-pointer border border-blue-200">
              <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </>
        )}
      </Swiper>
      
      {/* Custom styles for better pagination */}
      <style jsx>{`
        .swiper-container {
          padding-bottom: 50px;
        }
        .swiper-pagination {
          bottom: 10px !important;
        }
        .swiper-pagination-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
        }
      `}</style>
    </div>
  );
}

export default SwiperCarousel;