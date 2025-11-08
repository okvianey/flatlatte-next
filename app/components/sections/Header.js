import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/assets/img/logo-black-a.png';

export default function Header(){
  return (
    <header className="fixed top-0 right-0 left-0 bg-[var(--bg)] z-50">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src={logo}
            alt="FlatLatte logo"
            width={40}
            height={40}
            className='w-auto'
            loading='eager'
          />
        </Link>
        <nav>
          <Link href="/#contact" className="btn btn-primary">Un café y hablamos</Link>
        </nav>
      </div>
    </header>
  )
}
