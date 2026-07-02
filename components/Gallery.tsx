"use client";
import Image from 'next/image';
import { useState, useEffect } from 'react';

type Archivo = {
  tipo: string;
  src: string;
};

type ServicioData = {
  categoria: string;
  portada: string;
  tipoPortada: string;
  galeria: Archivo[];
};

// 1. TUS DATOS REALES (Ajusta los nombres de tus archivos aquí)
const SERVICIOS_DATA = [
  {
    categoria: 'Paisajismo',
    portada: '/proyectos/paisajismo/1.jpeg', // <- Cambia '1.jpg' por el nombre real de tu foto
    tipoPortada: 'imagen',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/paisajismo/1.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/2.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/3.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/4.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/5.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/6.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/7.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/8.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/9.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/10.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/11.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/12.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/13.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/14.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/15.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/16.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/17.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/18.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/19.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/20.jpeg' },
      { tipo: 'imagen', src: '/proyectos/paisajismo/21.jpeg' }, 
      { tipo: 'imagen', src: '/proyectos/paisajismo/22.jpeg' },
    ]
  },
  {
    categoria: 'Pintura',
    portada: '/proyectos/pintura/1.jpeg', // <- Cambia por el nombre real
    tipoPortada: 'imagen',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/pintura/1.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/2.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/3.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/4.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/5.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/6.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/7.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pintura/8.jpeg' },

    ]
  },
  {
    categoria: 'Pasto Sintético',
    portada: '/proyectos/pasto-sintetico/1.jpeg', // <- Cambia por el nombre real
    tipoPortada: 'imagen',
    galeria: [
      { tipo: 'imagen', src: '/proyectos/pasto-sintetico/1.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pasto-sintetico/2.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pasto-sintetico/3.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pasto-sintetico/4.jpeg' },
      { tipo: 'imagen', src: '/proyectos/pasto-sintetico/5.jpeg' },

    ]
  }
];

// 2. COMPONENTE: TARJETA ANIMADA (Optimizada para PC y Celular)
// 2. COMPONENTE: TARJETA ANIMADA (Transición suave y Automática)
function TarjetaAnimada({ servicio }: { servicio: ServicioData }) {
  const [indexActivo, setIndexActivo] = useState(0);

  useEffect(() => {
    let intervalo: ReturnType<typeof setInterval>;
    
    // El temporizador ahora SIEMPRE está activo si hay más de 1 foto
    if (servicio.galeria.length > 1) {
      intervalo = setInterval(() => {
        setIndexActivo((prev) => (prev + 1) % servicio.galeria.length);
      }, 3000); // 3000ms = 3 segundos por foto para que luzca bien
    }
    
    return () => clearInterval(intervalo);
  }, [servicio.galeria.length]);

  return (
    <div className="relative h-72 w-full rounded-xl overflow-hidden bg-slate-100 shadow-sm">
      
      {/* 
        EL TRUCO DE LA TRANSICIÓN SUAVE: 
        Renderizamos TODAS las fotos de la galería al mismo tiempo, 
        pero solo le ponemos opacidad al 100% a la que está activa.
      */}
      {servicio.galeria.map((archivo, index) => (
        <div 
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === indexActivo ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {archivo.tipo === 'video' ? (
            <video src={archivo.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
          ) : (
            <Image src={archivo.src} alt={`${servicio.categoria} ${index}`} fill className="object-cover" />
          )}
        </div>
      ))}
      
      {/* Etiqueta del servicio siempre visible sobre las imágenes (z-20 la mantiene arriba) */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 z-20 pointer-events-none">
        <h3 className="text-white font-bold text-lg">{servicio.categoria}</h3>
      </div>
    </div>
  );
}

// 3. COMPONENTE PRINCIPAL
export default function Gallery() {
  const [filtroActivo, setFiltroActivo] = useState('Todos');
  const categorias = ['Todos', ...SERVICIOS_DATA.map(s => s.categoria)];

  const servicioSeleccionado = SERVICIOS_DATA.find(s => s.categoria === filtroActivo);

  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Proyectos</h2>
          <div className="flex relative z-30 overflow-x-auto pb-4 justify-start md:justify-center gap-2 hide-scrollbar">
            {categorias.map(categoria => (
              <button
                key={categoria}
                onClick={() => setFiltroActivo(categoria)}
                className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-semibold transition-colors ${
                  filtroActivo === categoria 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtroActivo === 'Todos' ? (
            SERVICIOS_DATA.map((servicio) => (
              <TarjetaAnimada key={servicio.categoria} servicio={servicio} />
            ))
          ) : (
            servicioSeleccionado?.galeria.map((archivo, index) => (
              <div key={index} className="relative h-72 w-full rounded-xl overflow-hidden bg-slate-100">
                {archivo.tipo === 'video' ? (
                  <video src={archivo.src} autoPlay muted loop playsInline className="w-full h-full object-cover" />
                ) : (
                  <Image src={archivo.src} alt={`${filtroActivo} ${index}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}