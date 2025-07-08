// components/Loader.jsx
import React from "react";
import logo from "../../assets/beyond_blush-logo-BLACK.png"; // use your actual logo path

const LoadingScreen = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-[#fce8df] to-[#f6d0c0] flex flex-col items-center justify-center text-center px-4">
      {/* Spinner Ring */}
      <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center">
        {/* Spinner border */}
        <div className="absolute w-full h-full rounded-full border-[6px] border-t-[#8a4a3b] border-b-[#e6a47f] border-l-transparent border-r-transparent animate-spin-slow"></div>

        {/* Logo breathing */}
        <img
          src={logo}
          alt="Beyond Blush Logo"
          className="w-16 h-16 sm:w-20 sm:h-20 object-contain animate-breathing z-10"
        />
      </div>

      {/* Label */}
      <h1 className="mt-8 text-lg sm:text-2xl font-semibold tracking-wide text-[#5c2e1f]">
        Beyond Blush by Tamanna
      </h1>
    </div>
  );
};

export default LoadingScreen;
