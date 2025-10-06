import React from 'react';

function SimpleCarousel({ images }) {
  console.log('SimpleCarousel rendered with images:', images);
  
  if (!images || images.length === 0) {
    console.log('No images found');
    return <div className="text-center p-4 bg-red-100">Ingen bilder funnet</div>;
  }

  return (
    <div className="bg-green-100 p-4 rounded">
      <h3>Simple Carousel Test</h3>
      <p>Antall bilder: {images.length}</p>
      {images.slice(0, 3).map((img, idx) => (
        <div key={idx} className="mb-2">
          <img src={img.url} alt={img.title} className="w-32 h-24 object-cover" />
          <p className="text-sm">{img.title}</p>
        </div>
      ))}
    </div>
  );
}

export default SimpleCarousel;