import { useEffect, useState } from 'react';

export default function Preloader({ onFinish }: { onFinish: () => void }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
      onFinish();
    }, 1250);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center bg-white dark:bg-gray-900 transition-opacity duration-700 ${
        hide ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <span className="text-6xl font-bold text-indigo-600">A</span>
    </div>
  );
}
