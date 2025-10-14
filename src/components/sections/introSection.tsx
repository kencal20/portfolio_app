"use client";

import HeroSection from "../heroSection";

const fullName = process.env.NEXT_PUBLIC_USER_NAME;
const firstName = fullName?.split(" ")[0];

export default function IntroSection() {
  return (
    <HeroSection
      id="home"
      title={`Hi, I'm ${firstName} 👋`}
      subtitle="Frontend Developer & UI Designer"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center text-center md:text-left">
        {/* 🧠 Left Side - Intro Text */}
        <div>
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Crafting{" "}
            <span className="text-blue-600 dark:text-blue-400">Modern</span> &{" "}
            <span className="text-blue-600 dark:text-blue-400">Functional</span>{" "}
            Web Experiences
          </h1>

          <p className="text-gray-700 dark:text-gray-300 max-w-md mb-4">
            I’m passionate about building performant, accessible, and visually
            appealing digital products using React, Next.js, and Tailwind CSS.
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="#projects"
              className="bg-blue-600 dark:bg-blue-500 text-white px-5 py-2 rounded-lg hover:bg-blue-700 dark:hover:bg-blue-400 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 px-5 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-800 transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* 🎨 Right Side - Professional Bio Card */}
        <div className="flex justify-center md:justify-end">
          <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-6 py-6 rounded-3xl shadow-xl max-w-sm hover:scale-105 transition-transform duration-300">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3">
              {fullName}
            </h2>
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed">
              I am a professional frontend developer specializing in building
              modern, responsive, and user-friendly web applications. With a
              strong command of React, Next.js, TypeScript, and Tailwind CSS, I
              craft high-quality, maintainable code and visually appealing
              interfaces. I continuously explore new technologies to deliver
              innovative and effective digital solutions.
            </p>
          </div>
        </div>
      </div>
    </HeroSection>
  );
}
