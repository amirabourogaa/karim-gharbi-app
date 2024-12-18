import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer bg-black text-white py-8">
      <div className="footer-top">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="footer-about">
              <a href="index.html" className="logo flex items-center">
                <span className="text-3xl font-semibold font-mansalva">Karim Gharbi</span>
              </a>
              <div className="footer-contact pt-4">
                <p>Production et management : Tunisia Production</p>
                <p className="mt-3">
                  <strong>Téléphone:</strong> <span>+216 26 162 029</span>
                </p>
                <p>
                  <strong>Email:</strong>
                  <span>contact@karimgharbi.com.tn</span>
                </p>
              </div>
            </div>

            <div className="footer-links">
              <h4 className="text-xl font-semibold">Liens utiles</h4>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-white hover:text-red-400">Accueil</a></li>
                <li><a href="#" className="text-white hover:text-red-400">Parcours</a></li>
                <li><a href="#" className="text-white hover:text-red-400">Projets</a></li>
                <li><a href="#" className="text-white hover:text-red-400">Contact</a></li>
                <li><a href="#" className="text-white hover:text-red-400">Termes et conditions</a></li>
                <li><a href="#" className="text-white hover:text-red-400">Politique de Confidentialité</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright text-center py-4">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left">
            <p>
              © Copyright <strong>Karim Gharbi</strong>. Tous droits réservés
            </p>
          </div>

          <div className="social-links flex space-x-4 mt-4 lg:mt-0">
            <a href="#" className="text-white hover:text-red-400">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-400">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-400">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-white hover:text-red-400">
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
