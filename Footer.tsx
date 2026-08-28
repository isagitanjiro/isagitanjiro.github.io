import { contact } from '@/lib/content';

const socials = [
  { label: 'X', href: contact.xUrl },
  { label: 'Telegram', href: contact.telegramUrl },
  { label: 'Discord', href: contact.discordUrl },
  { label: 'Email', href: `mailto:${contact.email}` },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-ink-700 py-14">
      <div className="edge">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-xl font-bold tracking-tightest text-ink-50 transition-colors hover:text-neon-300"
            >
              TANJIRO<span className="text-neon-300">.</span>
            </button>
            <p className="mt-2 label text-ink-300">
              Web3 · Gaming · Community
            </p>
          </div>

          <div className="flex items-center gap-7">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer noopener"
                className="label text-ink-200 transition-colors hover:text-neon-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        <div className="hairline my-10" />

        <p className="label text-ink-400">© 2026 Tanjiro. All rights reserved.</p>
      </div>
    </footer>
  );
}
