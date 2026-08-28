import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SponsorsSection from '@/components/SponsorsSection';
import CallToAction from '@/components/CallToAction';
import ScrollReveal from '@/components/ScrollReveal';
import AnnouncementBanner from '@/components/AnnouncementBanner';

export default function EditionLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 w-full z-50">
        <AnnouncementBanner />
        <Navbar />
      </div>
      <AnnouncementBanner asSpacer />
      <main className="flex-1">
        {children}
      </main>
      <SponsorsSection />
      <CallToAction />
      <Footer />
      <ScrollReveal />
    </div>
  );
}
