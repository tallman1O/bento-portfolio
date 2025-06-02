"use client";
import React from "react";
import Dither from "./utils/background/_Dither/Dither";

const Home = () => {
  return (
    <div className="h-screen w-screen relative">
      <div className="absolute inset-0 z-10">
        <Dither />
      </div>
      <div className="relative h-full w-full flex items-center justify-center p-20">
        <div className="w-1/2 h-[10rem] z-20 bg-white/10 backdrop-blur-sm rounded-lg p-4">
          <h1 className="text-2xl font-bold">Hello</h1>
          <p className="text-xl text-white">
            I'm a software engineer with a passion for building web
            applications.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
