import React, { useState } from 'react'
import { projects } from './data.js'
import Slider from 'react-slick'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs' // Icones pour Next/Prev
import { FiChevronsLeft, FiChevronsRight, FiX } from 'react-icons/fi' // Icone pour fermer le modal
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer.jsx'

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const [slider, setSlider] = useState(null) // Maintenir une référence au slider
  const openModal = project => {
    setSelectedProject(project)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div className='absolute right-8 top-1/2 transform -translate-y-1/2 p-4 bg-red-500 text-white rounded-full opacity-70 hover:opacity-100 cursor-pointer'>
        <BsChevronRight size={30} />
      </div>
    ),
    prevArrow: (
      <div className='absolute left-8 top-1/2 transform -translate-y-1/2 p-4 bg-red-500 text-white rounded-full opacity-70 hover:opacity-100 cursor-pointer'>
        <BsChevronLeft size={30} />
      </div>
    )
  }

  return (
    <div className='bg-white min-h-screen'>
      <Header page='Projets' path='/portfolio' />
      {/* Portfolio Section */}
      <section id='portfolio' className='pt-16 px-6 sm:px-16 py-12'>
        <h2 className='text-4xl font-extrabold text-center text-black uppercase mb-10 relative'>
          Mon Portfolio
          <span className='absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500'></span>
        </h2>

        {/* Gallery */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='relative group overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-110 cursor-pointer'
              onClick={() => openModal(project)}
            >
              <div className='relative w-full h-96 group-hover:transform group-hover:scale-110 group-hover:rotate-3d transition-transform duration-500'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105'
                />
              </div>
              <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity duration-300'>
                <div className='text-center'>
                  <h3 className='text-2xl font-semibold'>{project.title}</h3>
                  <p className='mt-2 text-sm'>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className='fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4'>
          <div className='relative w-full h-full max-w-5xl bg-white rounded-lg overflow-hidden'>
            {/* Close Button */}
            <button
              onClick={closeModal}
              className='absolute top-4 right-4 p-3 text-white bg-red-500 rounded-full'
            >
              <FiX size={24} />
            </button>

            {/* Slick Carousel */}
            <Slider
              {...settings}
              ref={slider => setSlider(slider)}
              className='w-full h-full'
            >
              {selectedProject.images.map((image, index) => (
                <div key={index} className='flex justify-center items-center'>
                  <img
                    src={image}
                    alt={`project-image-${index}`}
                    className='object-contain w-full h-auto max-h-[80vh] mx-auto'
                  />
                </div>
              ))}
            </Slider>

            {/* Navigation Arrows */}
            <div className='absolute top-1/2 left-4 transform -translate-y-1/2 z-10'>
              <button
                className='text-white p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75'
                onClick={() => slider.slickPrev()} // Navigate to previous image
              >
                <FiChevronsLeft size={24} />
              </button>
            </div>
            <div className='absolute top-1/2 right-4 transform -translate-y-1/2 z-10'>
              <button
                className='text-white p-4 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75'
                onClick={() => slider.slickNext()} // Navigate to next image
              >
                <FiChevronsRight size={24} />
              </button>
            </div>

            {/* Project Info */}
            <div className='absolute bottom-0 left-1/2 transform -translate-x-1/2 p-6 bg-black bg-opacity-50 w-full text-center z-20'>
              <h3 className='text-3xl font-bold text-white'>
                {selectedProject.title}
              </h3>
              <p className='mt-4 text-lg text-white'>
                {selectedProject.description}
              </p>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}

export default Portfolio
