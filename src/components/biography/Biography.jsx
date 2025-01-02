import React from "react";
import { FaPlayCircle } from "react-icons/fa"; // Exemple d'icône de lecture
import { AiOutlineArrowRight } from "react-icons/ai"; // Exemple d'icône de flèche

const Biography = () => {
  return (
    <section className="relative mt-12 bg-white text-black p-8 sm:p-12 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-center uppercase tracking-wide relative after:content-[''] after:w-24 after:h-1 after:bg-red-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mt-2">
        Biographie
      </h2>
      
      {/* Texte de biographie */}
      <p className="text-lg leading-relaxed text-gray-800 text-center max-w-3xl mx-auto ">
        Découvrez le parcours fascinant de <span className="font-bold text-red-500">Karim Gharbi</span>, une figure emblématique du monde artistique. Son voyage, riche en défis et en triomphes, est une source d'inspiration pour beaucoup.
      </p>

      <ul className="mt-8 space-y-4">
        {/* Liste d'événements avec icônes */}
        <li className="flex items-start space-x-4 group">
          <div className="w-5 h-5 rounded-full bg-red-500 group-hover:scale-125 transition transform duration-300">
            <FaPlayCircle className="text-white" />
          </div>
          <p className="text-gray-800 group-hover:text-red-500 transition duration-300">
            Débuts sur les scènes locales et festivals d'humour.
          </p>
        </li>
        <li className="flex items-start space-x-4 group">
          <div className="w-5 h-5 rounded-full bg-red-500 group-hover:scale-125 transition transform duration-300">
            <FaPlayCircle className="text-white" />
          </div>
          <p className="text-gray-800 group-hover:text-red-500 transition duration-300">
            Succès à la télévision avec des émissions humoristiques.
          </p>
        </li>
        <li className="flex items-start space-x-4 group">
          <div className="w-5 h-5 rounded-full bg-red-500 group-hover:scale-125 transition transform duration-300">
            <FaPlayCircle className="text-white" />
          </div>
          <p className="text-gray-800 group-hover:text-red-500 transition duration-300">
            Participation à des tournées nationales et internationales.
          </p>
        </li>
      </ul>

      {/* Bouton de contact avec une icône */}
      <div className="mt-10 flex justify-center">
        <a
          href="/contact"
          className="relative px-8 py-3 font-semibold text-black bg-white border-2 border-red-500 rounded-lg shadow-lg transform hover:scale-110 hover:bg-red-500 hover:text-white transition-all duration-300"
        >
          Contactez Karim Gharbi <AiOutlineArrowRight className="inline ml-2" />
        </a>
      </div>
    </section>
  );
};

export default Biography;
