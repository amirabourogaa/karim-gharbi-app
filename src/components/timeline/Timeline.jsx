import React from "react";
import { FaCalendarAlt } from "react-icons/fa"; // Icône de calendrier

const Timeline = () => {
  const steps = [
    {
      year: "2010",
      title: "Début de carrière",
      description:
        "Karim Gharbi a débuté sa carrière en tant qu'humoriste dans des petits théâtres locaux. Son talent a rapidement attiré l'attention de plusieurs producteurs et organisateurs de festivals.",
      details:
        "Avec ses performances uniques, il a rapidement gagné en popularité, enchaînant les scènes de festivals à travers le pays et se faisant un nom dans l'univers du spectacle.",
    },
    {
      year: "2015",
      title: "Création de [projet important]",
      description:
        "En 2015, Karim a lancé un projet de grande envergure qui a marqué un tournant dans sa carrière.",
      details:
        "Ce projet a non seulement élargi son influence dans le domaine de la comédie, mais lui a aussi permis de collaborer avec des artistes de renommée internationale.",
    },
    {
      year: "2020",
      title: "Reconnaissance internationale",
      description:
        "Grâce à ses nombreuses performances et émissions à succès, Karim Gharbi a acquis une reconnaissance à l'échelle mondiale.",
      details:
        "De la scène internationale à la télévision, il a su conquérir le cœur d'un public fidèle à travers le monde, devenant un symbole d'humour universel.",
    },
  ];

  return (
    <section className="mt-12 bg-white text-black p-8 sm:p-12 rounded-lg shadow-lg">
      <h2 className="text-4xl font-extrabold mb-6 text-center uppercase tracking-wide relative after:content-[''] after:w-24 after:h-1 after:bg-red-500 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mt-2">
        Parcours
      </h2>

      <ul className="space-y-6">
        {steps.map((step, index) => (
          <li
            key={index}
            className="flex flex-col sm:flex-row items-start space-x-4 group transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-100 rounded-lg p-4"
          >
            <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
              <FaCalendarAlt className="text-white" />
            </div>
            <div className="flex flex-col mt-4 sm:mt-0">
              <span className="text-xl font-semibold text-red-500">{step.year}</span>
              <h3 className="text-2xl font-bold text-gray-800 mt-2">{step.title}</h3>
              <p className="text-lg text-gray-700 mt-2">{step.description}</p>
              <p className="text-md text-gray-600 mt-2 italic">{step.details}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
