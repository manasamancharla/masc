import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  [
    "flex items-center flex-col rounded-xl gap-2.5 border border-solid overflow-hidden justify-center transition-colors",
  ],
  {
    variants: {
      intent: {
        cta: [
          "bg-cta-button-bg border-cta-button-border hover:bg-cta-button-hover w-[50px] h-[50px] p-2 md:w-[60px] md:h-[60px] md:p-3 xl:w-[70px] xl:h-[70px]",
        ],
        comingSoon: [""],
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

type ButtonProps = VariantProps<typeof button> & {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button = ({
  intent,
  size,
  children,
  className,
  onClick,
}: ButtonProps) => {
  return (
    <button className={button({ intent, size, className })} onClick={onClick}>
      {children}
    </button>
  );
};
