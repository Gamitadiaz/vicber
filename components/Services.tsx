// Archivo: src/components/Services.jsx
import { SERVICIOS } from '../data/servicios';


export default function Services() {
  return (
    <section className="py-20 bg-slate-300 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Nuestros Servicios</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Soluciones a la medida de tu proyecto. Trabajamos con los mejores materiales para garantizar durabilidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICIOS.map((servicio) => (
            <div key={servicio.id} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              
              <div className={`w-12 h-12 rounded-lg mb-6 flex items-center justify-center ${servicio.bgIcono} ${servicio.textIcono}`}>
                {/* DIBUJA EL ICONO DINÁMICAMENTE */}
                <img
                  src={servicio.icono}
                  alt={servicio.titulo}
                  className="w-6 h-6"
                />
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">{servicio.titulo}</h3>
              <p className="text-slate-600 leading-relaxed">{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}