import {
  Users,
  MessageSquare,
  TrendingUp,
  CalendarDays,
  Megaphone,
  Handshake,
  type LucideIcon,
} from 'lucide-react';
import { expertise } from '@/lib/content';
import { useReveal } from '@/lib/hooks';

const icons: Record<string, LucideIcon> = {
  Users,
  MessageSquare,
  TrendingUp,
  CalendarDays,
  Megaphone,
  Handshake,
};

export default function Skills() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="relative py-28 md:py-36">
      <div className="edge">
        <div className="reveal mb-16 flex items-center gap-4">
          <span className="label label-neon">04 / Expertise</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="reveal mb-16 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tighter text-balance">
            What I bring to a team.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-3">
          {expertise.map((item, i) => {
            const Icon = icons[item.icon] ?? Users;
            return (
              <div
                key={item.id}
                className="reveal group relative overflow-hidden bg-ink-900 p-8 md:p-10"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,theme(colors.neon.500/0.1),transparent_65%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                {/* Top border accent */}
                <span className="absolute inset-x-0 top-0 h-px scale-x-0 bg-neon-300 transition-transform duration-500 group-hover:scale-x-100" />

                <div className="relative">
                  <span className="label text-ink-400">
                    0{i + 1}
                  </span>
                  <div className="mt-6 flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ink-600 bg-ink-850 text-ink-100 transition-colors duration-500 group-hover:border-neon-300/50 group-hover:text-neon-300">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink-50">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-5 leading-relaxed text-ink-100">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
