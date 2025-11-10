import { JetBrains_Mono, IBM_Plex_Sans, Mona_Sans } from "next/font/google";
import "./styles/globals.css";
import AOSProvider from './components/ui/AOSProvider';
import Header from "./components/sections/Header";
import Footer from "./components/sections/Footer";

export const metadata = {
  title: 'Flatlatte - Desarrollo Web',
  description: 'Diseño y desarrollo web especializado para emprendedores creativos',
};


// const jetBrains = JetBrains_Mono({
//   variable: "--font-mono",
//   subsets: ["latin"],
// });
// const ibmPlexSans = IBM_Plex_Sans({
//   variable: "--font-jetBrains-mono",
//   subsets: ["latin"],
// });

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
