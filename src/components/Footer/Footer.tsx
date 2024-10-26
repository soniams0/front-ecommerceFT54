import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#162340] text-white w-screen">
  <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#43C6AC" viewBox="0 0 24 24" className="w-8 h-8 mr-4">
          <path d="M12 22a10 10 0 110-20 10 10 0 010 20zm1-13h-2v6h2V9zm-1 8a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
        </svg>
        <div>
          <h4 className="text-lg font-semibold">Envíos Rápidos</h4>
          <p className="text-sm text-gray-300">Recibe tu pedido en tiempo récord con nuestros envíos express.</p>
        </div>
      </div>

      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#43C6AC" viewBox="0 0 24 24" className="w-8 h-8 mr-4">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm3.25 8.5l-4 4a.75.75 0 01-1.06 0l-2-2a.75.75 0 011.06-1.06L11 12.19l3.72-3.72a.75.75 0 011.06 1.06z" />
        </svg>
        <div>
          <h4 className="text-lg font-semibold">Pagos Seguros</h4>
          <p className="text-sm text-gray-300">Procesamos tus pagos con cifrado de alta seguridad.</p>
        </div>
      </div>

      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#43C6AC" viewBox="0 0 24 24" className="w-8 h-8 mr-4">
          <path d="M20.39 8.56A8 8 0 114 10h4l2-5h6l2 5h4.61a8.06 8.06 0 01-.22-1.44zm-8.5 11.44a6 6 0 100-12 6 6 0 000 12z" />
        </svg>
        <div>
          <h4 className="text-lg font-semibold">Garantía Extendida</h4>
          <p className="text-sm text-gray-300">Devoluciones sin complicaciones en los primeros 30 días.</p>
        </div>
      </div>

      <div className="flex items-start">
        <svg xmlns="http://www.w3.org/2000/svg" fill="#43C6AC" viewBox="0 0 24 24" className="w-8 h-8 mr-4">
          <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
          <path d="M11 11H9v2h2v2h2v-2h2v-2h-2V9h-2v2z" />
        </svg>
        <div>
          <h4 className="text-lg font-semibold">Soporte 24/7</h4>
          <p className="text-sm text-gray-300">Estamos disponibles para ayudarte en cualquier momento.</p>
        </div>
      </div>
    </div>

    <div className="mt-12 border-t border-gray-500 pt-8 flex flex-col sm:flex-row justify-between items-center">
      <p className="text-sm text-gray-400">&copy; 2024 Mi Ecommerce. Todos los derechos reservados.</p>
      <div className="flex space-x-6 mt-4 sm:mt-0">
        <Link href="#" className="hover:text-[#43C6AC]">Términos de servicio</Link>
        <Link href="#" className="hover:text-[#43C6AC]">Política de privacidad</Link>
      </div>
    </div>
  </div>
</footer>

  
  )
}

export default Footer