import React from "react";
import { motion } from "framer-motion";
import { FaLaugh, FaMicrophone, FaUsers } from "react-icons/fa";
import img_long_5 from '../../assets/img_long_5.jpg'
const AboutSection = () => {
  const features = [
    {
      id: 1,
      icon: <FaLaugh className="text-3xl text-red-500" />,
      title: "Humour familial à l'état pur",
      description:
        "Karim a le don de faire rire, peu importe l'audience, avec des traits d'humour qui touchent tout le monde.",
    },
    {
      id: 2,
      icon: <FaMicrophone className="text-3xl text-red-500" />,
      title: "Un artiste polyvalent",
      description:
        "Que ce soit sur scène ou à la télévision, Karim est partout et son énergie est contagieuse.",
    },
    {
      id: 3,
      icon: <FaUsers className="text-3xl text-red-500" />,
      title: "Proche de son public",
      description:
        "Avec son style unique, Karim Gharbi se connecte toujours à son public et sait comment créer des moments mémorables.",
    },
  ];

  return (
    <section id="about" className="bg-black text-white py-16">
      <div className="container mx-auto px-4 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Image Section */}
          <motion.div
            className="lg:w-1/2 mb-8 lg:mb-0"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <motion.div
                className="absolute top-0 left-0 w-full h-full bg-[#B40D0D] animate-pulse"
                initial={{ scale: 0 }}
                animate={{ scale: 1.2 }}
                transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
              ></motion.div>
              <img
                src={img_long_5}
                alt="Karim Gharbi"
                className="relative rounded-xl shadow-lg overflow-hidden"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="lg:w-1/2 lg:pl-12"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold opacity-80 mb-2">
              Un artiste de grande renommée internationale
            </h3>
            <h2 className="text-3xl font-bold mb-6">
              Plus que 1000 représentations de spectacles en one Man show en
              Tunisie et à l'étranger...
            </h2>
            <p className="opacity-80 mb-8">
              Karim Gharbi, c’est l’humoriste qui sait comment apporter le
              sourire dans chaque situation, même les plus inattendues. Avec
              son humour authentique et son talent indéniable, il captive le
              public à chaque performance.
            </p>

            {/* Features */}
            <div className="space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className="flex items-start space-x-4"
                >
                  <div>{feature.icon}</div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">
                      {feature.title}
                    </h4>
                    <p className="opacity-80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
