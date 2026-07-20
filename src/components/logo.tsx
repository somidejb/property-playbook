import Image from "next/image";
import { cn } from "@/lib/utils";

/** The client's real mark. On dark backgrounds it sits on a small paper
 * chip — the mark's plum half has almost no contrast directly against the
 * brand's dark plum sections. */
export function LogoMark({
  className,
  tone = "on-light",
}: {
  className?: string;
  tone?: "on-light" | "on-dark";
}) {
  const image = (
    <Image
      src="/brand/logo-icon.png"
      alt=""
      width={120}
      height={60}
      className="h-full w-full object-contain"
      priority
    />
  );

  if (tone === "on-dark") {
    return (
      <span className={cn("inline-flex items-center justify-center bg-paper p-1", className)}>
        {image}
      </span>
    );
  }

  return <span className={cn("inline-flex items-center justify-center", className)}>{image}</span>;
}

export function Logo({
  className,
  tone = "on-light",
  markClassName,
}: {
  className?: string;
  tone?: "on-light" | "on-dark";
  markClassName?: string;
}) {
  const inkColor = tone === "on-light" ? "text-plum-900" : "text-paper";

  return (
    <div className={cn("flex items-center gap-3", className)}>
      <LogoMark tone={tone} className={cn("h-11 w-11 shrink-0", markClassName)} />
      <div className="flex flex-col leading-none">
        <span className={cn("font-label text-[9px] tracking-[0.35em]", inkColor, "opacity-70")}>
          The
        </span>
        <span className={cn("font-display text-xl font-semibold tracking-tight", inkColor)}>
          Property Playbook
        </span>
      </div>
    </div>
  );
}
