"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeButton() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? resolvedTheme : theme;
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Return a placeholder with the same dimensions during SSR
    return (
      <button
        className="p-2 rounded-md bg-gray-200 dark:bg-gray-800"
        aria-label="Loading theme"
      >
        <div className="w-5 h-5" /> {/* Placeholder with same size as icons */}
      </button>
    );
  }


  return (
    <button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition"
    >
      {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
