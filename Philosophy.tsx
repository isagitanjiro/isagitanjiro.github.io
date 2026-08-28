import { useReveal } from '@/lib/hooks';

const concepts = [
  {
    n: '01',
    title: 'Structure',
    body: 'Clear systems create better communities.',
  },
  {
    n: '02',
    title: 'Engagement',
    body: 'Give members reasons to participate.',
  },
  {
    n: '03',
    title: 'Growth',
    body: 'Build sustainable community activity rather than empty numbers.',
  },
];

export default function Philosophy() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-neon-500/8 blur-[150px]" />
      </div>

      <div className="edge relative">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="label label-neon">Philosophy</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="reveal max-w-4xl">
          <h2 className="font-display text-[clamp(2.1rem,5.5vw,4.25rem)] font-bold leading-[1.04] tracking-tightest text-balance">
            I care about activity, culture and retention — not vanity numbers.
          </h2>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-100">
            A large member count means very little if nobody talks,
            participates or returns. My goal is to create communities where
            members have a reason to participate, contribute and stay.
          </p>
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 md:grid-cols-3">
          {concepts.map((c, i) => (
            <div
              key={c.n}
              className="reveal group relative bg-ink-900 p-10 md:p-12"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="font-mono text-sm text-neon-300/70">{c.n}</span>
              <h3 className="mt-8 font-display text-3xl font-semibold tracking-tighter text-ink-50">
                {c.title}
              </h3>
              <p className="mt-4 leading-relaxed text-ink-100">{c.body}</p>
              <span className="mt-8 block h-px w-10 bg-ink-600 transition-all duration-500 group-hover:w-20 group-hover:bg-neon-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
