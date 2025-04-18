import { cva, type VariantProps } from "class-variance-authority";

// NEED TO WORK ON COLOR CODES
const button = cva(
  [
    "flex items-center flex-col rounded-xl gap-2.5 border border-solid overflow-hidden justify-center transition-colors",
  ],
  {
    variants: {
      intent: {
        cta: [
          "bg-cta-button-bg border-cta-button-border hover:bg-cta-button-hover",
        ],
        secondary: ["bg-gray-500", "text-white", "hover:bg-gray-600"],
        danger: ["bg-red-500", "text-white", "hover:bg-red-600"],
      },
      size: {
        small: ["w-[70px]", "h-[70px]", "p-3"],
        medium: ["text-base", "py-2", "px-4"],
        large: ["text-lg", "py-3", "px-6"],
      },
    },
    defaultVariants: {
      intent: "cta",
      size: "small",
    },
  },
);

// Extract variant props type
type ButtonProps = VariantProps<typeof button> & {
  children: React.ReactNode;
  className?: string;
};

// Button component
export const Button = ({ intent, size, children, className }: ButtonProps) => {
  return (
    <button className={button({ intent, size, className })}>{children}</button>
  );
};
