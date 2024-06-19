import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import Header from '@/components/ui/header'
import Footer from '@/components/ui/footer'
import { AuthProvider } from '@/providers/auth'
import { CartProvider } from '@/providers/cart'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '::: EASY STORE :::',
  description: 'Bem-vindo à Easy Store - Seu E-commerce de Periféricos de Computador Descubra a melhor seleção de teclados mecânicos, mouses ergonômicos, headsets imersivos e monitores de alta definição na Easy Store. Oferecemos produtos das principais marcas, preços competitivos e um atendimento ao cliente de excelência.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className='flex h-full flex-col'>
          <AuthProvider>
            <CartProvider>
              <Header/>
              <div className='flex-1 mt-[100px] px-4'>
                {children}
              </div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  )
}
