import type { SVGProps } from "react";

export function Hand(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask id="path-1-inside-1_457_141" fill="white">
        <path d="M22.6306 8.44161L20.6336 5.10873C20.2053 4.3945 19.4999 3.87331 18.6726 3.65977C17.8454 3.44623 16.9639 3.55782 16.222 3.97C15.8083 4.20022 15.4535 4.51683 15.1837 4.89654L13.1741 1.55367C12.8904 1.08124 12.4827 0.688977 11.9918 0.416269C11.501 0.143561 10.9443 0 10.3776 0C9.81092 0 9.2542 0.143561 8.76335 0.416269C8.2725 0.688977 7.86479 1.08124 7.58114 1.55367C6.99124 1.10637 6.25797 0.870932 5.50736 0.887814C4.75675 0.904697 4.03569 1.17285 3.46812 1.64617C2.90056 2.1195 2.52194 2.76844 2.39734 3.48144C2.27274 4.19444 2.40996 4.92697 2.7854 5.55312L2.96883 5.85974C2.49152 5.8955 2.02866 6.03408 1.61444 6.26524C0.872632 6.6779 0.331434 7.35743 0.109891 8.15435C-0.111652 8.95126 0.00460691 9.80028 0.433093 10.5147L5.04771 18.2158C5.71162 19.3296 6.59821 20.3056 7.65622 21.0875C8.71423 21.8693 9.92267 22.4414 11.2117 22.7707C12.0742 22.9926 12.9631 23.1046 13.8559 23.104C15.6365 23.1011 17.385 22.6472 18.9259 21.788C20.4668 20.9287 21.7459 19.6943 22.6349 18.2086C23.5239 16.7229 23.9915 15.0381 23.9907 13.3234C23.9899 11.6087 23.5209 9.92436 22.6306 8.43938V8.44161ZM21.8622 15.4006C21.4368 16.9284 20.5505 18.3004 19.3154 19.3432C18.0803 20.386 16.5519 21.0527 14.9234 21.2591C13.2949 21.4655 11.6394 21.2024 10.1662 20.5029C8.69298 19.8034 7.4682 18.699 6.64668 17.3293L2.03206 9.62811C1.85639 9.32243 1.81235 8.96257 1.90941 8.62594C2.00646 8.28931 2.23686 8.00282 2.55103 7.82811C2.86519 7.6534 3.23802 7.60443 3.5893 7.69174C3.94058 7.77905 4.24223 7.99566 4.42935 8.29496L6.64783 11.9967C6.70665 12.101 6.78656 12.1929 6.88285 12.2669C6.97914 12.341 7.08986 12.3958 7.20848 12.428C7.32711 12.4602 7.45123 12.4692 7.57352 12.4544C7.69581 12.4397 7.8138 12.4015 7.92052 12.3422C8.02724 12.2828 8.12053 12.2035 8.19489 12.1088C8.26926 12.0142 8.32318 11.9061 8.35348 11.7911C8.38379 11.676 8.38986 11.5563 8.37134 11.439C8.35282 11.3217 8.31008 11.2091 8.24565 11.1079L4.38321 4.66435C4.28834 4.51261 4.22582 4.34419 4.19931 4.16892C4.17279 3.99365 4.18281 3.81505 4.22877 3.64356C4.27473 3.47206 4.35572 3.3111 4.46701 3.17008C4.5783 3.02906 4.71765 2.91081 4.87692 2.82224C5.0362 2.73367 5.2122 2.67654 5.39466 2.65421C5.57712 2.63188 5.76237 2.64478 5.93959 2.69216C6.11681 2.73954 6.28245 2.82046 6.42683 2.93018C6.57121 3.0399 6.69145 3.17623 6.7805 3.3312L10.3822 9.33037C10.441 9.43467 10.5209 9.52657 10.6172 9.60065C10.7135 9.67473 10.8242 9.72948 10.9429 9.76168C11.0615 9.79388 11.1856 9.80288 11.3079 9.78814C11.4302 9.7734 11.5482 9.73522 11.6549 9.67586C11.7616 9.6165 11.8549 9.53715 11.9293 9.4425C12.0036 9.34786 12.0576 9.23983 12.0879 9.12479C12.1182 9.00975 12.1242 8.89003 12.1057 8.77269C12.0872 8.65535 12.0445 8.54278 11.98 8.44161L9.17895 3.77558C9.08408 3.62384 9.02157 3.45542 8.99505 3.28015C8.96853 3.10489 8.97855 2.92629 9.02451 2.75479C9.07048 2.58329 9.15147 2.42233 9.26275 2.28131C9.37404 2.1403 9.51339 2.02205 9.67267 1.93347C9.83194 1.8449 10.0079 1.78778 10.1904 1.76544C10.3729 1.74311 10.5581 1.75601 10.7353 1.80339C10.9126 1.85078 11.0782 1.93169 11.2226 2.04141C11.367 2.15114 11.4872 2.28746 11.5762 2.44243L15.4318 8.87488C14.5337 9.75306 13.9793 10.9037 13.8628 12.1311C13.7462 13.3585 14.0748 14.5869 14.7926 15.6073C14.9303 15.8023 15.1428 15.9367 15.3834 15.9809C15.624 16.0251 15.873 15.9754 16.0755 15.8428C16.2781 15.7102 16.4176 15.5056 16.4635 15.2739C16.5093 15.0422 16.4578 14.8025 16.3201 14.6074C15.79 13.8515 15.582 12.9283 15.7389 12.0288C15.8959 11.1293 16.4059 10.3223 17.1634 9.77476C17.344 9.6444 17.4687 9.45486 17.5139 9.24196C17.5592 9.02907 17.5219 8.80757 17.4091 8.61936L16.6385 7.33065C16.5405 7.17889 16.4752 7.0097 16.4464 6.83314C16.4177 6.65659 16.4261 6.47627 16.4711 6.3029C16.5162 6.12953 16.597 5.96666 16.7087 5.82396C16.8204 5.68127 16.9608 5.56166 17.1215 5.47226C17.2822 5.38285 17.4599 5.32548 17.6441 5.30353C17.8283 5.28159 18.0152 5.29553 18.1936 5.34453C18.3721 5.39353 18.5385 5.47659 18.683 5.58876C18.8275 5.70093 18.9471 5.83993 19.0346 5.9975L21.0316 9.33037C21.5795 10.2388 21.935 11.2428 22.0776 12.2843C22.2202 13.3259 22.147 14.3843 21.8622 15.3984V15.4006ZM18.4866 0.854873C18.5487 0.627282 18.702 0.432691 18.9129 0.313773C19.1237 0.194856 19.375 0.161319 19.6115 0.220517C20.4929 0.444221 21.3194 0.834424 22.0429 1.36844C22.7664 1.90246 23.3724 2.56964 23.8258 3.3312L23.8638 3.39452C23.9283 3.4957 23.971 3.60827 23.9895 3.72561C24.008 3.84294 24.002 3.96267 23.9717 4.07771C23.9414 4.19275 23.8874 4.30078 23.8131 4.39542C23.7387 4.49007 23.6454 4.56941 23.5387 4.62878C23.432 4.68814 23.314 4.72632 23.1917 4.74106C23.0694 4.7558 22.9453 4.7468 22.8267 4.7146C22.708 4.6824 22.5973 4.62764 22.501 4.55357C22.4047 4.47949 22.3248 4.38759 22.266 4.28329L22.2279 4.21997C21.8952 3.66185 21.4505 3.17306 20.9197 2.78206C20.3889 2.39106 19.7826 2.10567 19.1361 1.9425C18.9005 1.88084 18.6998 1.73176 18.5781 1.5279C18.4563 1.32404 18.4235 1.08203 18.4866 0.854873ZM6.56246 23.6617C6.41094 23.8467 6.18937 23.9661 5.94644 23.9938C5.70351 24.0215 5.4591 23.9552 5.26691 23.8095C3.88658 22.7594 2.72749 21.4649 1.85209 19.9956C1.79149 19.8945 1.75216 19.7829 1.73635 19.6671C1.72054 19.5514 1.72856 19.4338 1.75995 19.321C1.79134 19.2083 1.84548 19.1026 1.91929 19.01C1.9931 18.9173 2.08512 18.8397 2.19011 18.7813C2.2951 18.7229 2.411 18.6851 2.53119 18.6698C2.65137 18.6546 2.7735 18.6623 2.89059 18.6926C3.00768 18.7228 3.11744 18.7749 3.2136 18.846C3.30977 18.9171 3.39045 19.0057 3.45105 19.1068C4.20978 20.3787 5.21376 21.4994 6.40903 22.4086C6.50495 22.4809 6.58506 22.5707 6.64474 22.673C6.70442 22.7753 6.74249 22.8879 6.75676 23.0044C6.77102 23.1209 6.7612 23.2389 6.72785 23.3518C6.6945 23.4646 6.63829 23.5699 6.56246 23.6617Z" />
      </mask>
      <path
        d="M22.6306 8.44161L20.6336 5.10873C20.2053 4.3945 19.4999 3.87331 18.6726 3.65977C17.8454 3.44623 16.9639 3.55782 16.222 3.97C15.8083 4.20022 15.4535 4.51683 15.1837 4.89654L13.1741 1.55367C12.8904 1.08124 12.4827 0.688977 11.9918 0.416269C11.501 0.143561 10.9443 0 10.3776 0C9.81092 0 9.2542 0.143561 8.76335 0.416269C8.2725 0.688977 7.86479 1.08124 7.58114 1.55367C6.99124 1.10637 6.25797 0.870932 5.50736 0.887814C4.75675 0.904697 4.03569 1.17285 3.46812 1.64617C2.90056 2.1195 2.52194 2.76844 2.39734 3.48144C2.27274 4.19444 2.40996 4.92697 2.7854 5.55312L2.96883 5.85974C2.49152 5.8955 2.02866 6.03408 1.61444 6.26524C0.872632 6.6779 0.331434 7.35743 0.109891 8.15435C-0.111652 8.95126 0.00460691 9.80028 0.433093 10.5147L5.04771 18.2158C5.71162 19.3296 6.59821 20.3056 7.65622 21.0875C8.71423 21.8693 9.92267 22.4414 11.2117 22.7707C12.0742 22.9926 12.9631 23.1046 13.8559 23.104C15.6365 23.1011 17.385 22.6472 18.9259 21.788C20.4668 20.9287 21.7459 19.6943 22.6349 18.2086C23.5239 16.7229 23.9915 15.0381 23.9907 13.3234C23.9899 11.6087 23.5209 9.92436 22.6306 8.43938V8.44161ZM21.8622 15.4006C21.4368 16.9284 20.5505 18.3004 19.3154 19.3432C18.0803 20.386 16.5519 21.0527 14.9234 21.2591C13.2949 21.4655 11.6394 21.2024 10.1662 20.5029C8.69298 19.8034 7.4682 18.699 6.64668 17.3293L2.03206 9.62811C1.85639 9.32243 1.81235 8.96257 1.90941 8.62594C2.00646 8.28931 2.23686 8.00282 2.55103 7.82811C2.86519 7.6534 3.23802 7.60443 3.5893 7.69174C3.94058 7.77905 4.24223 7.99566 4.42935 8.29496L6.64783 11.9967C6.70665 12.101 6.78656 12.1929 6.88285 12.2669C6.97914 12.341 7.08986 12.3958 7.20848 12.428C7.32711 12.4602 7.45123 12.4692 7.57352 12.4544C7.69581 12.4397 7.8138 12.4015 7.92052 12.3422C8.02724 12.2828 8.12053 12.2035 8.19489 12.1088C8.26926 12.0142 8.32318 11.9061 8.35348 11.7911C8.38379 11.676 8.38986 11.5563 8.37134 11.439C8.35282 11.3217 8.31008 11.2091 8.24565 11.1079L4.38321 4.66435C4.28834 4.51261 4.22582 4.34419 4.19931 4.16892C4.17279 3.99365 4.18281 3.81505 4.22877 3.64356C4.27473 3.47206 4.35572 3.3111 4.46701 3.17008C4.5783 3.02906 4.71765 2.91081 4.87692 2.82224C5.0362 2.73367 5.2122 2.67654 5.39466 2.65421C5.57712 2.63188 5.76237 2.64478 5.93959 2.69216C6.11681 2.73954 6.28245 2.82046 6.42683 2.93018C6.57121 3.0399 6.69145 3.17623 6.7805 3.3312L10.3822 9.33037C10.441 9.43467 10.5209 9.52657 10.6172 9.60065C10.7135 9.67473 10.8242 9.72948 10.9429 9.76168C11.0615 9.79388 11.1856 9.80288 11.3079 9.78814C11.4302 9.7734 11.5482 9.73522 11.6549 9.67586C11.7616 9.6165 11.8549 9.53715 11.9293 9.4425C12.0036 9.34786 12.0576 9.23983 12.0879 9.12479C12.1182 9.00975 12.1242 8.89003 12.1057 8.77269C12.0872 8.65535 12.0445 8.54278 11.98 8.44161L9.17895 3.77558C9.08408 3.62384 9.02157 3.45542 8.99505 3.28015C8.96853 3.10489 8.97855 2.92629 9.02451 2.75479C9.07048 2.58329 9.15147 2.42233 9.26275 2.28131C9.37404 2.1403 9.51339 2.02205 9.67267 1.93347C9.83194 1.8449 10.0079 1.78778 10.1904 1.76544C10.3729 1.74311 10.5581 1.75601 10.7353 1.80339C10.9126 1.85078 11.0782 1.93169 11.2226 2.04141C11.367 2.15114 11.4872 2.28746 11.5762 2.44243L15.4318 8.87488C14.5337 9.75306 13.9793 10.9037 13.8628 12.1311C13.7462 13.3585 14.0748 14.5869 14.7926 15.6073C14.9303 15.8023 15.1428 15.9367 15.3834 15.9809C15.624 16.0251 15.873 15.9754 16.0755 15.8428C16.2781 15.7102 16.4176 15.5056 16.4635 15.2739C16.5093 15.0422 16.4578 14.8025 16.3201 14.6074C15.79 13.8515 15.582 12.9283 15.7389 12.0288C15.8959 11.1293 16.4059 10.3223 17.1634 9.77476C17.344 9.6444 17.4687 9.45486 17.5139 9.24196C17.5592 9.02907 17.5219 8.80757 17.4091 8.61936L16.6385 7.33065C16.5405 7.17889 16.4752 7.0097 16.4464 6.83314C16.4177 6.65659 16.4261 6.47627 16.4711 6.3029C16.5162 6.12953 16.597 5.96666 16.7087 5.82396C16.8204 5.68127 16.9608 5.56166 17.1215 5.47226C17.2822 5.38285 17.4599 5.32548 17.6441 5.30353C17.8283 5.28159 18.0152 5.29553 18.1936 5.34453C18.3721 5.39353 18.5385 5.47659 18.683 5.58876C18.8275 5.70093 18.9471 5.83993 19.0346 5.9975L21.0316 9.33037C21.5795 10.2388 21.935 11.2428 22.0776 12.2843C22.2202 13.3259 22.147 14.3843 21.8622 15.3984V15.4006ZM18.4866 0.854873C18.5487 0.627282 18.702 0.432691 18.9129 0.313773C19.1237 0.194856 19.375 0.161319 19.6115 0.220517C20.4929 0.444221 21.3194 0.834424 22.0429 1.36844C22.7664 1.90246 23.3724 2.56964 23.8258 3.3312L23.8638 3.39452C23.9283 3.4957 23.971 3.60827 23.9895 3.72561C24.008 3.84294 24.002 3.96267 23.9717 4.07771C23.9414 4.19275 23.8874 4.30078 23.8131 4.39542C23.7387 4.49007 23.6454 4.56941 23.5387 4.62878C23.432 4.68814 23.314 4.72632 23.1917 4.74106C23.0694 4.7558 22.9453 4.7468 22.8267 4.7146C22.708 4.6824 22.5973 4.62764 22.501 4.55357C22.4047 4.47949 22.3248 4.38759 22.266 4.28329L22.2279 4.21997C21.8952 3.66185 21.4505 3.17306 20.9197 2.78206C20.3889 2.39106 19.7826 2.10567 19.1361 1.9425C18.9005 1.88084 18.6998 1.73176 18.5781 1.5279C18.4563 1.32404 18.4235 1.08203 18.4866 0.854873ZM6.56246 23.6617C6.41094 23.8467 6.18937 23.9661 5.94644 23.9938C5.70351 24.0215 5.4591 23.9552 5.26691 23.8095C3.88658 22.7594 2.72749 21.4649 1.85209 19.9956C1.79149 19.8945 1.75216 19.7829 1.73635 19.6671C1.72054 19.5514 1.72856 19.4338 1.75995 19.321C1.79134 19.2083 1.84548 19.1026 1.91929 19.01C1.9931 18.9173 2.08512 18.8397 2.19011 18.7813C2.2951 18.7229 2.411 18.6851 2.53119 18.6698C2.65137 18.6546 2.7735 18.6623 2.89059 18.6926C3.00768 18.7228 3.11744 18.7749 3.2136 18.846C3.30977 18.9171 3.39045 19.0057 3.45105 19.1068C4.20978 20.3787 5.21376 21.4994 6.40903 22.4086C6.50495 22.4809 6.58506 22.5707 6.64474 22.673C6.70442 22.7753 6.74249 22.8879 6.75676 23.0044C6.77102 23.1209 6.7612 23.2389 6.72785 23.3518C6.6945 23.4646 6.63829 23.5699 6.56246 23.6617Z"
        stroke="currentColor"
        strokeWidth="2"
        mask="url(#path-1-inside-1_457_141)"
      />
    </svg>
  );
}
