import { Routine, RoutineConfig } from '../types/routine';
import { getAstrologyForDate } from './astrology';
import { getColorForDate } from './colors';
import { getAffirmationForDate, getChallengeForDate, getLuckyDirectionForDate } from './daily-elements';

export class RoutineGenerator {
  private config: RoutineConfig;

  constructor(config: Partial<RoutineConfig> = {}) {
    this.config = {
      includeNumber: true,
      includeUnderwearColor: true,
      includeChallenge: true,
      includeMoodMeter: true,
      includeEnergyMeter: true,
      includeLuckyDirection: true,
      includeSong: false,
      ...config
    };
  }

  /**
   * Generate a complete routine for a given date
   */
  generate(date: Date = new Date()): Routine {
    const routine: Routine = {
      date,
      dayOfWeek: this.formatDayOfWeek(date),
      formattedDate: this.formatDate(date),
      astrology: getAstrologyForDate(date),
      colorPick: getColorForDate(date),
      affirmation: getAffirmationForDate(date)
    };

    if (this.config.includeNumber) {
      routine.dailyNumber = this.getDailyNumber(date);
    }

    if (this.config.includeUnderwearColor) {
      routine.underwearColor = getColorForDate(date);
    }

    if (this.config.includeChallenge) {
      routine.dailyChallenge = getChallengeForDate(date);
    }

    if (this.config.includeMoodMeter) {
      routine.moodMeter = this.getMeterForDate(date, 'mood');
    }

    if (this.config.includeEnergyMeter) {
      routine.energyMeter = this.getMeterForDate(date, 'energy');
    }

    if (this.config.includeLuckyDirection) {
      routine.luckyDirection = getLuckyDirectionForDate(date);
    }

    return routine;
  }

  /**
   * Generate routines for a date range
   */
  generateRange(startDate: Date, endDate: Date): Routine[] {
    const routines: Routine[] = [];
    const current = new Date(startDate);

    while (current <= endDate) {
      routines.push(this.generate(current));
      current.setDate(current.getDate() + 1);
    }

    return routines;
  }

  /**
   * Get the daily number (1-9 cycling)
   */
  private getDailyNumber(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 0);
    const diff = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(diff / (24 * 60 * 60 * 1000));
    return (dayOfYear % 9) + 1;
  }

  /**
   * Get mood or energy meter (1-10 based on date)
   */
  private getMeterForDate(date: Date, type: 'mood' | 'energy'): number {
    const seed = type === 'mood' ? date.getDate() : date.getDate() + 100;
    return Math.max(1, Math.min(10, Math.floor((seed * 7 + date.getMonth() * 3) % 11)));
  }

  /**
   * Format date as MM/DD/YY
   */
  private formatDate(date: Date): string {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const year = String(date.getFullYear()).slice(-2);
    return `${month}/${day}/${year}`;
  }

  /**
   * Format day of week
   */
  private formatDayOfWeek(date: Date): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[date.getDay()];
  }

  /**
   * Update config
   */
  updateConfig(newConfig: Partial<RoutineConfig>): void {
    this.config = { ...this.config, ...newConfig };
  }
}

export default RoutineGenerator;
