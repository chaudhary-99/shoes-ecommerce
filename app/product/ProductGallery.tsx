'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  const handlePrevious = () => {
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 group">
        <Image
          src={images[selectedImage]}
          alt="Product image"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-top transition-transform duration-300 cursor-zoom-in ${
            isZoomed ? 'scale-150' : 'scale-100'
          }`}
          onClick={handleImageClick}
          priority={selectedImage === 0}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer z-10"
        >
          <i className="ri-arrow-left-line w-5 h-5 flex items-center justify-center"></i>
        </button>
        
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white cursor-pointer z-10"
        >
          <i className="ri-arrow-right-line w-5 h-5 flex items-center justify-center"></i>
        </button>

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
          {selectedImage + 1} / {images.length}
        </div>

        {/* Zoom Indicator */}
        {isZoomed && (
          <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
            Click to zoom out
          </div>
        )}
      </div>
      
      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedImage === index 
                ? 'ring-2 ring-blue-500 ring-offset-2' 
                : 'hover:opacity-80'
            }`}
          >
            <Image
              src={image}
              alt={`Product view ${index + 1}`}
              fill
              sizes="(max-width: 768px) 25vw, (max-width: 1200px) 15vw, 10vw"
              className="object-cover object-top"
            />
          </button>
        ))}
      </div>

      {/* Product Features */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Product Highlights</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2">
            <i className="ri-award-line text-blue-600 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-gray-700">Premium Quality</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-green-600 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-gray-700">Authentic Product</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-truck-line text-purple-600 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-gray-700">Fast Delivery</span>
          </div>
          <div className="flex items-center gap-2">
            <i className="ri-arrow-left-right-line text-orange-600 w-4 h-4 flex items-center justify-center"></i>
            <span className="text-gray-700">Easy Returns</span>
          </div>
        </div>
      </div>
    </div>
  );
}
