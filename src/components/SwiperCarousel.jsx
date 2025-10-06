import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function SwiperCarousel({ images }) {
  console.log('SwiperCarousel rendered with images:', images);
  
  useEffect(() => {
    // Dynamisk import av CSS for å unngå SSR-problemer
    import('swiper/css');
    import('swiper/css/navigation');
    import('swiper/css/pagination');
  }, []);
  
  if (!images || images.length === 0) {
    console.log('No images found');
    return <div className="text-center p-4">Ingen bilder funnet</div>;
  }

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
    <>
      <div className="bg-white rounded-xl shadow-lg p-4 w-full mb-4 max-w-2xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation={true}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={images.length > 1}
          className="mySwiper"
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
        </Swiper>
      </div>
    </>
  );
}

export default SwiperCarousel;