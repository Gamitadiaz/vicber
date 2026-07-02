// Archivo: src/components/Hero.jsx

export default function Hero() {
  return (
    <section className="relative bg-emerald-700 text-white py-32 px-4 text-center flex flex-col items-center justify-center">
      {/* Si tienes una imagen de fondo, se puede agregar aquí con un overlay oscuro */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
          Soluciones integrales para tu casa y jardín
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-10">
          Servicios profesionales de mantenimiento, construcción y remodelación con la calidad que tu hogar merece.
        </p>
        <a 
          href="https://wa.me/524424469991?text=Hola,%20vengo%20de%20su%20página%20web,%20me%20gustaría%20información." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          Contactar ahora
        </a>
      </div>
    </section>
  );
}