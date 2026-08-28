import { ArrowUpRight } from 'lucide-react';
import { experiences } from '@/lib/content';
import { useReveal } from '@/lib/hooks';

export default function Experience() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="experience" ref={ref} className="relative py-28 md:py-36">
      <div className="edge">
        <div className="reveal mb-16 flex items-center gap-4">
          <span className="label label-neon">02 / Experience</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-ink-600 via-ink-600 to-transparent md:left-[11px]" />

          <div className="space-y-14">
            {experiences.map((exp, i) => (
              <article
                key={exp.id}
                className="reveal relative pl-10 md:pl-16"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                {/* Node */}
                <span
                  className={`absolute left-0 top-2 flex h-4 w-4 items-center justify-center rounded-full border-2 md:h-6 md:w-6 ${
                    exp.featured
                      ? 'border-neon-300 bg-neon-300/20'
                      : 'border-ink-500 bg-ink-900'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      exp.featured ? 'bg-neon-300' : 'bg-ink-400'
                    }`}
                  />
                </span>

                <div
                  className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 md:p-9 ${
                    exp.featured
                      ? 'border-neon-300/30 bg-ink-850/80'
                      : 'border-ink-700 bg-ink-900/60 hover:border-ink-500'
                  }`}
                >
                  {exp.featured && (
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,theme(colors.neon.500/0.08),transparent_60%)]" />
                  )}

                  <div className="relative">
                    {/* Top row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                      <span className="label text-ink-300">{exp.index}</span>
                      <span className="label text-ink-200">{exp.date}</span>
                      <span className="label text-ink-400">·</span>
                      <span className="label text-neon-300/80">
                        {exp.industry}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tighter text-ink-50 md:text-3xl">
                      {exp.role}
                    </h3>
                    <p className="mt-1 text-lg text-ink-100">
                      <span className="text-ink-200">{exp.org}</span>
                      {exp.href && (
                        <a
                          href={exp.href}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="ml-3 inline-flex items-center gap-1 text-sm text-neon-300 link-underline"
                        >
                          View
                          <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                        </a>
                      )}
                    </p>

                    {/* Description */}
                    {exp.description && (
                      <p className="mt-5 max-w-2xl leading-relaxed text-ink-100">
                        {exp.description}
                      </p>
                    )}

                    {/* Responsibilities */}
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {exp.responsibilities.map((r) => (
                        <li
                          key={r}
                          className="flex items-start gap-2.5 text-sm leading-relaxed text-ink-200"
                        >
                          <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-neon-300/70" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
