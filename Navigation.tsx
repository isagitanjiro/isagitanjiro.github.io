import { useEffect, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { navLinks, contact } from '@/lib/content';
import { useScrolled, useActiveSection } from '@/lib/hooks';

export default function Navigation() {
  const scrolled = useScrolled(24);
  const active = useActiveSection([
    'about',
    'experience',
    'work',
    'skills',
    'contact',
  ]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-ink-700/80 bg-ink-950/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <nav
          className={`edge flex items-center justify-between transition-all duration-500 ${
            scrolled ? 'py-3' : 'py-5'
          }`}
        >
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-display text-lg font-bold tracking-tightest text-ink-50 transition-colors hover:text-neon-300"
            aria-label="Tanjiro — back to top"
          >
            TANJIRO<span className="text-neon-300">.</span>
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className={`label transition-colors duration-300 ${
                  active === link.id
                    ? 'text-neon-300'
                    : 'text-ink-200 hover:text-ink-50'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="hidden md:block">
            <button onClick={() => go('contact')} className="btn btn-primary">
              Let&apos;s Work Together
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center text-ink-50 md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${
          open ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
      >
        <div
          className={`absolute inset-0 bg-ink-950/95 backdrop-blur-xl transition-opacity duration-500 ${
            open ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div
          className={`relative flex h-full flex-col justify-center px-6 transition-all duration-500 ${
            open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
        >
          <div className="hairline mb-10" />
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <button
                key={link.id}
                onClick={() => go(link.id)}
                className="group flex items-baseline justify-between border-b border-ink-700/60 py-5 text-left"
              >
                <span className="font-display text-3xl font-medium text-ink-50 transition-colors group-hover:text-neon-300">
                  {link.label}
                </span>
                <span className="label">
                  0{i + 1}
                </span>
              </button>
            ))}
          </div>
          <div className="mt-10">
            <button
              onClick={() => go('contact')}
              className="btn btn-primary w-full"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={contact.xUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label text-ink-200 hover:text-neon-300"
            >
              X / Twitter
            </a>
            <a
              href={contact.telegramUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label text-ink-200 hover:text-neon-300"
            >
              Telegram
            </a>
            <a
              href={contact.discordUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="label text-ink-200 hover:text-neon-300"
            >
              Discord
            </a>
            <a
              href={`mailto:${contact.email}`}
              className="label text-ink-200 hover:text-neon-300"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
