"use client";
import { useState } from 'react';

export default function Contact() {
  const numeroTelefono = "524424469991"; // Tu número sin el +
  
  // Guardamos lo que el usuario escribe
  const [datos, setDatos] = useState({
    nombre: '',
    servicio: 'Paisajismo', // Valor por defecto
    mensaje: ''
  });

  // Función que se ejecuta al darle a "Enviar"
  const enviarPorWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Evita que la página se recargue
    
    // Armamos el mensaje combinando los datos del formulario
    const textoMensaje = `Hola VICBER, mi nombre es *${datos.nombre}*.\n\nEstoy interesado en el servicio de *${datos.servicio}*.\n\nTe comento: ${datos.mensaje}`;
    
    // Generamos el link y lo abrimos en una nueva pestaña
    const link = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(textoMensaje)}`;
    window.open(link, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Cotiza tu Proyecto</h2>
          <p className="text-slate-600">Llena el formulario o mándanos un mensaje directo.</p>
        </div>

        {/* Botón rápido por si no quieren llenar el formulario */}
        <div className="text-center mb-12">
          <a 
            href={`https://wa.me/${numeroTelefono}?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización.`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-10 rounded-lg transition-all shadow-lg w-full md:w-auto"
          >
            Mandar WhatsApp Directo
          </a>
        </div>

        {/* Formulario que también manda a WhatsApp */}
        <form onSubmit={enviarPorWhatsApp} className="space-y-6 bg-slate-50 p-8 rounded-xl border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tu Nombre</label>
              <input 
                type="text" 
                required
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none" 
                placeholder="Ej. Juan Pérez"
                onChange={(e) => setDatos({...datos, nombre: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Servicio de interés</label>
              <select 
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none"
                onChange={(e) => setDatos({...datos, servicio: e.target.value})}
              >
                <option value="Paisajismo">Paisajismo</option>
                <option value="Pasto Sintético">Pasto Sintético</option>
                <option value="Pintura">Pintura</option>
                <option value="Fumigación">Fumigación</option>
                <option value="Albañilería">Albañilería</option>
                <option value="Herrería">Herrería</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Cuéntanos un poco de tu proyecto</label>
            <textarea 
              rows={4} 
              required
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-emerald-600 outline-none" 
              placeholder="Medidas aproximadas, ideas, ubicación..."
              onChange={(e) => setDatos({...datos, mensaje: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit" 
            className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-lg transition-colors"
          >
            Pedir Cotización
          </button>
        </form>
      </div>
    </section>
  );
}