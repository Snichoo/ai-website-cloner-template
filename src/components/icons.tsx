import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

export function MezCorpLogo(props: IconProps) {
  return (
    <svg
      viewBox="0 0 32 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Stylised "M" — two vertical bars joined at top, mimicking the brand mark */}
      <path
        d="M2 26 V4 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V26 H2 Z"
        fill="#1C1C1C"
      />
      <path
        d="M14 26 V4 a2 2 0 0 1 2 -2 h6 a2 2 0 0 1 2 2 V26 H14 Z"
        fill="#1C1C1C"
      />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export function GreenDot(props: IconProps) {
  return (
    <svg viewBox="0 0 12 12" fill="none" {...props}>
      <circle cx="6" cy="6" r="6" fill="#33D478" />
      <circle cx="6" cy="6" r="3" fill="#1c1c1c" fillOpacity="0.0" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
