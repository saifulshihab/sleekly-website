"use client";

import { cn } from "@/lib/utils";
import { type ButtonHTMLAttributes, forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-cream border-2 border-primary hover:bg-primary-dim hover:border-primary-dim active:shadow-none shadow-ink-hard",
  secondary:
    "bg-ink text-cream border-2 border-ink hover:bg-charcoal active:shadow-none shadow-ink-hard",
  ghost: "bg-transparent text-ink border-2 border-transparent hover:border-ink/20 hover:bg-ink/5",
  outline:
    "bg-transparent text-ink border-2 border-ink hover:bg-ink hover:text-cream active:shadow-none shadow-ink-hard",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-xs tracking-widest",
  md: "px-6 py-3 text-sm tracking-widest",
  lg: "px-8 py-4 text-sm tracking-widest",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    "relative inline-flex cursor-pointer items-center justify-center gap-2 font-sans font-700 uppercase transition-all duration-200 ease-spring",
    "translate-x-0 translate-y-0 hover:-translate-x-0.5 hover:-translate-y-0.5",
    "active:translate-x-0.5 active:translate-y-0.5",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative inline-flex cursor-pointer items-center justify-center gap-2 font-sans font-700 uppercase transition-all duration-200 ease-spring",
          "translate-x-0 translate-y-0 hover:-translate-x-0.5 hover:-translate-y-0.5",
          "active:translate-x-0.5 active:translate-y-0.5",
          variantStyles[variant],
          sizeStyles[size],
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
