'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Slider = () => {
  const slides = [
    { id: 1, src: "/images/iphone2.jpg", alt: "Slide 1" },
    { id: 2, src: "/images/airpods3.jpg", alt: "Slide 2" },
    { id: 3, src: "/images/Mac.jpg", alt: "Slide 3" },
    { id: 4, src: "/images/ipad2.jpg", alt: "Slide 3" },
    { id: 5, src: "/images/homepod.jpg", alt: "Slide 3" },
    { id: 6, src: "/images/apple.jpg", alt: "Slide 3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval); 
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Contenedor de slides */}
      <div
        className="flex transition-transform ease-in-out duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div key={slide.id} className="flex-shrink-0 w-full h-96 relative">
            <Image
              src={slide.src}
              alt={slide.alt}
              layout="fill"
              objectFit="cover"
              className="w-full h-full"
              width={500} height={300} 
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75"
      >
        ❯
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              index === currentSlide ? 'bg-white' : 'bg-gray-400'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
