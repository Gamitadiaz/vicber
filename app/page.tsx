import Image from "next/image";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";
import NaturalGrass from "@/components/NaturalGrass";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      {/* Se aumentó el padding (py-6) y se añadió efecto cristal (backdrop-blur) */}
      <nav className="w-full bg-white/95 backdrop-blur-md shadow-md py-5 px-6 md:px-12 flex justify-between items-center fixed top-0 z-50">
        <div className="flex items-center">
          {/* Logo mucho más grande usando una medida exacta de Tailwind w-[220px] */}
          <img 
            src="/logo-vicber.jpg" 
            className="w-[180px] md:w-[220px] h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300" 
            alt="Logo Vicber"
          />
        </div>
        
        {/* En lugar de solo texto, hicimos que el botón del menú también sea un botón llamativo a WhatsApp */}
        <a 
          href="https://wa.me/524424469991?text=Hola,%20vengo%20de%20su%20página%20web,%20me%20gustaría%20información." 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold py-3 px-6 rounded-full transition-all shadow-md hover:shadow-lg hover:-translate-y-1"
        >
          Contactar
        </a>
      </nav>

      {/* Aumentamos el pt-28 porque ahora la barra de navegación es más alta por el logo */}
      <div className="pt-28">
        <Services />
        <Hero />
        <About /> 
        <NaturalGrass /> 
        <Gallery />
        <Contact />
      </div>
    </main>
  );
}