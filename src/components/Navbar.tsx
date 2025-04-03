'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-primary font-bold text-xl flex items-center flex-shrink-0">
            <img
              src="/logo.png"
              alt="DevOpsDays Belém Logo"
              className="h-8 sm:h-12 mr-2"
            />
            <span className="hidden sm:inline">DevOpsDays Belém 2025</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link href="/programacao" className="text-gray-800 hover:text-primary transition-colors">
              Programação
            </Link>
            <Link href="/palestrantes" className="text-gray-800 hover:text-primary transition-colors">
              Palestrantes
            </Link>
            <Link href="/patrocinio" className="text-gray-800 hover:text-primary transition-colors">
              Patrocínio
            </Link>
            <Link href="/codigo-de-conduta" className="text-gray-800 hover:text-primary transition-colors">
              Código de Conduta
            </Link>
            <Link href="/contato" className="text-gray-800 hover:text-primary transition-colors">
              Contato
            </Link>
            <Button asChild className="bg-primary hover:bg-primary-dark text-white">
              <a href="https://www.sympla.com.br/evento/devopsdays-belem-2025/2818140" target="_blank" rel="noopener noreferrer">
                Inscreva-se
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 left-4 right-4 top-full z-50">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/programacao"
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Programação
              </Link>
              <Link
                href="/palestrantes"
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Palestrantes
              </Link>
              <Link
                href="/patrocinio"
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Patrocínio
              </Link>
              <Link
                href="/codigo-de-conduta"
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Código de Conduta
              </Link>
              <Link
                href="/contato"
                className="text-gray-800 hover:text-primary transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Contato
              </Link>
              <Button asChild className="bg-primary hover:bg-primary-dark text-white w-full">
                <a href="https://www.sympla.com.br/evento/devopsdays-belem-2025/2818140" target="_blank" rel="noopener noreferrer">
                  Inscreva-se
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
