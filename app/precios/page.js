import Head from 'next/head';
import Cotizador from '../components/sections/Cotizador';
import { mantenimientoPlans } from '@/assets/products';
import MantenimientoSection from '../components/sections/MantenimientoSection';
import CTASection from '../components/sections/CTASection';

export default function Precios() {
  return (
      
  <div className="section">
    <div className='container'>
      <Cotizador />
      <MantenimientoSection plans={mantenimientoPlans} />
      <CTASection />
    </div>
  </div>

  );
}