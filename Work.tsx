import { ArrowUpRight } from 'lucide-react';
import { useReveal } from '@/lib/hooks';

const pillars = [
  {
    title: 'Community Operations',
    body: 'Discord management, moderation, member support and regional community activities.',
  },
  {
    title: 'Engagement',
    body: 'Quizzes, game nights, AMAs, campaigns and community activities.',
  },
  {
    title: 'Education',
    body: 'Educational content explaining ZenChain and its ecosystem.',
  },
];

const ecosystem = [
  'ZenBridge',
  'ZenFi',
  'ZenSwap',
  'ZenEarn',
  'ZenQuest',
];

type Shot = {
  key: string;
  label: string;
  hint: string;
  src: string;
  alt: string;
};

const shots: Shot[] = [
  {
    key: 'community',
    label: 'Community Screenshot',
    hint: 'Replace with a real screenshot',
    src: '/screenshots/community.png',
    alt: 'ZenChain community screenshot',
  },
  {
    key: 'event',
    label: 'Event Screenshot',
    hint: 'Replace with a real screenshot',
    src: '/screenshots/event.png',
    alt: 'ZenChain event screenshot',
  },
  {
    key: 'campaign',
    label: 'Campaign Screenshot',
    hint: 'Replace with a real screenshot',
    src: '/screenshots/campaign.png',
    alt: 'ZenChain campaign screenshot',
  },
];

export default function Work() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="work" ref={ref} className="relative py-28 md:py-36">
      <div className="edge">
        <div className="reveal mb-16 flex items-center gap-4">
          <span className="label label-neon">03 / Work</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="reveal mb-16 max-w-2xl">
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.08] tracking-tighter text-balance">
            Selected Work
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-100">
            Turning community operations into actual community experiences.
          </p>
        </div>

        {/* Featured case study */}
        <div className="reveal overflow-hidden rounded-3xl border border-ink-700 bg-ink-900/60">
          {/* Header band */}
          <div className="relative border-b border-ink-700 p-8 md:p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,theme(colors.neon.500/0.1),transparent_60%)]" />
            <div className="relative flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="label label-neon">Featured Case Study</span>
                <h3 className="mt-4 font-display text-4xl font-bold tracking-tightest text-ink-50 md:text-5xl">
                  ZenChain
                </h3>
                <p className="mt-2 text-lg text-ink-100">
                  Lead Community Manager
                </p>
              </div>
              <a
                href="https://x.com/zen_chain?s=20"
                target="_blank"
                rel="noreferrer noopener"
                className="btn btn-ghost"
              >
                View on X
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
              </a>
            </div>
          </div>

          {/* Pillars */}
          <div className="grid gap-px bg-ink-700 sm:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="bg-ink-900 p-8 md:p-10">
                <span className="label text-neon-300/80">{p.title}</span>
                <p className="mt-4 leading-relaxed text-ink-100">{p.body}</p>
              </div>
            ))}
          </div>

          {/* Ecosystem */}
          <div className="border-t border-ink-700 p-8 md:p-12">
            <span className="label text-ink-200">Ecosystem</span>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {ecosystem.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-ink-600 bg-ink-850/60 px-4 py-2 font-mono text-sm text-ink-50 transition-colors duration-300 hover:border-neon-300/60 hover:text-neon-300"
                >
                  {e}
                </span>
              ))}
            </div>
          </div>

          {/* Screenshots — drop files into /public/screenshots to replace */}
          <div className="border-t border-ink-700 p-8 md:p-12">
            <span className="label text-ink-200">Screenshots</span>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {shots.map((shot) => (
                <figure
                  key={shot.key}
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-dashed border-ink-500 bg-ink-850/40"
                >
                  <img
                    src={shot.src}
                    alt={shot.alt}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 group-hover:scale-[1.03] group-hover:opacity-100"
                    onLoad={(e) => {
                      const img = e.currentTarget;
                      img.classList.remove('opacity-0');
                      img.style.opacity = '1';
                      const parent = img.parentElement;
                      if (parent) {
                        parent
                          .querySelector('[data-placeholder]')
                          ?.classList.add('hidden');
                        parent.classList.remove('border-dashed');
                        parent.classList.add('border-ink-700');
                      }
                    }}
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div
                    data-placeholder
                    className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center"
                  >
                    <div className="absolute inset-0 grid-lines opacity-30 transition-opacity duration-500 group-hover:opacity-60" />
                    <span className="relative label text-ink-200">
                      {shot.label}
                    </span>
                    <span className="relative px-4 text-xs text-ink-300">
                      {shot.hint}
                    </span>
                  </div>
                </figure>
              ))}
            </div>
            <p className="mt-5 font-mono text-xs text-ink-400">
              Drop files into{' '}
              <span className="text-ink-200">/public/screenshots</span> as{' '}
              <span className="text-neon-300/80">community.png</span>,{' '}
              <span className="text-neon-300/80">event.png</span>,{' '}
              <span className="text-neon-300/80">campaign.png</span> — they appear
              here automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
