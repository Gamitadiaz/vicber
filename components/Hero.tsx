export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-600 text-white py-32 md:py-40 px-4 text-center flex flex-col items-center justify-center overflow-hidden">
      
      {/* TEXTURA DE MALLA (GRID) - Generada con Tailwind puro */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff1a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>

      {/* Luces decorativas */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight drop-shadow-md">
          Soluciones integrales para tu <span className="text-emerald-300">casa y jardín</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-emerald-50 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
          Servicios profesionales de mantenimiento, construcción y remodelación con la calidad que tu hogar merece.
        </p>
        
        <a 
          href="https://wa.me/524424469991?text=Hola,%20me%20interesa%20una%20cotización." 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-white hover:bg-slate-100 text-emerald-800 font-extrabold text-lg md:text-xl py-5 px-12 rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_35px_rgba(16,185,129,0.4)] transition-all duration-300 transform hover:-translate-y-2"
        >
          Contactar ahora
        </a>
      </div>
    </section>
  );
}