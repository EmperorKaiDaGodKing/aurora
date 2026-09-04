// Core types for the routine generator

export interface AstrologyPrediction {
  coreVibe: string;
  mind: string;
  body: string;
  social: string;
  wildcard: string;
}

export interface DailyColor {
  name: string;
  hex: string;
  meaning: string;
}

export interface Routine {
  date: Date;
  dayOfWeek: string;
  formattedDate: string;
  astrology: AstrologyPrediction;
  colorPick: DailyColor;
  dailyNumber?: number;
  underwearColor?: DailyColor;
  dailyChallenge?: string;
  moodMeter?: number; // 1-10
  energyMeter?: number; // 1-10
  luckyDirection?: string;
  dailySong?: string;
  affirmation?: string;
}

export interface RoutineConfig {
  includeNumber: boolean;
  includeUnderwearColor: boolean;
  includeChallenge: boolean;
  includeMoodMeter: boolean;
  includeEnergyMeter: boolean;
  includeLuckyDirection: boolean;
  includeSong: boolean;
}
