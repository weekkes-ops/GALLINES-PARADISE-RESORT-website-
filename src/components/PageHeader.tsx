import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface Breadcrumb {
  label: string;
  href?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  breadcrumbs?: Breadcrumb[];
  bgImage?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  badge,
  breadcrumbs = [],
  bgImage,
}) => {
  return (
    <section className="relative pt-28 pb-14 sm:pt-32 sm:pb-16 bg-[#2d2d2a] text-[#f8f7f2] overflow-hidden border-b border-[#4a5340]/30">
      {/* Background Image Overlay */}
      {bgImage && (
        <div className="absolute inset-0 z-0">
          <img
            src={bgImage}
            alt={title}
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2d2d2a] via-[#2d2d2a]/80 to-[#2d2d2a]/60" />
        </div>
      )}

      {/* Decorative ambient gradients */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#4a5340]/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#7c6344]/15 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb trail */}
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[#a8a69e]">
            <li className="flex items-center gap-1.5">
              <Link
                to="/"
                className="hover:text-[#f8f7f2] transition-colors flex items-center gap-1"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
            </li>
            {breadcrumbs.map((crumb, idx) => (
              <li key={idx} className="flex items-center gap-1.5">
                <ChevronRight className="w-3.5 h-3.5 text-[#7c6344]" />
                {crumb.href ? (
                  <Link
                    to={crumb.href}
                    className="hover:text-[#f8f7f2] transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#f8f7f2] font-semibold">
                    {crumb.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Badge & Title */}
        <div className="max-w-3xl space-y-2.5">
          {badge && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#4a5340]/60 text-[#ede9dc] border border-[#ede9dc]/20 backdrop-blur-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              {badge}
            </span>
          )}

          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#f8f7f2]">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-[#d8d4c7] font-light leading-relaxed max-w-2xl pt-1">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </section>
  );
};
