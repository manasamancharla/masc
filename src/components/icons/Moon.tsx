import type { SVGProps } from "react";
import { cn } from "../../lib/utils";

export function Moon({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn(className)}
      {...props}
    >
      <path
        d="M25 14.0811C24.7898 16.3555 23.9362 18.523 22.5391 20.3301C21.142 22.1371 19.2591 23.5088 17.1109 24.2848C14.9626 25.0608 12.6378 25.2089 10.4084 24.7118C8.17901 24.2147 6.13731 23.0929 4.52219 21.4778C2.90708 19.8627 1.78534 17.821 1.28824 15.5916C0.791145 13.3622 0.939246 11.0374 1.71522 8.88913C2.49119 6.74086 3.86293 4.85801 5.66994 3.46089C7.47695 2.06378 9.64449 1.21019 11.9189 1C10.5873 2.80151 9.94653 5.02113 10.1131 7.25516C10.2797 9.48918 11.2426 11.5892 12.8267 13.1733C14.4108 14.7574 16.5108 15.7203 18.7448 15.8869C20.9789 16.0535 23.1985 15.4127 25 14.0811Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
