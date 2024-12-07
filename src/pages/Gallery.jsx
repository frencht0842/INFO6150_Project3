import React, { useState } from 'react';
import ImageCarousel from '../components/ImageCarousel';
import { galleryImages } from '../data/gallery';

function Gallery() {
  return (
    <div>
      <h1>Image Gallery</h1>
      <ImageCarousel images={galleryImages} />
    </div>
  );
}

export default Gallery;