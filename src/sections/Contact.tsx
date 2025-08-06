import { useEffect, useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Enviando...');

    emailjs
      .send(
        'Service_email_alejo',
        'template_alejo',
        formData,
        'xxi1tf88u7GqGylJn'
      )
      .then(() => {
        setStatus('Mensaje enviado correctamente ✅');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Error al enviar el mensaje ❌');
      });
  };

  return (
    <section
      id="contact"
      className={`scroll-mt-20 transition-all duration-700 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <h2 className="text-3xl font-bold text-indigo-600 dark:text-indigo-400 text-center mb-6">
        Contacto
      </h2>

      <p className="text-gray-700 dark:text-gray-300 text-center max-w-xl mx-auto mb-6">
        Si querés trabajar conmigo, tenés una consulta o simplemente saludar, escribime:
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Tu correo"
          required
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          value={formData.email}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Tu mensaje"
          required
          className="w-full p-2 rounded border dark:bg-gray-700 dark:border-gray-600"
          rows={5}
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
        >
          <FaEnvelope className="inline mr-2" />
          Enviar mensaje
        </button>

        {status && (
          <p className="text-sm mt-2 text-center text-gray-700 dark:text-gray-400">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
