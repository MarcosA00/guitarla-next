'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import styles from '../css/footer.module.css'

function Footer() {
  const pathname = usePathname()

  return (
    <footer className={ styles.footer }>
      <div className={ `contenedor ${styles.barra}` }>
        <nav className={ styles.navegacion }>
          <ul className={ styles.ul }>
            <li className={ styles.li }><Link className={ pathname === '/' ? styles.active : styles.inactive } href='/'>Inicio</Link></li>
            <li className={ styles.li }><Link className={ pathname === '/nosotros' ? styles.active : styles.inactive } href='/nosotros'>Nosotros</Link></li>
            <li className={ styles.li }><Link className={ pathname === '/tienda' ? styles.active : styles.inactive } href='/tienda'>Tienda</Link></li>
            <li className={ styles.li }><Link className={ pathname === '/blog' ? styles.active : styles.inactive } href='/blog'>Blog</Link></li>
          </ul>
        </nav>

        <p className={ styles.derechos }>Todos los derechos reservados { new Date().getFullYear() }</p>
      </div>
    </footer>
  )
}

export default Footer