import React from "react";
import { motion } from "framer-motion";
import { FaTheaterMasks, FaFilm, FaBullhorn, FaTv } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaTheaterMasks />,
      title: "Spectacles humoristiques",
      description:
        "Venez rire et vous amuser avec Karim Gharbi, où chaque spectacle est un moment de pur bonheur.",
    },
    {
      id: 2,
      icon: <FaFilm />,
      title: "Acteur",
      description:
        "Découvrez Karim dans ses rôles variés, apportant humour et émotion à chaque performance.",
    },
    {
      id: 3,
      icon: <FaBullhorn />,
      title: "Marketing et Communication",
      description:
        "Grâce à sa grande popularité, c'est le joker de la communication digitale et le vrai ambassadeur de votre marque.",
    },
    {
      id: 4,
      icon: <FaTv />,
      title: "Animation télé",
      description:
        "Suivez Karim à la télévision, où son humour illumine chaque émission.",
    },
  ];

  return (
    <section id="services" className="py-16">
      {/* Section Title */}
      <div className="container mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl font-bold text-red-600"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          SERVICES
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto font-mansalva text-xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Découvrez l'univers de l'humour tunisien avec Karim Gharbi, un acteur
          et humoriste de talent.
        </motion.p>
      </div>

      {/* Service Items */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="text-red-600 text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
