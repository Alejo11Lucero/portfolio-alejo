export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-gray-900 dark:text-white">
        <a href="#" className="group">
  <img
    src="/favicon2.png"
    alt="Logo"
    className="w-8 h-8 transition-transform duration-500 group-hover:rotate-360"
  />
</a>

        <ul className="flex gap-6 text-sm">
          <li><a href="#about" className="hover:underline">Sobre mí</a></li>
          <li><a href="#projects" className="hover:underline">Proyectos</a></li>
          <li><a href="#contact" className="hover:underline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
}
