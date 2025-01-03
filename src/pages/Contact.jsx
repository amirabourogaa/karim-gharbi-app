import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Votre message a été envoyé avec succès !");
  };

  return (
    <>
    <Header page='Contact' path="/contact"/>
     <div className="bg-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-16 py-12">
       
       {/* Header */}
       <h1 className="text-4xl font-bold text-center text-black uppercase mb-10">
         Contactez <span className="text-red-500">Karim Gharbi</span>
         <span className="block h-1 w-16 mx-auto bg-red-500 mt-2"></span>
       </h1>
 
       {/* Contact Section */}
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl">
         {/* Contact Info */}
         <div className="space-y-6">
           <div className="flex items-center gap-4">
             <FaMapMarkerAlt className="text-red-500 text-2xl animate-bounce" />
             <div>
               <h3 className="text-xl font-semibold text-black">Production et management</h3>
               <p className="text-gray-700">Tunisia Production

</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <FaPhoneAlt className="text-red-500 text-2xl animate-bounce" />
             <div>
               <h3 className="text-xl font-semibold text-black">Téléphone</h3>
               <p className="text-gray-700">+216 26 162 029</p>
             </div>
           </div>
           <div className="flex items-center gap-4">
             <FaEnvelope className="text-red-500 text-2xl animate-bounce" />
             <div>
               <h3 className="text-xl font-semibold text-black">Email</h3>
               <p className="text-gray-700">contact@karimgharbi.com.tn</p>
             </div>
           </div>
         </div>
 
         {/* Contact Form */}
         <div className="bg-black text-white p-8 rounded-lg shadow-lg">
           <form onSubmit={handleSubmit} className="space-y-6">
             <div>
               <label
                 htmlFor="name"
                 className="block text-sm font-medium text-gray-300 mb-2"
               >
                 Votre Nom
               </label>
               <input
                 type="text"
                 name="name"
                 id="name"
                 value={formData.name}
                 onChange={handleInputChange}
                 className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                 required
               />
             </div>
             <div>
               <label
                 htmlFor="email"
                 className="block text-sm font-medium text-gray-300 mb-2"
               >
                 Votre Email
               </label>
               <input
                 type="email"
                 name="email"
                 id="email"
                 value={formData.email}
                 onChange={handleInputChange}
                 className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                 required
               />
             </div>
             <div>
               <label
                 htmlFor="message"
                 className="block text-sm font-medium text-gray-300 mb-2"
               >
                 Votre Message
               </label>
               <textarea
                 name="message"
                 id="message"
                 value={formData.message}
                 onChange={handleInputChange}
                 rows="5"
                 className="w-full px-4 py-2 bg-white text-black rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-red-500"
                 required
               ></textarea>
             </div>
             <button
               type="submit"
               className="w-full bg-red-500 text-white py-3 px-6 rounded-lg shadow hover:bg-red-600 transition-all duration-300"
             >
               Envoyer
             </button>
           </form>
         </div>
       </div>
     </div>
     <Footer/>
    </>
   
  );
};

export default ContactPage;
