import Image from "next/image";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery"; // <-- Agrega esta importación
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen font-sans">
      <nav className="w-full bg-white shadow-sm py-4 px-6 flex justify-between items-center fixed top-0 z-50">
        <div className="flex items-center">
          <Image 
            src="/logo-vicber.jpg" 
            alt="Logo de VICBER" 
            width={150} 
            height={50} 
            className="w-auto h-auto max-h-12 object-contain"
          />
        </div>
        <a href="#contacto" className="text-sm font-semibold text-slate-700 hover:text-emerald-600 transition">
          Contacto
        </a>
      </nav>

      <div className="pt-16">
        <Hero />
        <Services />
        <Gallery /> {/* <-- Agrega el componente aquí */}
        <Contact />
      </div>
    </main>
  );
}