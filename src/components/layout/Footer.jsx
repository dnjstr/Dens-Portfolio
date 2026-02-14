import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 text-center text-gray-600 border-t border-gray-200">
      <p>&copy; {new Date().getFullYear()} Den Developer. All rights reserved.</p>
    </footer>
  );
};

export default Footer;