
import { Link } from 'react-router-dom';
import { Twitter, Mail, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DevOpsDays Belém 2025</h3>
            <p className="mb-4">
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

          <div>
            <h3 className="text-xl font-bold mb-4">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-secondary-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/programa" className="hover:text-secondary-light transition-colors">
                  Programação
                </Link>
              </li>
              <li>
                <Link to="/palestrantes" className="hover:text-secondary-light transition-colors">
                  Palestrantes
                </Link>
              </li>
              <li>
                <Link to="/patrocinio" className="hover:text-secondary-light transition-colors">
                  Patrocínio
                </Link>
              </li>
              <li>
                <Link to="/codigo-de-conduta" className="hover:text-secondary-light transition-colors">
                  Código de Conduta
                </Link>
              </li>
              <li>
                <Link to="/contato" className="hover:text-secondary-light transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <p className="mb-2">
              Para dúvidas ou informações:
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
