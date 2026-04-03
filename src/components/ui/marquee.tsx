import { cn } from "@/lib/utils";

interface MarqueeProps {
  items: string[];
  speed?: "normal" | "slow";
  separator?: string;
  className?: string;
  itemClassName?: string;
}

export function Marquee({
  items,
  speed = "normal",
  separator = "✦",
  className,
  itemClassName,
}: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className={cn("marquee-mask flex overflow-hidden", className)} aria-hidden="true">
      <ul
        className={cn(
          "flex shrink-0 items-center gap-0",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
        )}
      >
        {doubled.map((item, i) => (
          <li key={i} className="flex shrink-0 items-center">
            <span
              className={cn(
                "whitespace-nowrap px-5 font-sans text-sm font-500 uppercase tracking-widest",
                itemClassName,
              )}
            >
              {item}
            </span>
            <span className="text-primary opacity-60">{separator}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
