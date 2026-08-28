import { useReveal } from '@/lib/hooks';

const stats = [
  { value: '5+', label: 'Years of Web3 experience' },
  { value: 'Community', label: 'Management' },
  { value: 'Discord', label: 'Operations' },
  { value: 'Web3 × Gaming', label: 'Focus' },
];

export default function Impact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      <div className="edge">
        <div className="reveal mb-14 flex items-center gap-4">
          <span className="label label-neon">Impact</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-ink-700 bg-ink-700 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="reveal group relative bg-ink-900 p-8 md:p-10"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,theme(colors.neon.500/0.08),transparent_70%)]" />
              </div>
              <div className="relative">
                <p className="font-display text-3xl font-semibold tracking-tighter text-ink-50 md:text-4xl lg:text-[2.75rem]">
                  {s.value}
                </p>
                <p className="mt-3 text-sm text-ink-200">{s.label}</p>
              </div>
              <span className="absolute right-6 top-6 label text-ink-400">
                0{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
