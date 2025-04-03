import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-lg bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-6">
          <svg 
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-16 h-16 mx-auto text-red-500 mb-2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <h1 className="text-5xl font-bold mb-2 text-primary">404</h1>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 text-left mb-6">
          <p className="text-sm text-gray-700 font-mono">
            <span className="text-red-500">ERROR:</span> Rota não encontrada: {location.pathname}
          </p>
        </div>
        
        <Link to="/">
          <Button className="bg-primary hover:bg-primary-dark text-white">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
