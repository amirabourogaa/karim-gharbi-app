import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { events } from './data'; // Importer les événements
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'

// Initialisation du localizer avec Moment.js
const localizer = momentLocalizer(moment);

const CalendarPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);

  // Fonction pour ouvrir le modal avec l'événement sélectionné
  const openModal = (event) => {
    setSelectedEvent(event);
  };

  // Fonction pour fermer le modal
  const closeModal = () => {
    setSelectedEvent(null);
  };

  // Personnalisation de la cellule de la date pour ajouter la photo de l'événement
  const EventCellWrapper = ({ children, value }) => {
    // Chercher si un événement existe pour cette date
    const eventForDate = events.find(event =>
      moment(event.start).isSame(value, 'day') // Vérifier si l'événement correspond à la date
    );

    return (
      <div className="relative">
    
                    {/* Si un événement existe pour cette date, on affiche l'image */}
        {eventForDate && (
          <img
            src={eventForDate.image}
            alt={eventForDate.event}
            className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-cover opacity-40"
            style={{ borderRadius: '50%' }}
          />
        )}
        {/* Affichage du contenu de la cellule */}
        <div className="z-10">{children}</div>
      </div>
    );
  };

  return (
    <div className="bg-white min-h-screen">
      <Header page='Calendrier' path="/calendar" />
      <section className="pt-16 px-6 sm:px-16 py-12">
        <h2 className="text-4xl font-extrabold text-center text-black uppercase mb-10 relative">
          Mon Calendrier de Spectacles
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-red-500"></span>
        </h2>

        {/* Calendrier */}
        <div className="bg-white rounded-lg shadow-lg p-4">
          <Calendar
            localizer={localizer}
            events={events}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 600 }}
            onSelectEvent={openModal}
            components={{
              dateCellWrapper: EventCellWrapper,  // Utilisation de notre cellule personnalisée
            }}
          />
        </div>
      </section>

      {/* Modal d'événement */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
          <div className="relative w-full max-w-3xl bg-white rounded-lg overflow-hidden">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-3 text-white bg-red-500 rounded-full"
            >
              X
            </button>

            {/* Affiche de l'événement */}
            <div className="p-6">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.event}
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <h3 className="text-3xl font-bold text-black">{selectedEvent.event}</h3>
              <p className="mt-4 text-lg text-gray-700">{selectedEvent.description}</p>
              <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Réserver maintenant
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CalendarPage;
