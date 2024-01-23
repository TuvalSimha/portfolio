import React from "react";

const Footer = () => {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span>Tuval Simha Portflio</span>
        <p className="text-slate-600">All rights reserved © {thisYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
