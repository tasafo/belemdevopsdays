import Link from 'next/link';
import AnnouncementBanner from '@/components/AnnouncementBanner';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBanner />
      <div className="container mx-auto px-4 flex flex-1 flex-col items-center justify-center py-12">
        <h1 className="text-4xl font-bold mb-4">404 - Página não encontrada</h1>
        <p className="text-xl text-muted-foreground mb-8 text-center">
          A página que você está procurando não existe ou foi removida.
        </p>
        <Link
          href="/"
          className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
        >
          Voltar para a página inicial
        </Link>
      </div>
    </div>
  );
}
