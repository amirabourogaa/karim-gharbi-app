import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { BiPlayCircle } from "react-icons/bi";
import logo from "../../assets/logo.png"
const AboutSectionThree = () => {
  const listItems = [
    "Débuts sur les scènes locales et festivals d'humour",
    "Succès à la télévision avec des émissions humoristiques appréciées",
    "Participation à des tournées nationales et internationales",
  ];

  return (
    <section id="about-3" className="bg-white text-black py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-8">
          {/* Image and Play Button Section */}
          <motion.div
            className="relative lg:w-1/2 order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={logo}
                alt="Karim Gharbi"
                className="rounded-lg shadow-lg w-10/12"
              />
              {/* <motion.a
                href="./assets/videos/visa karim salle opéra.mp4"
                className="absolute inset-0 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <BiPlayCircle className="text-red-500 text-6xl animate-pulse" />
              </motion.a> */}
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:w-1/2 order-1 lg:order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">
              Le Parcours Inspirant de Karim Gharbi
            </h2>
            <p className="opacity-80 mb-4">
              Karim Gharbi a commencé sa carrière avec une passion pour la
              comédie qui l'a mené des petites scènes locales aux grandes salles
              de spectacle à travers la Tunisie. Son charisme naturel et son
              sens aigu de l'observation lui ont permis de se connecter avec son
              public et de transformer chaque performance en une expérience
              mémorable.
            </p>
            <p className="opacity-80 mb-4">
              Avec plus de deux décennies dans le milieu du spectacle, Karim a
              su s'adapter aux différentes tendances de l'humour, tout en restant
              fidèle à son style unique. De la scène au petit écran, il a prouvé
              sa polyvalence en tant qu'humoriste, acteur et même animateur.
            </p>

            {/* List Section */}
            <ul className="list-disc list-inside space-y-3 mb-6">
              {listItems.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                >
                  <FaCheckCircle className="text-red-500 mt-1" />
                  <span className="opacity-80">{item}</span>
                </motion.li>
              ))}
            </ul>

            <a
              href="#"
              className="inline-block px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition duration-300"
            >
              Contactez-nous
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionThree;
