export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-start gap-4"
    >
      <p className="text-lg text-gray-600 dark:text-gray-400">
        Hola, mi nombre es:
      </p>

      <h1 className="text-7xl font-bold text-gray-900 dark:text-white">
        Luis Alejo Lucero
      </h1>

      <h2 className="text-3xl font-semibold text-indigo-600 dark:text-indigo-400">
        Desarrollador Web Frontend
      </h2>

      <p className="max-w-md text-gray-700 dark:text-gray-300">
        Técnico en Desarrollo Web, enfocado en crear experiencias digitales
        modernas con React, Tailwind y TypeScript.
      </p>

      <a
        href="#projects"
        className="mt-4 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
      >
        Ver proyectos
      </a>
    </section>
  );
}
