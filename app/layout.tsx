import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-200 min-h-screen flex flex-col antialiased selection:bg-blue-500/30">
        <Header />
        {/* El contenedor principal toma el espacio disponible para empujar el footer hacia abajo */}
        <div className="flex-grow relative overflow-hidden">
          {/* Luces de fondo decorativas globales */}
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}