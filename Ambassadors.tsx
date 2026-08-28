import { ArrowUpRight } from 'lucide-react';
import { ambassadors } from '@/lib/content';
import { useReveal } from '@/lib/hooks';

export default function Ambassadors() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="edge">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="label label-neon">Ambassador Experience</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="reveal mb-14 max-w-2xl">
          <h2 className="font-display text-[clamp(1.9rem,4.5vw,3.25rem)] font-semibold leading-[1.1] tracking-tighter text-balance">
            Past Ambassador Experience
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 sm:grid-cols-2 lg:grid-cols-4">
          {ambassadors.map((a, i) => (
            <div
              key={a.id}
              className="reveal group relative flex flex-col bg-ink-900 p-7 md:p-8"
              style={{ transitionDelay: `${i * 0.06}s` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="font-display text-xl font-semibold text-ink-50">
                    {a.name}
                  </p>
                  <p className="mt-1 text-sm text-neon-300/80">{a.role}</p>
                </div>
                {a.href && (
                  <a
                    href={a.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${a.name} on X`}
                    className="text-ink-300 transition-colors hover:text-neon-300"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </a>
                )}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-ink-200">
                {a.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
