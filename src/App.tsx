import { useState } from 'react';
import useTheme from './hooks/useTheme';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

export default function App() {
  const { darkMode, setDarkMode } = useTheme();
  const [isReady, setIsReady] = useState(false);

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">

      {/* Preloader */}
      {!isReady && <Preloader onFinish={() => setIsReady(true)} />}

      {/* Botón modo claro/oscuro */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed right-4 top-4 px-3 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm z-50"
      >
        {darkMode ? '🌙' : '☀️'}
      </button>

      {/* Contenido principal */}
      {isReady && (
        <div className="fade-in">
          <Navbar />
<main className="pt-20 max-w-6xl mx-auto px-4 space-y-32">
  <Hero />
  <About />
  <Projects />
  <Contact />
</main>
<Footer />
        </div>
      )}
    </div>
  );
}
