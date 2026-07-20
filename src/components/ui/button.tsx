import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ComponentPropsWithoutRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-label text-xs transition-colors duration-200 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-plum-800 text-paper hover:bg-plum-700",
        lime: "bg-lime text-plum-950 hover:bg-lime-bright",
        outline:
          "border border-current text-ink hover:bg-ink hover:text-paper",
        "outline-light": "border border-paper/40 text-paper hover:bg-paper hover:text-plum-950",
        ghost: "text-ink hover:text-plum-700",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

type ButtonProps = ComponentPropsWithoutRef<"button"> &
  VariantProps<typeof buttonVariants> & { href?: string };

export function Button({ className, variant, size, href, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if (href) {
    const isInternalAnchor = href.startsWith("/#") || href.startsWith("#");
    if (isInternalAnchor) {
      return (
        // eslint-disable-next-line @next/next/no-html-link-for-pages
        <a href={href} className={classes}>
          {props.children as React.ReactNode}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
        {props.children as React.ReactNode}
      </Link>
    );
  }

  return <button className={classes} {...props} />;
}
