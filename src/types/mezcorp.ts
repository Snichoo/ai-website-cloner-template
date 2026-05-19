export interface ProblemCard {
  title: string;
  body: string;
  visual?: "chatgpt" | "bottleneck" | "tools" | "structure";
  image?: string;
}

export interface DeliverableCard {
  number: string;
  title: string;
  body: string;
  image?: string;
}

export interface SprintPhase {
  number: string;
  title: string;
  bullets: string[];
  whyMatters?: string;
  video?: string;
}

export interface PricingFeature {
  text: string;
}

export interface FaqItem {
  number: string;
  question: string;
  answer?: string;
}

export interface TimelineEntry {
  age: string;
  body: string;
}
