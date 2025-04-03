import { Send } from 'lucide-react';

interface EmptyStateProps {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
  buttonIcon?: React.ReactNode;
}

const EmptyState = ({
  title,
  heading,
  description,
  buttonText,
  onButtonClick,
  buttonIcon = <Send className="w-5 h-5 mr-2" />
}: EmptyStateProps) => {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{title}</h1>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">{heading}</h2>
            <p className="text-gray-600 mb-6">
              {description}
            </p>
            <button
              onClick={onButtonClick}
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              {buttonIcon}
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyState; 