import React from 'react';
import { Inter } from 'next/font/google';
import {Header} from '@/components/Header';
import {LeftSidebar} from '@/components/LeftSidebar';
import {RightSidebar} from '@/components/RightSidebar';
import {Footer} from '@/components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto py-24">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <aside className="md:col-span-1">
                  <LeftSidebar />
                </aside>
                <div className="md:col-span-2">
                  {children}
                </div>
                <aside className="md:col-span-1">
                  <RightSidebar />
                </aside>
              </div>
            </main>
            <Footer />
          </div>
      </body>
    </html>
  )
}

