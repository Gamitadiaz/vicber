export default function NaturalGrass() {
  const tiposDePasto = [
    {
      nombre: "Pasto Kikuyo",
      descripcion: "Altamente resistente al tráfico pesado y de rápido crecimiento. Ideal para jardines amplios y áreas recreativas.",
      color: "bg-lime-500"
    },
    {
      nombre: "Pasto Cuernavaca",
      descripcion: "Textura suave y hoja ancha. Excelente adaptación a zonas de semisombra y un verde vibrante todo el año.",
      color: "bg-emerald-500"
    },
    {
      nombre: "Pasto San Agustín",
      descripcion: "El más popular para jardines residenciales. Muy estético, denso y excelente para bloquear la maleza.",
      color: "bg-green-600"
    },
    {
      nombre: "Pasto Bermuda",
      descripcion: "Perfecto para exposición total al sol y tolerante a las sequías. Muy usado en campos deportivos.",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-24 bg-white bg-[linear-gradient(to_right,#f0fdf4_1px,transparent_1px),linear-gradient(to_bottom,#f0fdf4_1px,transparent_1px)] bg-[size:24px_24px] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <span className="text-emerald-600 font-bold tracking-wider uppercase text-sm">Especialistas en Áreas Verdes</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">Instalación de <br/><span className="text-emerald-500">Pasto Natural</span></h2>
            <p className="text-slate-600 text-lg">
              Transformamos tu espacio de tierra en un jardín vivo y espectacular. Seleccionamos el tipo de pasto perfecto según el clima, sombra y uso de tu terreno.
            </p>
          </div>
          <div className="md:w-1/3">
             <a 
                href="https://wa.me/524424469991?text=Hola,%20me%20interesa%20una%20cotización%20para%20instalación%20de%20pasto%20natural." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full text-center bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:-translate-y-1"
              >
                Cotizar mi Jardín
              </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tiposDePasto.map((pasto, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-shadow group relative overflow-hidden">
              <div className={`absolute top-0 left-0 w-full h-2 ${pasto.color}`}></div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 mt-2 group-hover:text-emerald-600 transition-colors">{pasto.nombre}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-4">
                {pasto.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}