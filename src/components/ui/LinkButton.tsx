import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkButton = cva(
  [
    "flex items-center flex-col rounded-xl gap-2.5 border border-solid overflow-hidden justify-center",
  ],
  {
    variants: {
      intent: {
        cta: [
          "bg-cta-button-bg border-cta-button-border hover:bg-cta-button-hover w-[50px] h-[50px] p-2 md:w-[60px] md:h-[60px] md:p-3 xl:w-[70px] xl:h-[70px]",
        ],
        comingSoon: [""],
        minimal: ["bg-transparent border-none w-full h-full"],
      },
      size: {
        small: [""],
        medium: [""],
        large: [""],
      },
    },
    defaultVariants: {
      intent: "cta",
    },
  },
);

type LinkButtonProps = VariantProps<typeof linkButton> & {
  children: React.ReactNode;
  href: string;
  className?: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
};

export const LinkButton = ({
  intent,
  size,
  children,
  href,
  className,
  target,
  rel,
  ariaLabel,
}: LinkButtonProps) => {
  return (
    <a
      href={href}
      className={cn(linkButton({ intent, size }), className)}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
};
