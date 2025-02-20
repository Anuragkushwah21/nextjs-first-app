"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
    {
      title: "Discover Your Sound with Us: A Personal Journey in Music Mastery",
      description:
        "Embark on a musical journey that's uniquely yours. Our personalized instruction adapts to your individual needs, setting the stage for unparalleled growth and creativity. At our music school, your aspirations meet our dedicated support, creating a harmonious path to mastery.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--purple-500))] flex items-center justify-center text-white">
          Discover Your Sound
        </div>
      ),
    },
    {
      title: "Live Music Classes",
      description:
        "Join live interactive music classes with experienced instructors. Learn instruments, vocals, and music theory in real-time. Get instant feedback and improve your skills faster.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--yellow-500))] flex items-center justify-center text-white">
          Live Music Classes
        </div>
      ),
    },
    {
      title: "Personalized Learning",
      description:
        "Tailored music lessons based on your skill level and preferences. Whether you're a beginner or an advanced musician, our platform adapts to your learning pace and style.",
      content: (
        <div className="h-full w-full flex items-center justify-center text-white">
          Personalized Learning
        </div>
      ),
    },
    {
      title: "Music Theory & Composition",
      description:
        "Understand the fundamentals of music theory and composition. Learn about scales, chords, and songwriting techniques to create your own music with confidence.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--red-500))] flex items-center justify-center text-white">
          Music Theory & Composition
        </div>
      ),
    },
    {
      title: "Student Performances",
      description:
        "Showcase your talent in virtual concerts and competitions. Gain confidence, receive feedback, and connect with fellow musicians in our supportive community.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--blue-500))] flex items-center justify-center text-white">
          Student Performances
        </div>
      ),
    },
    {
      title: "Instrument Mastery",
      description:
        "Master your favorite instrument with expert guidance. From guitar to piano, violin to drums, we help you achieve technical excellence and musical expression.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--pink-500),var(--purple-500))] flex items-center justify-center text-white">
          Instrument Mastery
        </div>
      ),
    },
    {
      title: "Music Production",
      description:
        "Learn the art of music production, recording, and sound engineering. Create high-quality tracks with industry-standard tools and techniques.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-500),var(--black-500))] flex items-center justify-center text-white">
          Music Production
        </div>
      ),
    },
    {
      title: "Group Sessions & Jamming",
      description:
        "Collaborate with fellow musicians in group sessions and live jam events. Develop your improvisation skills and experience the joy of ensemble playing.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--green-500))] flex items-center justify-center text-white">
          Group Sessions & Jamming
        </div>
      ),
    },
    {
      title: "Music History & Appreciation",
      description:
        "Explore the evolution of music through different eras and genres. Understand the cultural impact of music and deepen your appreciation for the art form.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--brown-500),var(--beige-500))] flex items-center justify-center text-white">
          Music History & Appreciation
        </div>
      ),
    },
    {
      title: "Performance Coaching",
      description:
        "Get expert coaching to refine your stage presence and performance skills. Overcome stage fright and develop the confidence to shine on stage.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--indigo-500))] flex items-center justify-center text-white">
          Performance Coaching
        </div>
      ),
    },
  ];
function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  );
}

export default WhyChooseUs;
