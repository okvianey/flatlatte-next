'use client'

import { useState, useEffect } from "react";
import { createReservation } from "./fakeApi";
import { downloadICS } from "./downloadICS";
import ReservationsTable from "./ReservationsTable";

export default function ReservacionesDemo() {
  const [form, setForm] = useState({
    nombre: "",
    telefono: "",
    email: "",
    personas: "2",
    fecha: "",
    hora: "",
    notas: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");
  const [confirm, setConfirm] = useState(null);
  const [ registros, setRegistros ] = useState([]);
  
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function validate() {
    if (!form.nombre) return "Por favor indica tu nombre.";
    if (!form.telefono) return "Por favor indica teléfono (para WhatsApp).";
    if (!form.fecha || !form.hora) return "Selecciona fecha y hora.";
    return null;
  }

  async function handleSubmit(e) {
  e.preventDefault();
  const err = validate();
  if (err) {
    alert(err);
    return;
  }
  setLoading(true);
  setMsg("");

  try {
    const nueva = await createReservation(form);
    
    setConfirm(nueva);

    setRegistros(prev => [...prev, nueva]);

    setMsg("Reservación guardada (simulación exitosa)");

    setForm({
      nombre: "",
      telefono: "",
      email: "",
      personas: "2",
      fecha: "",
      hora: "",
      notas: "",
    });
  } catch (error) {
    setMsg("Error inesperado");
  }

  setLoading(false);
}


  function openWhatsApp() {
    if (!confirm) return;
    const text = encodeURIComponent(
      `Flat Latte Demo:%0AHola ${confirm.nombre} — tu reservación está confirmada para el ${confirm.fecha} a las ${confirm.hora} para ${confirm.personas} personas. Te esperamos en [Nombre del Café]. Si necesitas cambiarla responde este mensaje.`
    );
    // Abre WhatsApp Web con el texto (usuario puede enviarlo)
    window.open(`https://wa.me/?text=${text}`, "_blank");
  }

  useEffect(() => {
  const stored = JSON.parse(localStorage.getItem("reservas-demo") || "[]");
  setRegistros(stored);
}, []);


  return (
    <main className="min-h-screen section bg-white text-gray-800">
      <div className="max-w-4xl mx-auto p-8">
        {/* Hero */}
        <section className="text-center py-8">
          <h1 className="text-4xl font-semibold text-[#4B2E23]">Reservaciones automáticas que trabajan por ti</h1>
          <p className="mt-4 text-lg text-gray-700">Tu cliente reserva en 15 segundos. Tú recibes confirmación inmediata en Google Calendar. Sin mensajes, sin estrés.</p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form */}
          <div className="bg-white border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-medium text-[#4B2E23] mb-4">Probar demo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Nombre completo</label>
                <input name="nombre" value={form.nombre} onChange={handleChange} placeholder="Ej. Ana Pérez" className="mt-1 block w-full rounded-md border px-3 py-2" />
              </div>
              <div>
                <label className="block text-sm font-medium">Teléfono</label>
                <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="+52 912 345 6789" className="mt-1 block w-full rounded-md border px-3 py-2" />
                <p className="text-xs text-gray-500 mt-1">Se usa solo para la demo del mensaje de WhatsApp.</p>
              </div>
              <div>
                <label className="block text-sm font-medium">Email (opcional)</label>
                <input name="email" value={form.email} onChange={handleChange} placeholder="tu@correo.com" className="mt-1 block w-full rounded-md border px-3 py-2" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium">Personas</label>
                  <input name="personas" value={form.personas} onChange={handleChange} className="mt-1 block w-full rounded-md border px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Notas</label>
                  <input name="notas" value={form.notas} onChange={handleChange} placeholder="Preferencias, cumpleaños..." className="mt-1 block w-full rounded-md border px-3 py-2" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium">Fecha</label>
                  <input name="fecha" value={form.fecha} onChange={handleChange} type="date" className="mt-1 block w-full rounded-md border px-3 py-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Hora</label>
                  <input name="hora" value={form.hora} onChange={handleChange} type="time" className="mt-1 block w-full rounded-md border px-3 py-2" />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button type="submit" disabled={loading} className="px-3 py-2 bg-[#4B2E23] text-white border rounded">
                  {loading ? "Reservando..." : "Reservar ahora"}
                </button>
                <button type="button" onClick={() => { setForm({ nombre: "María López", telefono: "+52 922 111 2222", email: "maria@ejemplo.com", personas: "3", fecha: new Date().toISOString().slice(0,10), hora: "19:00", notas: "" }); }} className="px-3 py-2 border rounded">Cargar demo</button>
              </div>
               {msg && (
                  <p className="text-center text-sm text-green-600 font-semibold mt-2">
                    {msg}
                  </p>
                )}
            </form>

            {/* Confirmación */}
            {confirm && (
              <div className="mt-6 p-4 bg-[#F7F3EE] border rounded">
                <h3 className="font-medium">Reserva confirmada</h3>
                <p className="text-sm mt-1">Se envió (simulado) un mensaje a WhatsApp y la reservación está disponible para calendario.</p>
                <div className="mt-3 flex gap-2">
                  <button onClick={openWhatsApp} className="px-3 py-2 bg-[#8B6B5A] text-white rounded">Abrir WhatsApp Web</button>
                  {/* <button onClick={downloadICS} className="px-3 py-2 border rounded">Descargar .ics</button> */}
                </div>
                {/* <pre className="mt-3 text-xs bg-white p-2 rounded border text-gray-700">{JSON.stringify(confirm, null, 2)}</pre> */}
              </div>
            )}
          </div>

          {/* Right: Vista mock calendario + registros */}
          <aside>
            <ReservationsTable registros={registros} />

            {confirm ? (
              <div className="bg-white border rounded-lg p-4 shadow-sm mb-6">
                <h3 className="text-lg font-medium text-[#4B2E23]">Vista demo: Google Calendar</h3>
                <div className="mt-3 border rounded p-3">
                  <p className="text-sm text-gray-600">
                    (Simulación) Tu calendario mostrará la nueva reserva en 
                    <b> {confirm.fecha}</b> a las <b>{confirm.hora}</b>.
                  </p>
                  <div className="mt-3 h-40 rounded bg-white flex items-center justify-center border-dashed border-2 border-gray-200">
                    <span className="text-sm text-gray-400">Panel de calendario (mock)</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-sm text-gray-400 mb-6">
                Aún no hay reservación confirmada para mostrar en la vista previa.
              </div>
            )}

          </aside>
        </div>

        <footer className="mt-10 text-center text-gray-500">
          <p>Demo creado por Flat Latte — Reservaciones automáticas (demo)</p>
        </footer>
      </div>
    </main>
  );
}
