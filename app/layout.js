import { JetBrains_Mono, IBM_Plex_Sans, Mona_Sans } from "next/font/google";
import "@/globals.css";
import AOSProvider from '@/components/ui/AOSProvider';
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";

export const metadata = {
  title: 'Flatlatte - Desarrollo Web',
  description: 'Creamos sitios bonitos para cafeterías y emprendedores.',
};

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: [ "latin" ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="es" >
      <body className="relative">
        <Header />
         <AOSProvider>
          {children}
        </AOSProvider>
        <Footer />
      </body>
    </html>
  );
}
