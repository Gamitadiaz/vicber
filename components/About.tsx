export default function About() {
  return (
    <section className="bg-emerald-900 text-emerald-50 py-12 px-4 border-t-4 border-emerald-500">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white tracking-wide">Nuestro Compromiso</h2>
        <p className="text-lg md:text-xl font-light italic leading-relaxed mb-6">
          "Nuestros servicios están comprometidos con la atención al cliente, el profesionalismo y la honestidad."
        </p>
        <div className="w-16 h-1 bg-emerald-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-md md:text-lg text-emerald-200/90 font-medium">
          <span className="font-bold text-white uppercase tracking-widest text-sm block mb-2">Misión</span>
          Ser una empresa de servicios de mantenimiento dedicada a la satisfacción total de nuestros clientes, sustentada siempre en la mejora continua.
        </p>
      </div>
    </section>
  );
}