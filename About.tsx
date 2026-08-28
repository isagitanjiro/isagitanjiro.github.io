import { useReveal } from '@/lib/hooks';

const pillars = [
  'Structure',
  'Culture',
  'Engagement',
  'Retention',
  'Clear communication',
  'Reasons to participate',
];

const scope = [
  'Discord organization',
  'Community strategy',
  'Member engagement',
  'Events',
  'Content',
  'Recruitment',
  'Partnerships',
  'Conflict resolution',
  'Community growth',
];

export default function About() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative py-28 md:py-36">
      <div className="edge">
        <div className="reveal mb-16 flex items-center gap-4">
          <span className="label label-neon">01 / About</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="grid gap-16 lg:grid-cols-[1.4fr_1fr]">
          <div className="reveal">
            <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3.25rem)] font-semibold leading-[1.1] tracking-tighter text-balance">
              Community management is more than keeping a chat alive.
            </h2>
            <div className="mt-8 max-w-xl space-y-5 text-lg leading-relaxed text-ink-100">
              <p>
                I&apos;m Tanjiro — a Web3 community manager, moderator and
                growth specialist working across blockchain, gaming and esports.
                My focus isn&apos;t on noise. It&apos;s on building communities
                that have real structure, a recognisable culture, and members who
                actually want to stay.
              </p>
              <p>
                My role goes well beyond moderation. I work on the systems that
                make a community function — how it&apos;s organised, how members
                are welcomed, how conversations are shaped, and how a project
                turns a Discord full of strangers into a group of people who
                care.
              </p>
            </div>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.1s' }}>
            <p className="label mb-5">Communities I build have</p>
            <ul className="space-y-3">
              {pillars.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 border-b border-ink-700/60 pb-3"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neon-300" />
                  <span className="text-ink-50">{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal mt-16" style={{ transitionDelay: '0.15s' }}>
          <p className="label mb-5">What I help with</p>
          <div className="flex flex-wrap gap-2.5">
            {scope.map((s) => (
              <span
                key={s}
                className="rounded-full border border-ink-600 bg-ink-850/60 px-4 py-2 text-sm text-ink-100 transition-colors duration-300 hover:border-neon-300/60 hover:text-neon-300"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
