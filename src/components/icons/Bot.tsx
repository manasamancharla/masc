import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function Bot({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(className)}
      {...props}
    >
      <path
        d="M23.9998 16.6663V9.33301H16.6665M5.6665 27.6663H9.33317M38.6665 27.6663H42.3332M29.4998 25.833V29.4997M18.4998 25.833V29.4997M12.9998 16.6663H34.9998C34.9998 16.6663 38.6665 16.6663 38.6665 20.333V34.9997C38.6665 34.9997 38.6665 38.6663 34.9998 38.6663H12.9998C12.9998 38.6663 9.33317 38.6663 9.33317 34.9997V20.333C9.33317 20.333 9.33317 16.6663 12.9998 16.6663Z"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
