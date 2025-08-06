import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import todoImg from '../assets/todo-list.png';
import dashboardImg from '../assets/dashboard.png';

export default function Projects() {
  const projects = [
    {
      title: 'ToDo List App',
      description:
        'Aplicación de tareas con modo oscuro, notificaciones animadas y selector de fechas. Hecha con React, TypeScript y TailwindCSS.',
      image: todoImg,
      tech: ['React', 'TypeScript', 'TailwindCSS'],
      github: 'https://github.com/Alejo11Lucero/ToDo-List',
      demo: 'https://to-do-list-omega-olive-54.vercel.app/',
    },
    {
      title: 'Dashboard',
      description:
        'Dashboard animado que simula estadísticas con gráficos interactivos. Ideal para mostrar uso de gráficas, diseño responsivo y cambio de tema.',
      image: dashboardImg,
      tech: ['React', 'TypeScript', 'TailwindCSS', 'Recharts'],
      github: 'https://github.com/Alejo11Lucero/Dashborad',
      demo: 'https://dashboardalejo.vercel.app/',
    },
  ];

  return (
    <section id="projects" className="scroll-mt-20">
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
        Proyectos
      </h2>

      <div className="space-y-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row gap-6 items-start group"
          >
            {/* Imagen */}
            <div className="md:w-1/2 rounded-lg overflow-hidden shadow-md border border-gray-200 dark:border-gray-700">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Contenido */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-2xl font-semibold">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300">
                {project.description}
              </p>

              {/* Tecnologías */}
              <ul className="flex flex-wrap gap-2 text-sm">
                {project.tech.map((t, i) => (
                  <li
                    key={i}
                    className="px-2 py-1 rounded bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              {/* Botones */}
              <div className="flex gap-4 mt-2">
                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <FaGithub /> Código
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  className="flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-400 hover:underline"
                >
                  <FaExternalLinkAlt /> Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
