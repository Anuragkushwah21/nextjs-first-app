"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructor = [
  {
    id: 2,
    name: "Daniel Carter",
    designation: "Guitar Instructor",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61",
  },
  {
    id: 3,
    name: "Sophia Martinez",
    designation: "Piano Teacher",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  },
  {
    id: 4,
    name: "Michael Johnson",
    designation: "Music Producer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
  },
  {
    id: 5,
    name: "Emily White",
    designation: "Violin Instructor",
    image: "https://images.unsplash.com/photo-1546967191-fdfb13ed6b1e",
  },
];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
      <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-center h-full ">
        <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">
          {" "}
          Meet Our Instructors
        </h2>
        <p className="text-base md:text-lg lg:text-2xl text-white text-center mb-4">
          Discover the talented professionals who will gui e your musical
          journey
        </p>
        <div className="flex flex-row items-center justify-center mb-10 w-full">
          <AnimatedTooltip items={instructor} />
        </div>
      </WavyBackground>
    </div>
  );
}

export default Instructors;
