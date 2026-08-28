import { Mail, ArrowUpRight, Send } from 'lucide-react';
import { contact } from '@/lib/content';
import { useReveal } from '@/lib/hooks';

const available = [
  'Community Manager roles',
  'Moderator roles',
  'Community Growth',
  'Web3 projects',
  'Gaming & Esports',
  'Business Development',
];

export default function Contact() {
  const ref = useReveal<HTMLElement>();

  return (
    <section id="contact" ref={ref} className="relative overflow-hidden py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-lines mask-fade-b opacity-30" />
        <div className="absolute left-1/2 top-1/2 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon-500/10 blur-[160px]" />
      </div>

      <div className="edge relative">
        <div className="reveal mb-12 flex items-center gap-4">
          <span className="label label-neon">05 / Contact</span>
          <span className="h-px flex-1 bg-ink-700" />
        </div>

        <div className="reveal max-w-4xl">
          <h2 className="font-display text-[clamp(2.4rem,6.5vw,5rem)] font-bold leading-[1.02] tracking-tightest text-balance">
            Have a community
            <br />
            that needs building?
          </h2>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-100">
            Let&apos;s turn your Discord into a place people don&apos;t want to
            leave.
          </p>
        </div>

        <div className="reveal mt-12" style={{ transitionDelay: '0.1s' }}>
          <p className="label mb-5">Available for</p>
          <div className="flex flex-wrap gap-2.5">
            {available.map((a) => (
              <span
                key={a}
                className="rounded-full border border-ink-600 bg-ink-850/60 px-4 py-2 text-sm text-ink-100"
              >
                {a}
              </span>
            ))}
          </div>
        </div>

        <div
          className="reveal mt-12 flex flex-col gap-4 sm:flex-row sm:items-center"
          style={{ transitionDelay: '0.15s' }}
        >
          <a href={`mailto:${contact.email}`} className="btn btn-primary">
            <Mail className="h-4 w-4" strokeWidth={2} />
            Email Me
          </a>
          <a
            href={contact.xUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost"
          >
            X / Twitter
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href={contact.discordUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost"
          >
            Discord
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href={contact.telegramUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="btn btn-ghost"
          >
            <Send className="h-4 w-4" strokeWidth={2} />
            Telegram
          </a>
        </div>

        <p className="reveal mt-10 font-mono text-xs text-ink-300">
          {contact.email}
        </p>
      </div>
    </section>
  );
}
