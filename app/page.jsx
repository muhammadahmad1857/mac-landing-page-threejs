"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Divide as Hamburger } from "hamburger-react";
import Model from "./(components)/model";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="relative w-full h-screen bg-gray-900 text-white overflow-hidden">
      {/* Sidebar for small screens */}
      <div
        className={`fixed top-0 right-0 h-full bg-black z-50 transform  overflow-y-auto sm:w-80 w-full transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex flex-col gap-6 flex-grow">
            <div className="text-lg font-semibold sm:hidden">
              <Link
                href="https://github.com/muhammadahmad1857"
                className="text-white hover:text-gray-300 transition-colors duration-300"
              >
                Muhammad Ahmad
              </Link>
            </div>
            {[
              "ipad",
              "services",
              "ios",
              "mac",
              "products",
              "iphone",
              "watch",
              "accessories",
              "support",
              "store",
            ].map((item, i) => (
              <Link
                href="#"
                className="text-lg font-semibold w-full p-4 rounded-xl text-center bg-black transition-colors duration-500 hover:bg-gray-900 hover:text-gray-300 "
                key={i}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Navbar for larger screens */}
      <header className="relative w-full py-6 bg-black bg-opacity-60 border-b border-gray-700 md:flex md:items-center md:justify-center px-6 md:px-12">
        <div className="flex items-center md:hidden justify-between w-full">
          <div className="text-lg font-semibold md:hidden">
            <Link
              href="https://github.com/muhammadahmad1857"
              className="text-white hover:text-gray-300 transition-colors duration-300"
            >
              Muhammad Ahmad
            </Link>
          </div>
          <button className="text-white absolute right-3 z-50 focus:outline-none">
            <Hamburger toggled={isSidebarOpen} toggle={setIsSidebarOpen} />
          </button>
        </div>
        <nav className="hidden md:flex md:items-center md:justify-center md:gap-8">
          {[
            "ipad",
            "services",
            "ios",
            "mac",
            "products",
            "iphone",
            "watch",
            "accessories",
            "support",
            "store",
          ].map((item, i) => (
            <Link
              href="#"
              className="text-lg font-semibold relative before:absolute before:w-0 before:h-1 before:bg-red-600 before:bottom-0 before:left-1/2 before:transform before:-translate-x-1/2 before:transition-all before:hover:w-full before:duration-500 hover:text-gray-300 transition-colors duration-300"
              key={i}
            >
              {item}
            </Link>
          ))}
        </nav>
      </header>

      <main className="absolute top-1/4 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="masked text-6xl font-cinzel font-extrabold mb-4">
          Macbook Pro
        </h1>
        <h2 className="text-2xl font-medium mb-4">Oh So Pro!</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa sint
          ratione asperiores explicabo?
        </p>
      </main>
      <Model />
    </div>
  );
};

export default Home;
