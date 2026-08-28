import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0">
        {/* Grid */}
        <div className="absolute inset-0 grid-lines mask-fade-b opacity-60" />
        {/* Drifting glows */}
        <div className="absolute -top-1/4 left-1/4 h-[40rem] w-[40rem] rounded-full bg-neon-500/10 blur-[140px] animate-drift-slow" />
        <div className="absolute top-1/3 -right-1/4 h-[36rem] w-[36rem] rounded-full bg-signal/10 blur-[150px] animate-drift-slow-2" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,theme(colors.ink.950)_85%)]" />
      </div>

      <div className="edge relative flex min-h-screen flex-col justify-center pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div
            className="mb-8 flex items-center gap-3 animate-fade-in"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="h-px w-10 bg-neon-300/70" />
            <span className="label label-neon">
              Web3 Community Manager · Moderator · Growth
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-[clamp(2.6rem,7vw,5.5rem)] font-bold leading-[1.02] tracking-tightest text-balance animate-fade-up"
            style={{ animationDelay: '0.15s' }}
          >
            I build communities
            <br />
            people actually
            <br />
            <span className="text-neon-300">want to join.</span>
          </h1>

          {/* Supporting paragraph */}
          <p
            className="mt-8 max-w-xl text-lg leading-relaxed text-ink-100 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            I help Web3, gaming and esports projects build active, organized and
            loyal communities through community strategy, engagement,
            moderation, events, content and partnerships.
          </p>

          {/* Availability */}
          <div
            className="mt-8 flex items-center gap-3 animate-fade-in"
            style={{ animationDelay: '0.45s' }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-neon-300 opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon-300" />
            </span>
            <span className="label text-ink-100">
              Available for opportunities · WAT / UTC+1
            </span>
          </div>

          {/* Buttons */}
          <div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: '0.55s' }}
          >
            <button
              onClick={() => scrollTo('experience')}
              className="btn btn-ghost"
            >
              View My Experience
              <ArrowDown className="h-4 w-4" strokeWidth={2} />
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="btn btn-primary"
            >
              Let&apos;s Work Together
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="label text-ink-300">Scroll</span>
        <span className="h-10 w-px bg-gradient-to-b from-ink-500 to-transparent" />
      </div>
    </section>
  );
}
