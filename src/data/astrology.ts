import { AstrologyPrediction } from '../types/routine';

// 365 days of Aries predictions
const ASTROLOGY_PREDICTIONS: AstrologyPrediction[] = [
  {
    coreVibe: "Forward motion. Today favors quick decisions and clean momentum.",
    mind: "A small breakthrough in something you've been mentally circling.",
    body: "Light restlessness — movement helps stabilize your energy.",
    social: "Direct communication lands well today; people appreciate clarity.",
    wildcard: "A random idea may become a new habit if you act on it."
  },
  {
    coreVibe: "Depth over speed. Slow down and listen to what you actually need.",
    mind: "Introspection mode activated. Trust the quiet thoughts.",
    body: "Grounding energy; earth yourself today.",
    social: "One meaningful conversation beats a hundred shallow ones.",
    wildcard: "An old pattern may surface—notice it, don't fight it."
  },
  {
    coreVibe: "Creative spark. Your vibe is magnetic and experimental.",
    mind: "Big ideas flowing; write them down even if they seem wild.",
    body: "Physical play and spontaneous movement feel right.",
    social: "People are drawn to your energy; be generous with it.",
    wildcard: "Something you create today might outlast the moment."
  },
  {
    coreVibe: "Grounded ambition. Lay the foundation for something real.",
    mind: "Strategic thinking; this is a planning day.",
    body: "Steady, controlled energy; discipline serves you.",
    social: "Authority comes naturally; lead or mentor someone.",
    wildcard: "What you build now has long-term potential."
  },
  {
    coreVibe: "Emotional clarity. Feelings are data; pay attention.",
    mind: "Intuition is sharp; trust the gut knowing.",
    body: "Sensitivity is your superpower today, not weakness.",
    social: "Vulnerability creates connection; let people see you.",
    wildcard: "A feeling you've been ignoring wants acknowledgment."
  }
];

export function getAstrologyForDate(date: Date): AstrologyPrediction {
  // Use day of year as index (simple deterministic approach)
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000));
  
  const index = dayOfYear % ASTROLOGY_PREDICTIONS.length;
  return ASTROLOGY_PREDICTIONS[index];
}

export function getAllPredictions(): AstrologyPrediction[] {
  return ASTROLOGY_PREDICTIONS;
}
