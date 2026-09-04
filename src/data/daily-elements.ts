// Daily affirmations for Aries
const AFFIRMATIONS: string[] = [
  "I move forward with clarity and purpose.",
  "My energy is magnetic and my presence matters.",
  "I trust my instincts and act decisively.",
  "I am brave enough to be myself.",
  "My feelings are valid and guide me well.",
  "I attract what aligns with my energy.",
  "I am strong in my vulnerability.",
  "Today, I choose bold over safe.",
  "My body is a source of wisdom.",
  "I am exactly where I need to be.",
  "I radiate confidence and calm.",
  "My intuition is my superpower.",
  "I am worthy of what I desire.",
  "I move through the day with grace.",
  "My presence creates positive ripples."
];

// Daily challenges
const CHALLENGES: string[] = [
  "Wear your underwear color intentionally. Notice how it makes you feel.",
  "Do one thing that scares you slightly.",
  "Text someone you've been thinking about.",
  "Move your body for 10 minutes without stopping.",
  "Say one thing you actually mean instead of what's expected.",
  "Wear your sensuality like armor today.",
  "Ask for what you want.",
  "Spend 5 minutes alone with no phone.",
  "Notice three things that make you feel alive.",
  "Compliment someone on their energy, not their looks.",
  "Do something that takes courage.",
  "Slow down and savor one moment completely.",
  "Say no to something that doesn't serve you.",
  "Wear confidence like it's the best outfit.",
  "Dance like nobody's watching—alone is fine."
];

// Lucky directions
const LUCKY_DIRECTIONS: string[] = [
  "North",
  "Northeast",
  "East",
  "Southeast",
  "South",
  "Southwest",
  "West",
  "Northwest"
];

export function getAffirmationForDate(date: Date): string {
  const hash = date.getDate() + (date.getMonth() * 31);
  return AFFIRMATIONS[hash % AFFIRMATIONS.length];
}

export function getChallengeForDate(date: Date): string {
  const hash = date.getDate() + (date.getMonth() * 31);
  return CHALLENGES[hash % CHALLENGES.length];
}

export function getLuckyDirectionForDate(date: Date): string {
  const hash = date.getDate() + (date.getMonth() * 31);
  return LUCKY_DIRECTIONS[hash % LUCKY_DIRECTIONS.length];
}

export function getAllAffirmations(): string[] {
  return AFFIRMATIONS;
}

export function getAllChallenges(): string[] {
  return CHALLENGES;
}

export function getAllDirections(): string[] {
  return LUCKY_DIRECTIONS;
}
