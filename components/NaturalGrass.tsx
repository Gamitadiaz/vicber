"use client";
import { useState } from 'react';

export default function NaturalGrass() {
  // Estado para controlar qué tarjeta está abierta. 
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleCard = (id: number) => {
    if (expandedId === id) {
      setExpandedId(null); // Si ya está abierta, la cierra
    } else {
      setExpandedId(id); // Abre la nueva tarjeta
    }
  };

  const tiposDePasto = [
    {
      id: 1,
      nombre: "Pasto Kikuyo",
      cientifico: "Pennisetum clandestinum",
      resumen: "Ideal para climas semidesérticos y sol directo.",
      caracteristicas: "Hoja delgada, estolones finos y raíz muy delgada. Grama gruesa también conocida como pasto africano.",
      color: "Verde amarillento.",
      riego: "Moderado cada tercer día (una vez enraizado).",
      poda: "Cada 15 días.",
      sol: "Mínimo 5 horas de sol directo.",
      colorBarra: "bg-lime-500"
    },
    {
      id: 2,
      nombre: "Pasto Cuernavaca",
      cientifico: "Stenotaphrum secundatum (San Agustín)",
      resumen: "Excelente opción de hoja ancha y color vibrante.",
      caracteristicas: "Hoja ancha, estolón muy grueso al igual que la raíz.",
      color: "Verde bandera.",
      riego: "Abundante cada tercer día (un poco más en días calurosos).",
      poda: "Cada 15 a 20 días. En climas extremosos requiere fertilizante una vez al mes.",
      sol: "Adaptable a diversos climas.",
      colorBarra: "bg-emerald-500"
    },
    {
      id: 3,
      nombre: "Pasto Paspalum",
      cientifico: "Paspalum Notatum",
      resumen: "Pasto enano de crecimiento lento para pleno sol.",
      caracteristicas: "Pasto enano, estolones delgados y raíces iguales. Crecimiento lento.",
      color: "Verde bandera.",
      riego: "Moderado cada tercer día (una vez enraizado).",
      poda: "Cada 15 días para mantener su apariencia excelente.",
      sol: "100% de sol.",
      colorBarra: "bg-teal-500"
    },
    {
      id: 4,
      nombre: "Pasto Festuca",
      cientifico: "Festuca arundinacea",
      resumen: "Pasto de hojas delgadas, altamente estético y tolerante.",
      caracteristicas: "Hojas delgadas y perfil muy estético.",
      color: "Verde medio a verde intenso.",
      riego: "Moderado. Una vez enraizado es tolerante a la sequía.",
      poda: "Altura de 5 a 7 cms (cortar solo 1/3 de su largo de hoja).",
      sol: "Adaptable.",
      colorBarra: "bg-green-600"
    }
  ];

  return (
    <section className="py-24 bg-white bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:24px_24px] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Venta e Instalación</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">Tipos de <span className="text-emerald-500">Pasto Natural</span></h2>
            <p className="text-slate-600 text-lg">
              Conoce las variedades de pasto que manejamos. Selecciona la opción que mejor se adapte al clima, uso y nivel de sol de tu jardín.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiposDePasto.map((pasto) => {
            const isOpen = expandedId === pasto.id;

            return (
              <div 
                key={pasto.id} 
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-md"
              >
                {/* Barra de color superior */}
                <div className={`w-full h-2 ${pasto.colorBarra}`}></div>
                
                {/* Cabecera de la tarjeta (Siempre visible) */}
                <div className="p-6 cursor-pointer" onClick={() => toggleCard(pasto.id)}>
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{pasto.nombre}</h3>
                      <p className="text-sm text-slate-400 italic mb-2">{pasto.cientifico}</p>
                    </div>
                    {/* Icono que rota cuando se abre */}
                    <div className={`w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      ▼
                    </div>
                  </div>
                  <p className="text-slate-600 font-medium mt-2">{pasto.resumen}</p>
                </div>

                {/* Contenido expandible (Se muestra al hacer clic) */}
                <div 
                  className={`px-6 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pt-4 border-t border-slate-100 space-y-3">
                    <p className="text-sm text-slate-700"><strong className="text-slate-900">Características físicas:</strong> {pasto.caracteristicas}</p>
                    <p className="text-sm text-slate-700"><strong className="text-slate-900">Color:</strong> {pasto.color}</p>
                    <p className="text-sm text-slate-700"><strong className="text-slate-900">Riego:</strong> {pasto.riego}</p>
                    <p className="text-sm text-slate-700"><strong className="text-slate-900">Poda:</strong> {pasto.poda}</p>
                    {pasto.sol && (
                      <p className="text-sm text-slate-700"><strong className="text-slate-900">Exposición:</strong> {pasto.sol}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}