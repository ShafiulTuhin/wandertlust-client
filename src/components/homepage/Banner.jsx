"use client";
import { Separator } from "@heroui/react";

const Banner = () => {
  return (
    <div className="bg-[url('/Banner.png')] bg-cover bg-center bg-no-repeat text-white min-h-screen flex flex-col justify-between items-center">
      {/* Content */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-10 gap-5 py-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
          Discover Your <br /> Next Adventure
        </h1>

        <p className="text-sm sm:text-base md:text-lg lg:text-2xl max-w-3xl">
          Explore breathtaking destinations and create unforgettable memories
          with our curated travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button className="uppercase bg-cyan-500 px-6 py-3 rounded-md cursor-pointer hover:bg-cyan-600 transition">
            Explore Now
          </button>

          <button className="uppercase px-6 py-3 bg-white/30 backdrop-blur-md rounded-md cursor-pointer hover:bg-white/40 transition">
            View Destination
          </button>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full bg-white/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5 px-4 sm:px-6 lg:px-10 py-5">
          {/* Item */}
          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="text-xs sm:text-sm">Address, City or Zip</p>
          </div>

          <Separator
            className="hidden md:block h-10"
            variant="tertiary"
            orientation="vertical"
          />

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">Date/Duration</h3>
            <p className="text-xs sm:text-sm">Anytime / 3 Days</p>
          </div>

          <Separator
            className="hidden md:block h-10"
            variant="tertiary"
            orientation="vertical"
          />

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">Budget</h3>
            <p className="text-xs sm:text-sm">$0 - $3000</p>
          </div>

          <Separator
            className="hidden md:block h-10"
            variant="tertiary"
            orientation="vertical"
          />

          <div className="text-center md:text-left">
            <h3 className="text-sm font-semibold">People</h3>
            <p className="text-xs sm:text-sm">5 - 10</p>
          </div>

          {/* Button */}
          <button className="bg-cyan-500 hover:bg-cyan-600 transition px-6 py-3 rounded-md font-semibold">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
