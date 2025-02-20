"use client"
import Link from "next/link";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {
  const Webinars = [
    {
      title: "Mastering Guitar Chords",
      description:
        "Learn the essential guitar chords and how to transition smoothly between them.",
      slug: "mastering-guitar-chords",
      isFeatured: false,
    },
    {
      title: "The Art of Songwriting",
      description:
        "Discover techniques and structures to craft memorable and impactful songs.",
      slug: "the-art-of-songwriting",
      isFeatured: true,
    },
    {
      title: "Jazz Improvisation Basics",
      description:
        "Explore the foundations of jazz improvisation and develop your soloing skills.",
      slug: "jazz-improvisation-basics",
      isFeatured: false,
    },
    {
      title: "Electronic Music Production",
      description:
        "Get started with digital audio workstations and create your own beats and tracks.",
      slug: "electronic-music-production",
      isFeatured: true,
    },
    {
      title: "Vocal Techniques for Singers",
      description:
        "Improve your vocal range, tone, and breath control with expert techniques.",
      slug: "vocal-techniques-for-singers",
      isFeatured: false,
    },
    {
      title: "Music Composition Essentials",
      description:
        "Understand the principles of melody, harmony, and rhythm to compose your own music.",
      slug: "music-composition-essentials",
      isFeatured: true,
    },
    {
      title: "History of Classical Music",
      description:
        "Take a journey through the evolution of classical music from the Baroque era to today.",
      slug: "history-of-classical-music",
      isFeatured: false,
    },
    {
      title: "Mixing and Mastering Basics",
      description:
        "Learn how to mix and master your tracks for a professional sound.",
      slug: "mixing-and-mastering-basics",
      isFeatured: true,
    },
    {
      title: "Percussion Techniques 101",
      description:
        "Master essential percussion techniques for drums, congas, and other instruments.",
      slug: "percussion-techniques-101",
      isFeatured: false,
    },
  ];

  return (
    <div className="p-12 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED WEBINARS
          </h2>
          <p className="text-white mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
            Enhance Your Musical Journey
          </p>
        </div>
        <div className="mt-10">
        <HoverEffect items={Webinars.map(Webinar=>(
          {
            title: Webinar.title,
            description:Webinar.description,
            link:"/",
            isFeatured:Webinar.isFeatured
          }
        ))} />
        </div>
        <div className="mt-10 text-center">
          <Link
            href={"/"}
            className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
          >
            View All Webinars
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UpcomingWebinars;
