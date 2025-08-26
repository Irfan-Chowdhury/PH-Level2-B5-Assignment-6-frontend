import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-inner py-4 text-center text-gray-600">
      © {new Date().getFullYear()} Digital Wallet. All Rights Reserved.
    </footer>
  );
};

export default Footer;
