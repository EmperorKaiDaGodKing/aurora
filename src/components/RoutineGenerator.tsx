import React, { useState, useEffect } from 'react';
import useRoutineGenerator from '../hooks/useRoutineGenerator';
import RoutineFormatter from '../services/RoutineFormatter';
import '../styles/RoutineGenerator.css';

export interface RoutineGeneratorComponentProps {
  date?: Date;
  autoGenerate?: boolean;
}

export const RoutineGeneratorComponent: React.FC<RoutineGeneratorComponentProps> = ({
  date = new Date(),
  autoGenerate = true
}) => {
  const [selectedDate, setSelectedDate] = useState(date);
  const [format, setFormat] = useState<'text' | 'html'>('html');
  const { routine, loading, error, generate } = useRoutineGenerator({
    config: {
      includeNumber: true,
      includeUnderwearColor: true,
      includeChallenge: true,
      includeMoodMeter: true,
      includeEnergyMeter: true,
      includeLuckyDirection: true
    }
  });

  useEffect(() => {
    if (autoGenerate) {
      generate(selectedDate);
    }
  }, [selectedDate, autoGenerate, generate]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(e.target.value));
  };

  const handleGenerate = () => {
    generate(selectedDate);
  };

  const handleDownloadText = () => {
    if (!routine) return;
    const text = RoutineFormatter.toText(routine);
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `routine-${routine.formattedDate}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="routine-generator">
      <div className="routine-controls">
        <h1>✨ Aurora Daily Routine Generator</h1>
        
        <div className="control-group">
          <label htmlFor="date-picker">Select Date:</label>
          <input
            id="date-picker"
            type="date"
            value={selectedDate.toISOString().split('T')[0]}
            onChange={handleDateChange}
          />
        </div>

        <div className="control-group">
          <label htmlFor="format-select">Format:</label>
          <select
            id="format-select"
            value={format}
            onChange={(e) => setFormat(e.target.value as 'text' | 'html')}
          >
            <option value="html">Visual (HTML)</option>
            <option value="text">Text</option>
          </select>
        </div>

        <div className="button-group">
          <button onClick={handleGenerate} disabled={loading} className="btn-primary">
            {loading ? 'Generating...' : 'Generate Routine'}
          </button>
          <button 
            onClick={handleDownloadText} 
            disabled={!routine || loading} 
            className="btn-secondary"
          >
            📥 Download as Text
          </button>
        </div>

        {error && <div className="error-message">❌ {error}</div>}
      </div>

      {routine && (
        <div className="routine-output">
          {format === 'text' ? (
            <pre className="routine-text">
              {RoutineFormatter.toText(routine)}
            </pre>
          ) : (
            <div 
              className="routine-html"
              dangerouslySetInnerHTML={{ __html: RoutineFormatter.toHTML(routine) }}
            />
          )}
        </div>
      )}

      {loading && !routine && (
        <div className="loading">
          <div className="spinner"></div>
          <p>Generating your personalized routine...</p>
        </div>
      )}
    </div>
  );
};

export default RoutineGeneratorComponent;
