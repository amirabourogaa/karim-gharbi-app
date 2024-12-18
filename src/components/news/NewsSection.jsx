import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaCalendarAlt, FaSearch, FaRegCalendarCheck } from 'react-icons/fa' // Icônes sympa

const NewsSection = () => {
  // State pour gérer les événements, la recherche et l'affichage filtré
  const [events, setEvents] = useState([])
  const [filteredEvents, setFilteredEvents] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  // Fetch des événements depuis une API (remplace avec ton endpoint)
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3000/events')
        const data = await response.json()
        setEvents(data)
        setFilteredEvents(data)
      } catch (error) {
        console.error('Erreur lors de la récupération des événements:', error)
      }
    }

    fetchEvents()
  }, [])

  // Fonction pour gérer la recherche par titre
  const handleSearch = e => {
    setSearchTerm(e.target.value)
    const filtered = events.filter(event =>
      event.title.toLowerCase().includes(e.target.value.toLowerCase())
    )
    setFilteredEvents(filtered)
  }

  return (
    <section className='max-w-7xl mx-auto px-4 py-8'>
      {/* Barre de recherche */}
      <div className='flex justify-center mb-6'>
        <div className='relative w-1/2'>
          <input
            type='text'
            className='w-full p-3 pl-10 rounded-lg border border-red-200 focus:outline-none focus:ring-2 focus:ring-red-500'
            placeholder='Rechercher un événement...'
            value={searchTerm}
            onChange={handleSearch}
          />
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400' />
        </div>
      </div>

      {/* Liste des événements */}
      <div className='space-y-6'>
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <motion.div
              key={event.id}
              className='bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-all duration-300'
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='flex items-center space-x-4'>
                <FaCalendarAlt className='text-red-600 text-3xl' />
                <div>
                  <h3 className='text-xl font-semibold text-gray-800'>
                    {event.title}
                  </h3>
                  <p className='text-gray-500 mt-2'>{event.description}</p>
                  <p className='mt-4 text-sm text-gray-400'>
                    {new Date(event.date).toLocaleDateString()}
                  </p>
                </div>
              </div>
              <div className='mt-4 flex justify-end'>
                <motion.button
                  className='bg-red-500 text-white p-3 rounded-full hover:bg-red-800 transition-all duration-300 flex items-center'
                  whileHover={{ scale: 1.05 }}
                >
                  <FaRegCalendarCheck className='mr-2' />
                  Réserver
                </motion.button>
              </div>
            </motion.div>
          ))
        ) : (
          <p className='text-center text-gray-500'>Aucun événement trouvé</p>
        )}
      </div>
    </section>
  )
}

export default NewsSection
