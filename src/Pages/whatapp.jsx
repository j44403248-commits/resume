import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Professional icon library
import { motion } from 'framer-motion';

const WhatsAppFloatingBtn = () => {
  const phoneNumber = "+923292466406"; // Apna number yahan add karein
  const message = "Hi! I'm interested in your development services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      // Animation: Niche se upar slide hokar aayega
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
      // Hover effect
      whileHover={{ 
        scale: 1.1,
        boxShadow: "0px 0px 20px rgba(37, 211, 102, 0.5)" 
      }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-[9999] bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center"
      aria-label="Contact on WhatsApp"
    >
      <FaWhatsapp size={35} />
      
      {/* Optional: "Chat with us" tooltip jo sirf hover par dikhayi de */}
      <span className="absolute right-16 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        Chat with me
      </span>
    </motion.a>
  );
};

export default WhatsAppFloatingBtn;