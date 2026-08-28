import { ArrowUpRight, Gamepad2 } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const roles = [
  {
    role: 'Community Manager',
    org: 'Alpine Gaming',
    href: 'https://x.com/AlpineGamingGG',
  },
  {
    role: 'Staff Moderator',
    org: 'Steppas',
    href: 'https://x.com/steppafnf?s=20',
  },
];

export default function Gaming() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-36">
      {/* Gaming-inspired backdrop */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines opacity-20" />
        <div className="absolute -right-1/4 top-1/4 h-[30rem] w-[30rem] rounded-full bg-signal/10 blur-[140px]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,transparent_40%,theme(colors.ink.900/0.6)_100%)]" />
      </div>

      <div className="edge relative">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="label text-signal-400">Gaming & Esports</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="reveal">
            <h2 className="font-display text-[clamp(2.2rem,5.5vw,4rem)] font-bold leading-[1.05] tracking-tightest text-balance">
              Beyond Web3.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-100">
              I also work with gaming and esports communities, helping teams
              build stronger Discord ecosystems, recruit staff, increase
              activity and create communities around their games — not just
              around announcements.
            </p>
          </div>

          <div className="reveal space-y-4" style={{ transitionDelay: '0.1s' }}>
            {roles.map((r) => (
              <a
                key={r.org}
                href={r.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex items-center justify-between gap-4 rounded-2xl border border-ink-700 bg-ink-900/60 p-6 transition-all duration-500 hover:border-signal/40 hover:bg-ink-850/60"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-ink-600 bg-ink-850 text-signal-400 transition-colors duration-500 group-hover:border-signal/40">
                    <Gamepad2 className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div>
                    <p className="font-display text-xl font-semibold text-ink-50">
                      {r.org}
                    </p>
                    <p className="text-sm text-ink-200">{r.role}</p>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-5 w-5 text-ink-300 transition-all duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal-400"
                  strokeWidth={1.5}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
