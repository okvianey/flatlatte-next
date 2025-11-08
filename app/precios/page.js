import Head from 'next/head';
import PricingSection from '../components/sections/PricingSection';
import Cotizador from '../components/sections/Cotizador';
import CTASection from '../components/sections/CTASection';

export default function Precios() {
  return (
      
  <div className="section">
    <div className='container'>
      <PricingSection />
      <Cotizador />
      <CTASection />
    </div>
  </div>

  );
}