import { cn } from "@/lib/utils";

export function ChapterMark({
  number,
  label,
  tone = "on-light",
  className,
}: {
  number: string;
  label: string;
  tone?: "on-light" | "on-dark";
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span
        className={cn(
          "font-label text-xs",
          tone === "on-light" ? "text-plum-600" : "text-lime"
        )}
      >
        {number}
      </span>
      <span className="h-px w-8" style={{ background: tone === "on-light" ? "var(--hairline)" : "var(--hairline-dark)" }} />
      <span
        className={cn(
          "font-label text-xs",
          tone === "on-light" ? "text-ink-soft" : "text-paper/70"
        )}
      >
        {label}
      </span>
    </div>
  );
}
