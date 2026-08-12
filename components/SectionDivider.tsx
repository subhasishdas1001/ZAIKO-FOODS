export default function SectionDivider({
  label,
  light = false,
}: {
  label: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center justify-center gap-4 mb-4">
      <span className="zk-flank" />
      <span
        className={`font-label uppercase tracking-widest2 text-sm ${
          light ? "text-ink/70" : "text-gold"
        }`}
      >
        {label}
      </span>
      <span className="zk-flank right" />
    </div>
  );
}
