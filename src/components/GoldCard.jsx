export default function GoldCard({ title, children }) {
  return (
    <div className="rounded-2xl border border-brand-gold/20 bg-white/5 p-6 shadow-glow">
      <div className="font-serif text-lg text-white">{title}</div>
      <div className="mt-3 text-sm leading-relaxed text-white/70">
        {children}
      </div>
    </div>
  );
}
