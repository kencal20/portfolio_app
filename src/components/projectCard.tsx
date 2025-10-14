"use client";

import Image, { StaticImageData } from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
    id?: number;
    title: string;
    description: string;
    image: string | StaticImageData;
    github?: string;
    live?: string;
    languages: string[];
}

export default function ProjectCard({
    title,
    description,
    image,
    github,
    live,
    languages,
}: ProjectCardProps) {
    // Fixed: More robust empty checks
    const hasGithub = github !== undefined && github !== null && github.trim() !== "";
    const hasLive = live !== undefined && live !== null && live.trim() !== "";

    return (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col h-full">
            {/* Project Image - Fixed aspect ratio */}
            <div className="relative w-full h-48 sm:h-52 flex-shrink-0">
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={false}
                />
            </div>

            {/* Content - Improved layout */}
            <div className="p-5 flex flex-col flex-grow">
                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 line-clamp-2 min-h-[3.5rem]">
                    {title}
                </h3>
                
                {/* Description - Better text control */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-grow">
                    {description}
                </p>

                {/* Technologies - Better spacing */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {languages.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-1 rounded-md whitespace-nowrap"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Buttons - Always at bottom */}
                <div className="flex gap-2 mt-auto pt-2">
                    {hasGithub && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${title} source code on GitHub`}
                            className="flex items-center justify-center gap-1 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 text-sm px-3 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-700 transition flex-1 text-center"
                        >
                            <Github className="w-4 h-4 flex-shrink-0" /> 
                            <span className="truncate">Source</span>
                        </a>
                    )}

                    {hasLive && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${title} live demo`}
                            className="flex items-center justify-center gap-1 bg-blue-600 text-white text-sm px-3 py-2 rounded-md hover:bg-blue-700 transition flex-1 text-center"
                        >
                            <ExternalLink className="w-4 h-4 flex-shrink-0" /> 
                            <span className="truncate">Live</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}