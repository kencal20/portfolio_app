"use client";

import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  FileText,
  X,
} from "lucide-react";

export default function FooterComponent() {
  const footerLinks = {
    name: process.env.NEXT_PUBLIC_USER_NAME,
    email: process.env.NEXT_PUBLIC_USER_EMAIL,
    tel: process.env.NEXT_PUBLIC_USER_TEL,
    resume: process.env.NEXT_PUBLIC_USER_RESUME_PATH,
    linkedin: process.env.NEXT_PUBLIC_USER_LINKEDIN,
    github: process.env.NEXT_PUBLIC_USER_GITHUB,
    facebook: process.env.NEXT_PUBLIC_USER_FACEBOOK,
    instagram: process.env.NEXT_PUBLIC_USER_INSTAGRAM,
    x: process.env.NEXT_PUBLIC_USER_X,
  };

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* 👤 Personal Info */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
            {footerLinks.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{footerLinks.tel}</p>
          <a
            href={`mailto:${footerLinks.email}`}
            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          >
            {footerLinks.email}
          </a>
        </div>

        {/* 🔗 Social Icons */}
        <div className="flex gap-5 flex-wrap justify-center">
          <a
            href={`mailto:${footerLinks.email}`}
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Mail size={22} />
          </a>
          <a
            href={footerLinks.resume || "#"}
            aria-label="Resume"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FileText size={22} />
          </a>
          <a
            href={footerLinks.linkedin || "#"}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Linkedin size={22} />
          </a>
          <a
            href={footerLinks.github || "#"}
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Github size={22} />
          </a>
          <a
            href={footerLinks.facebook || "#"}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Facebook size={22} />
          </a>
          <a
            href={footerLinks.instagram || "#"}
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <Instagram size={22} />
          </a>
          <a
            href={footerLinks.x || "#"}
            aria-label="X (Twitter)"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <X size={22} />
          </a>
        </div>
      </div>

      {/* 🧾 Bottom Note */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} {footerLinks.name}. All rights reserved.
      </div>
    </footer>
  );
}
