import { componentTypes } from "@/types";

export default function HeroSection({
  id,
  title,
  subtitle,
  children,
  gradient = "from-blue-50 to-white dark:from-slate-900 dark:to-slate-950",
  className = "",
}: componentTypes["HeroSection"]) {
  return (
    <section
      id={id}
      className={`min-h-screen flex flex-col justify-center items-center bg-gradient-to-b ${gradient} text-gray-900 dark:text-gray-100 transition-colors duration-500 px-4 ${className}`}
    >
      <div className="max-w-7xl w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold mb-2">{title}</h2>
          {subtitle && (
            <p className="text-gray-600 dark:text-gray-300 text-lg">{subtitle}</p>
          )}
        </div>

        {/* Section Content */}
        <div>{children}</div>
      </div>
    </section>
  );
}
