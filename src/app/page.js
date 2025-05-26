'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact form submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Head for metadata */}
      <Head>
        <title>Impuestos - Servicio de Facturación Electrónica</title>
        <meta name="description" content="Streamline your invoice tax management in Bolivia with BoliviaTax software." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-blue-600 text-white">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Simplexbo</h1>
          <div className="space-x-4">
            <Link href="#features" className="hover:text-gray-200">Features</Link>
            <Link href="#about" className="hover:text-gray-200">About</Link>
            <Link href="#contact" className="hover:text-gray-200">Contact</Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-4">Simplifique su emisión de facturas electrónicas de Erick Poppe Yañez</h2>
          <p className="text-xl mb-6">Simplexbo le ofrece el servicio y software de facturación electrónica que usted necesita de acuerdo a normativa.</p>
          <Link href="#contact" className="inline-block bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100">
            Comenzar
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">¿Por qué escoger a Simplexbo?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Trabajamos soluciones a medidad de sus necesidades</h3>
              <p>Proveemos todo el software de facturación electrónica que necesita con la interfaz de acuerdo a sus requerimientos.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Interfaz de usuario amigable</h3>
              <p>Diseño intuitivo para todo tipo de negocios.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Real-Time Reporting</h3>
              <p>Genere reportes detallados de ventas y establezca facturación fuera de linea en casos de emergencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Acerca de Simplexbo de Erick Poppe</h2>
          <p className="text-lg text-center max-w-3xl mx-auto">
             Simplexbo de Erick Poppe provee todos los servicios de emisión de facturación electrónica para todos lás actividades económicas de manera simple y a medida. Nuestro software y servicios cumplen con todas las normativas actuales.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="erickpoppe@gmail.com"
                className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Erick Poppe. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
