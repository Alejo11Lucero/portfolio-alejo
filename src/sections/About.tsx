import {FaReact,FaGitAlt,FaDocker,FaNodeJs,FaHtml5,FaCss3Alt,FaPython, FaJs} from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiStripe } from 'react-icons/si';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import perfil from '../assets/ALejo.jpeg';

export default function About() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="about"
      className={`scroll-mt-20 transition-all duration-700 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">
        Sobre mí
      </h2>

            <div className="flex flex-col lg:flex-row items-start gap-8">
        {/* Foto con efecto 3D */}
        <div className="w-full lg:w-1/3 flex justify-center">
          <Tilt
            glareEnable={true}
            glareMaxOpacity={0.2}
            glareColor="#ffffff"
            glarePosition="all"
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            transitionSpeed={1000}
            scale={1.05}
            className="rounded-2xl border border-indigo-200 dark:border-indigo-800 shadow-lg"
            style={{
              borderRadius: '1rem',
              overflow: 'hidden'
            }}
          >
          <img
            src={perfil}
            alt="Alejo Lucero"
            className="rounded-2xl w-48 h-48 object-cover shadow-lg border border-indigo-200 dark:border-indigo-800"
          />
           </Tilt>
        </div>

        {/* Texto y tecnologías */}
        <div className="w-full lg:w-2/3 space-y-6 text-gray-700 dark:text-gray-300">
          <div className="space-y-4">
            <p>
              Soy Luis Alejo Lucero, Técnico en Desarrollo Web y Aplicaciones Móviles, formado en el Instituto Superior Politécnico de Córdoba.
              Me apasiona crear experiencias digitales modernas, rápidas y accesibles para todos.
            </p>
            <p>
              Me especializo en Frontend, mayormente en tecnologias como React, JavaSCript, TypeScript, HTML, CSS y Tailwind CSS. También tengo conocimientos de backend con herramientas como Python, Node.js, Docker y Stripe.
            </p>
            <p>
              A su vez implemento buenas prácticas de desarrollo como Git, pruebas unitarias y metodologías ágiles. Buscando que mi trabajo quede lo mas limpio y legible posible.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Tecnologías que uso:</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 text-3xl">
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#61DAFB]">
    <FaReact />
    <span className="text-sm mt-1">React</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#3178C6]">
    <SiTypescript />
    <span className="text-sm mt-1">TypeScript</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#306998]">
    <FaPython />
    <span className="text-sm mt-1">Python</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#F7DF1E]">
    <FaJs />
    <span className="text-sm mt-1">JavaScript</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#06B6D4]">
    <SiTailwindcss />
    <span className="text-sm mt-1">Tailwind</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#F05032]">
    <FaGitAlt />
    <span className="text-sm mt-1">Git</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#2496ED]">
    <FaDocker />
    <span className="text-sm mt-1">Docker</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#008CDD]">
    <SiStripe />
    <span className="text-sm mt-1">Stripe</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#339933]">
    <FaNodeJs />
    <span className="text-sm mt-1">Node.JS</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#E34F26]">
    <FaHtml5 />
    <span className="text-sm mt-1">HTML</span>
  </div>
  <div className="flex flex-col items-center transition-colors duration-300 text-indigo-600 hover:text-[#1572B6]">
    <FaCss3Alt />
    <span className="text-sm mt-1">CSS</span>
  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
}
