import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './HeroSection.css' // Import des styles personnalisés si nécessaire
import img01 from '../../assets/karim01.png'
import img02 from '../../assets/karim02.png'
import img03 from '../../assets/karim03.png'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false) // To check if the user interacts with the slider

  // Liste des images du slider
  const slides = [
    {
      image: img01,
      caption: "L'humour est le meilleur remède contre la faim",
      desc: ` On dit qu'on ne peut pas rire le ventre vide, mais avec moi, vous allez faire une exception... même l'estomac va rigoler.`
    },
    {
      image: img02,
      caption: "Le bio, c'est la santé... et aussi les comédies !",
      desc: ` Vous avez déjà essayé d'expliquer à un légume qu'il est bio ? Moi non plus... mais on peut toujours en rigoler !`
    },
    {
      image: img03,
      caption: 'Du rire frais, servi tous les jours !',
      desc: `Chez moi, les comédies sont comme des fruits et légumes... fraîches, croustillantes, et parfois un peu piquantes.`
    }
  ]

  // Fonction pour changer l'image
  const nextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + slides.length) % slides.length
    )
  }

  // Autoplay functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 4000) // Change slide every 5 seconds
      return () => clearInterval(interval) // Cleanup interval on component unmount or hover
    }
  }, [currentIndex, isHovered])

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Slider Background */}
      <div className='absolute top-0 left-0 w-full h-full z-0'>
        <div
          className='slider-container'
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: 'transform 0.5s ease-in-out'
          }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className='w-full h-full bg-cover bg-center'
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Caption */}
              <div className='absolute bottom-10 left-10 text-white text-3xl md:text-5xl font-bold text-shadow p-6 bg-black bg-opacity-60 rounded-lg shadow-xl'>
                <h2>{slide.caption}</h2> {/* Titre principal */}
                <p className='text-red-400 mt-4 text-lg md:text-xl font-mansalva'>
                  {slide.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Content over the Slider */}

      {/* Navigation Buttons */}
      <motion.button
        onClick={prevSlide}
        onMouseEnter={() => setIsHovered(true)} // Stop autoplay on hover
        onMouseLeave={() => setIsHovered(false)} // Resume autoplay when mouse leaves
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 shadow-lg hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.2, 1], // Augmenter la taille à 1.2 pour un effet plus marqué
          rotate: [0, 30, -30, 0], // Rotation plus marquée
          x: [0, 10, -10, 0], // Mouvement horizontal pour plus de dynamique
        }}
        transition={{
          duration: 1.5, // Durée du cycle plus courte pour rendre l'animation plus rapide
          repeat: Infinity, // Répéter l'animation indéfiniment
          repeatType: 'loop', // La boucle est infinie
          ease: 'easeInOut', // Transition fluide
        }}
      >
        <FaArrowLeft />
      </motion.button>
      <motion.button
        onClick={nextSlide}
        onMouseEnter={() => setIsHovered(true)} // Stop autoplay on hover
        onMouseLeave={() => setIsHovered(false)} // Resume autoplay when mouse leaves
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl z-10 p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70 transition-all duration-300 shadow-lg hover:scale-110"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          scale: [1, 1.2, 1], // Taille augmentée pour plus d'impact
          rotate: [0, 30, -30, 0], // Rotation plus marquée
          x: [0, 10, -10, 0], // Mouvement horizontal pour plus de dynamisme
        }}
        transition={{
          duration: 1.5, // Durée du cycle plus courte
          repeat: Infinity, // Répéter indéfiniment
          repeatType: 'loop',
          ease: 'easeInOut', // Transition fluide
        }}
      >
        <FaArrowRight />
      </motion.button>
    </section>
  )
}

export default HeroSection
