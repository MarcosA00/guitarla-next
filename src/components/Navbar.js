'use client'

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import styles from '../css/navbar.module.css'
import logo from '../../public/img/logo.svg'

function Navbar() {
  const pathname = usePathname()

  return (
    <header className={ styles.header }>
      <div  className={ `contenedor ${styles.barra}` }>
        <Link href='/'>
          <Image
            src={ logo }
            width={ 'auto' }
            height={ 'auto' }
            alt="Imagen logo"
            priority
            className="logo"
          />
        </Link>

        <nav className={ styles.navegacion }>
          <ul className={ styles.ul }>
            <li className={ styles.li }><Link className={ pathname === '/' ? styles.active : '' } href='/'>Inicio</Link></li>
            <li className={ styles.li }><Link className={ pathname === '/nosotros' ? styles.active : '' } href='/nosotros'>Nosotros</Link></li>
            <li className={ styles.li }><Link className={ pathname === '/tienda' ? styles.active : '' } href='/tienda'>Tienda</Link></li>
            <li className={ styles.li }><Link className={ pathname === '/blog' ? styles.active : '' } href='/blog'>Blog</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Navbar