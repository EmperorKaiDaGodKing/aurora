import { Routine } from '../types/routine';

export class RoutineFormatter {
  /**
   * Format routine as plain text (matching the template format)
   */
  static toText(routine: Routine): string {
    let text = '';

    text += '⭐ YOUR DAILY ROUTINE\n\n';

    text += '🗓 Day of the Week\n';
    text += `${routine.dayOfWeek}\n\n`;

    text += '📅 Full Date\n';
    text += `${routine.formattedDate}\n\n`;

    text += '🔮 Aries — Daily Predictions\n';
    text += `Core Vibe: ${routine.astrology.coreVibe}\n`;
    text += `Mind: ${routine.astrology.mind}\n`;
    text += `Body: ${routine.astrology.body}\n`;
    text += `Social: ${routine.astrology.social}\n`;
    text += `Wildcard: ${routine.astrology.wildcard}\n\n`;

    text += '🎨 Aries Daily Color Pick\n';
    text += `${routine.colorPick.name}\n`;
    text += `${routine.colorPick.meaning}\n\n`;

    if (routine.affirmation) {
      text += '✨ Daily Affirmation\n';
      text += `"${routine.affirmation}"\n\n`;
    }

    if (routine.dailyNumber) {
      text += '🔢 Daily Number\n';
      text += `${routine.dailyNumber}\n\n`;
    }

    if (routine.underwearColor) {
      text += '👙 Underwear Color Pick\n';
      text += `${routine.underwearColor.name}\n`;
      text += `${routine.underwearColor.meaning}\n\n`;
    }

    if (routine.dailyChallenge) {
      text += '🎯 Daily Challenge\n';
      text += `${routine.dailyChallenge}\n\n`;
    }

    if (routine.moodMeter !== undefined) {
      text += '💭 Mood Meter\n';
      text += `${routine.moodMeter}/10\n`;
      text += `${this.getMeterVisualization(routine.moodMeter)}\n\n`;
    }

    if (routine.energyMeter !== undefined) {
      text += '⚡ Energy Meter\n';
      text += `${routine.energyMeter}/10\n`;
      text += `${this.getMeterVisualization(routine.energyMeter)}\n\n`;
    }

    if (routine.luckyDirection) {
      text += '🧭 Lucky Direction\n';
      text += `${routine.luckyDirection}\n\n`;
    }

    return text;
  }

  /**
   * Format routine as JSON
   */
  static toJSON(routine: Routine): string {
    return JSON.stringify(routine, null, 2);
  }

  /**
   * Format routine as HTML
   */
  static toHTML(routine: Routine): string {
    const colorStyle = `background-color: ${routine.colorPick.hex}; color: ${this.getContrastColor(routine.colorPick.hex)};`;

    let html = `
      <div class="routine-container">
        <div class="routine-header" style="${colorStyle}">
          <h1>⭐ Your Daily Routine</h1>
          <p>${routine.dayOfWeek}, ${routine.formattedDate}</p>
        </div>

        <div class="routine-section">
          <h2>🔮 Aries Predictions</h2>
          <div class="prediction">
            <strong>Core Vibe:</strong> ${routine.astrology.coreVibe}
          </div>
          <div class="prediction">
            <strong>Mind:</strong> ${routine.astrology.mind}
          </div>
          <div class="prediction">
            <strong>Body:</strong> ${routine.astrology.body}
          </div>
          <div class="prediction">
            <strong>Social:</strong> ${routine.astrology.social}
          </div>
          <div class="prediction">
            <strong>Wildcard:</strong> ${routine.astrology.wildcard}
          </div>
        </div>

        <div class="routine-section color-section" style="border-left: 4px solid ${routine.colorPick.hex};">
          <h2>🎨 Color Pick</h2>
          <div class="color-swatch" style="background-color: ${routine.colorPick.hex}; width: 100px; height: 100px; border-radius: 4px; margin-bottom: 10px;"></div>
          <h3>${routine.colorPick.name}</h3>
          <p>${routine.colorPick.meaning}</p>
        </div>

        ${routine.affirmation ? `
        <div class="routine-section affirmation-section">
          <h2>✨ Daily Affirmation</h2>
          <p class="affirmation">"${routine.affirmation}"</p>
        </div>
        ` : ''}

        ${routine.underwearColor ? `
        <div class="routine-section underwear-section" style="border-left: 4px solid ${routine.underwearColor.hex};">
          <h2>👙 Underwear Color</h2>
          <div class="color-swatch" style="background-color: ${routine.underwearColor.hex}; width: 100px; height: 100px; border-radius: 4px; margin-bottom: 10px;"></div>
          <h3>${routine.underwearColor.name}</h3>
          <p>${routine.underwearColor.meaning}</p>
        </div>
        ` : ''}

        ${routine.dailyChallenge ? `
        <div class="routine-section challenge-section">
          <h2>🎯 Daily Challenge</h2>
          <p>${routine.dailyChallenge}</p>
        </div>
        ` : ''}

        ${routine.moodMeter !== undefined || routine.energyMeter !== undefined ? `
        <div class="routine-section meters-section">
          ${routine.moodMeter !== undefined ? `
          <div class="meter">
            <h3>💭 Mood Meter</h3>
            <div class="meter-bar">
              <div class="meter-fill" style="width: ${routine.moodMeter * 10}%;"></div>
            </div>
            <p>${routine.moodMeter}/10</p>
          </div>
          ` : ''}
          ${routine.energyMeter !== undefined ? `
          <div class="meter">
            <h3>⚡ Energy Meter</h3>
            <div class="meter-bar">
              <div class="meter-fill" style="width: ${routine.energyMeter * 10}%;"></div>
            </div>
            <p>${routine.energyMeter}/10</p>
          </div>
          ` : ''}
        </div>
        ` : ''}

        ${routine.luckyDirection ? `
        <div class="routine-section direction-section">
          <h2>🧭 Lucky Direction</h2>
          <p>${routine.luckyDirection}</p>
        </div>
        ` : ''}
      </div>
    `;

    return html;
  }

  /**
   * Create a simple bar visualization for meters
   */
  private static getMeterVisualization(value: number): string {
    const filled = Math.round(value);
    const empty = 10 - filled;
    return '█'.repeat(filled) + '░'.repeat(empty);
  }

  /**
   * Simple contrast color calculation
   */
  private static getContrastColor(hexColor: string): string {
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
    const brightness = (r * 299 + g * 587 + b * 114) / 1000;
    return brightness > 128 ? '#000000' : '#FFFFFF';
  }
}

export default RoutineFormatter;
