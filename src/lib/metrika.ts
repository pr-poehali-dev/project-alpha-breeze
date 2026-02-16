declare global {
  interface Window {
    ym: (...args: unknown[]) => void;
  }
}

const METRIKA_ID = 106850277;

export function reachGoal(goal: string, params?: Record<string, string>) {
  if (typeof window !== 'undefined' && window.ym) {
    window.ym(METRIKA_ID, 'reachGoal', goal, params);
  }
}
export default reachGoal;
