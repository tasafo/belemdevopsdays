import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SponsorsSection from '@/components/SponsorsSection';
import CallToAction from '@/components/CallToAction';
import ScrollReveal from '@/components/ScrollReveal';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevOpsDays Belém 2025',
  description: 'DevOpsDays é uma série de conferências técnicas que abrangem tópicos de desenvolvimento de software, operações de infraestrutura de TI e a interseção entre eles.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <NextTopLoader color="#7C3AED" showSpinner={false} />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <SponsorsSection />
            <CallToAction />
            <Footer />
            <ScrollReveal />
          </div>
        </TooltipProvider>
      </body>
    </html>
  );
} 