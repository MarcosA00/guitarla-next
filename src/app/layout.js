import { Outfit } from 'next/font/google'
import '../css/globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata = {
  title: 'GuitarLA',
  description: 'Tienda virtual, venta de guitarras, instrumentos - GuitarLA',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
