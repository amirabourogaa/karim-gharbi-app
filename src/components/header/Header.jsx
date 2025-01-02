import React from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";

const Header = ({ page, path }) => {
  return (
    <header className="relative w-full h-60 bg-black text-white flex items-center justify-center overflow-hidden mt-16">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-black animate-pulse opacity-30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center">
        {/* <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-2 text-sm md:text-lg text-gray-300">{subtitle}</p>
        )} */}
        <Breadcrumb page={page} path={path}/>
      </div>
    </header>
  );
};

export default Header;
