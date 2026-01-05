export default function SectionTitle({ kicker, title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {kicker ? (
        <div className="text-xs tracking-[0.28em] uppercase text-white/55">
          {kicker}
        </div>
      ) : null}

      <h2 className="mt-3 font-serif text-3xl md:text-4xl text-white">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-white/70 leading-relaxed">{subtitle}</p>
      ) : null}

      <div className="mt-6 flex justify-center">
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-brand-gold/70 to-transparent" />
      </div>
    </div>
  );
}
