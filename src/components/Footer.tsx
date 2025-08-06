import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="mt-20 py-8 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
      {/* Redes sociales */}
      <div className="flex justify-center gap-6 mb-4 text-xl text-indigo-600 dark:text-indigo-400">
        <a
          href="https://www.linkedin.com/in/luisalejolucero/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:scale-125 transform transition-transform duration-300"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Alejo11Lucero"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Github"
          className="hover:scale-125 transform transition-transform duration-300"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/alejo11lucero/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:scale-125 transform transition-transform duration-300"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Texto de copyright */}
      <p className="text-xs">
        © {new Date().getFullYear()} Alejo Lucero. Todos los derechos reservados.
      </p>
    </footer>
  );
}
