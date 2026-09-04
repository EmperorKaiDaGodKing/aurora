import { useState, useCallback } from 'react';
import { Routine, RoutineConfig } from '../types/routine';
import RoutineGenerator from '../services/RoutineGenerator';

export interface UseRoutineGeneratorProps {
  config?: Partial<RoutineConfig>;
}

export function useRoutineGenerator(props?: UseRoutineGeneratorProps) {
  const [routine, setRoutine] = useState<Routine | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generator = new RoutineGenerator(props?.config);

  /**
   * Generate routine for a specific date
   */
  const generate = useCallback((date: Date = new Date()) => {
    try {
      setLoading(true);
      setError(null);
      const generated = generator.generate(date);
      setRoutine(generated);
      return generated;
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate routine';
      setError(message);
      return null;
    } finally {
      setLoading(false);
    }
  }, [generator]);

  /**
   * Generate routines for a date range
   */
  const generateRange = useCallback((startDate: Date, endDate: Date) => {
    try {
      setLoading(true);
      setError(null);
      return generator.generateRange(startDate, endDate);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to generate routines';
      setError(message);
      return [];
    } finally {
      setLoading(false);
    }
  }, [generator]);

  /**
   * Update generator configuration
   */
  const updateConfig = useCallback((newConfig: Partial<RoutineConfig>) => {
    generator.updateConfig(newConfig);
  }, [generator]);

  /**
   * Reset state
   */
  const reset = useCallback(() => {
    setRoutine(null);
    setError(null);
  }, []);

  return {
    routine,
    loading,
    error,
    generate,
    generateRange,
    updateConfig,
    reset
  };
}

export default useRoutineGenerator;
