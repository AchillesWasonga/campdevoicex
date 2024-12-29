import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faX,
  faInstagram,
  faLinkedin,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white fixed bottom-0 w-full py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Copyright Text */}
        <p className="text-sm">&copy; Campde Voices 2024. All rights reserved.</p>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://www.youtube.com/channel/UCzeoGX8y2htbPBYMI2B_VQg"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            href="https://x.com/i/flow/login?redirect_after_login=%2Fcampdevoices"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FontAwesomeIcon icon={faX} size="lg" />
          </a>
          <a
            href="https://www.instagram.com/campdevoices/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a
            href="https://ke.linkedin.com/company/campdevoices"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
          <a
            href="https://www.facebook.com/CampdeVoices/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500"
          >
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
