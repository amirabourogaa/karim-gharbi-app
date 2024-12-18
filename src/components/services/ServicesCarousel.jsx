import React, { useState } from "react";
import { motion } from "framer-motion";
import { BiPlayCircle, BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import festival1 from "../../assets/img_sq_0.jpg"
import festival2 from "../../assets/img_sq_3.jpg"
import festival3 from "../../assets/img_sq_8.jpg"
import { MdClose } from "react-icons/md";

const ServicesCarousel = () => {
    const openPopup = (video) => {
        setActiveVideo(video);
        setIsPopupOpen(true);
      };
    
      const closePopup = () => {
        setActiveVideo(null);
        setIsPopupOpen(false);
      };

      const [isPopupOpen, setIsPopupOpen] = useState(false);
      const [activeVideo, setActiveVideo] = useState(null);

  const slides = [
    {
      video: "./assets/videos/visa Carthage.mp4",
      image:festival1,
      alt: "Visa Carthage",
    },
    {
      video: "./assets/videos/Visa-ramadhan 2024.mp4",
      image: festival2,
      alt: "Visa Ramadhan 2024",
    },
    {
      video: "./assets/videos/Vidéo Visa Doha.mp4",
      image: festival3,
      alt: "Visa Doha",
    },
  ];

  return (
    <section id="services-2" className="bg-black text-white py-16">
    <div className="container mx-auto px-4 lg:px-0">
      {/* Section Title */}
      <div className="text-center mb-10">
        <motion.h2
          className="text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Festivals et Spectacles Marquants
        </motion.h2>
        <motion.p
          className="opacity-80 font-mansalva text-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Moments forts des festivals.
        </motion.p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        loop={true}
        autoplay={{ delay: 5000 }}
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <button
                onClick={() => openPopup(slide.video)}
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
              >
                <BiPlayCircle className="text-red-500 text-6xl animate-pulse" />
              </button>
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Navigation Buttons */}
        {/* <div className="flex justify-between items-center mt-6">
          <button className="swiper-button-prev text-3xl text-red-500">
            <BiChevronLeft />
          </button>
          <button className="swiper-button-next text-3xl text-red-500">
            <BiChevronRight />
          </button>
        </div> */}
      </Swiper>
    </div>

    {/* Popup for Video */}
    {isPopupOpen && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
        <div className="relative w-11/12 max-w-4xl bg-black p-4 rounded-lg margin-3">
        <button
  onClick={closePopup}
  className="relative flex items-center justify-center w-12 h-12 bg-white text-black rounded-full text-2xl transition-all duration-300 ease-in-out transform hover:bg-red-600 hover:scale-110 hover:rotate-180"
>
  <MdClose />
</button>
          <video
            src={activeVideo}
            controls
            autoPlay
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    )}
  </section>
  );
};

export default ServicesCarousel;
