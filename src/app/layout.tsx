import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevOpsDays Belém',
  description: 'O maior evento de DevOps da região Norte. Palestras, networking e muito conhecimento.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <meta name="apple-mobile-web-app-title" content="DevOpsDay Belém" />
      <body className={inter.className}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <NextTopLoader color="#004a8f" showSpinner={false} />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
