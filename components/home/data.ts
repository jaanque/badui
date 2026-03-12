// ─── All page data in one place ─────────────────────────────────────────────

import {
  TextCursorInput, Navigation, Accessibility, Smartphone,
  AlertCircle, LayoutGrid, Type, Ghost, Clock, EyeOff,
  MousePointer2, BellRing, type LucideIcon,
} from "lucide-react";

export interface Category {
  title: string;
  description: string;
  icon: LucideIcon;
  slug: string;
  tilt: string;
}

export interface ShameItem {
  title: string;
  label: string;
  excerpt: string;
  stat: string;
  slug: string;
  tilt: string;
}

export interface AntipatternItem {
  title: string;
  category: string;
  impact: "Critical" | "High" | "Medium" | "Low";
  excerpt: string;
  slug: string;
  tilt: string;
}

export const CATEGORIES: Category[] = [
  { title: "Forms",               description: "Late validation, hidden labels, fields that wipe input on blur.",              icon: TextCursorInput, slug: "forms",          tilt: "-rotate-1" },
  { title: "Navigation",          description: "Hamburger menus hiding 90 % of the app, broken breadcrumbs.",                 icon: Navigation,      slug: "navigation",     tilt: "rotate-1"  },
  { title: "Accessibility",       description: "1.9:1 contrast ratios, focus traps, missing ARIA, keyboard-hostile UX.",      icon: Accessibility,   slug: "accessibility",  tilt: "rotate-2"  },
  { title: "Responsive & Mobile", description: "8 px tap targets, horizontal overflow, 9 px fonts on small screens.",        icon: Smartphone,      slug: "mobile",         tilt: "-rotate-2" },
  { title: "Feedback & States",   description: "Silent success, spinnerless loading, vague 'Something went wrong' errors.",  icon: AlertCircle,     slug: "feedback",       tilt: "rotate-1"  },
  { title: "Layout & Spacing",    description: "Flat visual hierarchy, chaotic alignment, oppressive density.",               icon: LayoutGrid,      slug: "layout",         tilt: "-rotate-1" },
  { title: "Typography",          description: "11 px body text, line-height 1.0, widows and orphans everywhere.",           icon: Type,            slug: "typography",     tilt: "-rotate-2" },
  { title: "Dark Patterns",       description: "Roach motels, shame-confirming dialogs, hidden checkout costs.",             icon: Ghost,           slug: "dark-patterns",  tilt: "rotate-1"  },
  { title: "Loading & Timeouts",  description: "Silent timeouts, no state persistence after refresh, 5-second splashes.",   icon: Clock,           slug: "loading",        tilt: "-rotate-1" },
  { title: "Control Theatre",     description: "Blocked paste in password fields, right-click disabled, no managers.",      icon: EyeOff,          slug: "control",        tilt: "rotate-2"  },
  { title: "Notification Spam",   description: "Newsletter popup 0.3 s after load. Geolocation request with zero context.", icon: BellRing,        slug: "notifications",  tilt: "rotate-1"  },
  { title: "Broken Micro-UX",     description: "Indicatorless carousels, scroll-jumping accordions, hover traps.",          icon: MousePointer2,   slug: "micro-ux",       tilt: "-rotate-2" },
];

export const HALL_OF_SHAME: ShameItem[] = [
  {
    title:   "The Invisible Close Button",
    label:   "Dark Patterns",
    excerpt: "A promotional modal with a 50 % grey overlay and a white × on a light-grey bg. The user cannot see it.",
    stat:    "99 % fail on first try",
    slug:    "invisible-close",
    tilt:    "-rotate-1",
  },
  {
    title:   "Schizophrenic Password Validation",
    label:   "Forms",
    excerpt: "Requirements only shown after the first failed submit. Add a number → error. Add a symbol → error. @ is forbidden.",
    stat:    "6.4 avg retries",
    slug:    "password-validation",
    tilt:    "rotate-1",
  },
  {
    title:   "Scroll Hijacking Hero",
    label:   "Navigation",
    excerpt: "Scrolling the wheel moves a lateral carousel instead of the page. Users abandon within 4 seconds.",
    stat:    "Abandons in 4 s",
    slug:    "scroll-hijacking",
    tilt:    "-rotate-2",
  },
];

export const RECENT_ANTIPATTERNS: AntipatternItem[] = [
  { title: "Subscription Cancellation Labyrinth",   category: "Dark Patterns", impact: "High",     excerpt: "6 guilt-tripping screens to reach the button that still doesn't cancel immediately.",               slug: "cancellation-labyrinth",  tilt: "-rotate-1" },
  { title: "Insufficient Text Contrast",            category: "Accessibility", impact: "High",     excerpt: "#9CA3AF on #F3F4F6 — ratio 1.9:1. WCAG minimum is 4.5:1. Effectively invisible in practice.",     slug: "insufficient-contrast",   tilt: "rotate-1"  },
  { title: "Infinite Scroll Footer Trap",           category: "Navigation",    impact: "Medium",   excerpt: "The footer is unreachable: every time you near the bottom, 20 new items load above it.",           slug: "infinite-scroll-trap",    tilt: "-rotate-2" },
  { title: "Birthday Date Picker from Hell",        category: "Forms",         impact: "Medium",   excerpt: "A native <select> per field. Takes 90 seconds on average to complete on iOS.",                    slug: "date-picker-hell",         tilt: "rotate-2"  },
  { title: "Swapped Confirm / Destructive Buttons", category: "Feedback",      impact: "Critical", excerpt: "Bright button = Cancel. Muted button = Delete forever. Accidental deletion rate: 23 %.",           slug: "swapped-buttons",          tilt: "-rotate-1" },
  { title: "Ephemeral Toast Errors",                category: "Feedback",      impact: "Medium",   excerpt: "Error visible for 1.2 s. No log, no retry. The user never knows what went wrong.",               slug: "ephemeral-toasts",         tilt: "rotate-1"  },
];

export const MARQUEE_ITEMS = [
  "120+ antipatterns documented",
  "12 categories",
  "47 code-level fixes",
  "Open source & free",
  "Real-world examples only",
  "No filler content",
  "New patterns weekly",
  "Built by developers, for developers",
];
