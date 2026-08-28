import { ArrowRight } from 'lucide-react';

const NEXT_EDITION_URL = 'https://abicora.com/devopsdays-belem';

interface AnnouncementBannerProps {
  /** Renderiza uma cópia invisível apenas para reservar a altura do banner fixo. */
  asSpacer?: boolean;
}

const AnnouncementBanner = ({ asSpacer = false }: AnnouncementBannerProps) => {
  return (
    <div
      className={`w-full bg-primary text-white text-sm sm:text-base ${asSpacer ? 'invisible' : ''}`}
      aria-hidden={asSpacer ? true : undefined}
    >
      <div className="container mx-auto px-4 py-2">
        <p className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-center">
          <span>
            Este site é da edição de 2025. Para informações da edição de 2026, acesse:
          </span>
          <a
            href={NEXT_EDITION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-semibold underline underline-offset-4 hover:text-secondary-light transition-colors"
            tabIndex={asSpacer ? -1 : undefined}
          >
            abicora.com/devopsdays-belem
            <ArrowRight size={16} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
