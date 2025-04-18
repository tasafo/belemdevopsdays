import Link from 'next/link';
import { Twitter, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-left">DevOpsDays Belém 2025</h3>
            <p className="mb-4 text-left">
              7 de Junho de 2025<br />
              Belém, Pará, Brasil
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/tasafo"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary-light transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="mailto:belem@devopsdays.org"
                className="hover:text-secondary-light transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-left">Links Úteis</h3>
            <ul className="space-y-2 text-left">
              <li>
                <Link href="/" className="hover:text-secondary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/programacao" className="hover:text-secondary-light transition-colors">
                  Programação
                </Link>
              </li>
              <li>
                <Link href="/palestrantes" className="hover:text-secondary-light transition-colors">
                  Palestrantes
                </Link>
              </li>
              <li>
                <Link href="/organizacao" className="hover:text-secondary-light transition-colors">
                  Organização
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-left">Eventos Anteriores</h3>
            <ul className="space-y-2 text-left">
              <li>
                <a href="https://devopsdays.org/events/2018-belem/welcome/" className="hover:text-secondary-light transition-colors">
                  Belém 2018
                </a>
              </li>
              <li>
                <a href="https://devopsdays.org/events/2019-belem/welcome/" className="hover:text-secondary-light transition-colors">
                  Belém 2019
                </a>
              </li>
              <li>
                <a href="https://devopsdays.org/events/2022-belem/welcome/" className="hover:text-secondary-light transition-colors">
                  Belém 2022
                </a>
              </li>
              <li>
                <a href="https://devopsdays.org/events/2023-belem/" className="hover:text-secondary-light transition-colors">
                  Belém 2023
                </a>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-left">Contato</h3>
            <p className="mb-2 text-left">
              Para dúvidas, informações ou patrocínio:
            </p>
            <a
              href="mailto:belem@devopsdays.org"
              className="text-secondary-light hover:underline"
            >
              belem@devopsdays.org
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
