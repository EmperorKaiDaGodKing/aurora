import { DailyColor } from '../types/routine';

// Curated color palette
const COLOR_PALETTE: DailyColor[] = [
  {
    name: "Electric Tangerine",
    hex: "#FF6B35",
    meaning: "Charged confidence and bold action. Wear this when you want to feel unstoppable."
  },
  {
    name: "Midnight Indigo",
    hex: "#2E1A47",
    meaning: "Deep intuition and quiet power. For introspective, grounded energy."
  },
  {
    name: "Rose Blush",
    hex: "#D4698D",
    meaning: "Soft vulnerability and emotional openness. Wear this for connection."
  },
  {
    name: "Sage Green",
    hex: "#9CAF88",
    meaning: "Calm renewal and gentle strength. Grounding without heavy."
  },
  {
    name: "Burnt Sienna",
    hex: "#A0522D",
    meaning: "Earthy stability and sensual presence. Deeply rooted confidence."
  },
  {
    name: "Pearl White",
    hex: "#F5F5F0",
    meaning: "Clean slate and new beginnings. Clarity and fresh starts."
  },
  {
    name: "Charcoal Grey",
    hex: "#36454F",
    meaning: "Neutral power. Blend in or stand firm—your choice."
  },
  {
    name: "Coral Sunset",
    hex: "#FF7F50",
    meaning: "Warmth and social magnetism. Wear when you want to radiate."
  },
  {
    name: "Navy Blue",
    hex: "#000080",
    meaning: "Steady confidence and professional presence."
  },
  {
    name: "Mauve Whisper",
    hex: "#E0B0FF",
    meaning: "Dreamy creativity and soft power. For introspective yet expressive days."
  }
];

export function getColorForDate(date: Date): DailyColor {
  const startOfYear = new Date(date.getFullYear(), 0, 0);
  const diff = date.getTime() - startOfYear.getTime();
  const dayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000));
  
  const index = dayOfYear % COLOR_PALETTE.length;
  return COLOR_PALETTE[index];
}

export function getColorByName(name: string): DailyColor | undefined {
  return COLOR_PALETTE.find(c => c.name.toLowerCase() === name.toLowerCase());
}

export function getAllColors(): DailyColor[] {
  return COLOR_PALETTE;
}
