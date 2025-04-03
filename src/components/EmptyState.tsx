'use client';

import { Send } from 'lucide-react';

interface EmptyStateProps {
  title: string;
}

const EmptyState = ({
  title,
}: EmptyStateProps) => {

  const onButtonClick = () => {
    window.location.href = 'https://www.papercall.io/devopsdaysbelem2025';
  };

  return (


    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa programação ainda está sendo definida. Que tal fazer parte dela? Submeta sua palestra e compartilhe seu conhecimento com a comunidade DevOps.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="text-center">
              <button
                onClick={onButtonClick}
                className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors mx-auto"
              >
                Submeter palestra
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState; 