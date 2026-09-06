import type { Question, QuizItem } from "./questions";

export function shuffle<T>(items: T[]): T[] {
  const next = [...items];
  for (let i = next.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    const current = next[i];
    const swap = next[j];
    if (current === undefined || swap === undefined) continue;
    next[i] = swap;
    next[j] = current;
  }
  return next;
}

export function equalizeLength(options: string[]): string[] {
  const lengths = options.map((option) => [...option].length);
  const max = Math.max(0, ...lengths);
  return options.map((option) => option + "\u00a0".repeat(max - [...option].length));
}

export function buildQuiz(questions: Question[], count?: number): QuizItem[] {
  const pool = shuffle(questions);
  const selected = typeof count === "number" ? pool.slice(0, count) : pool;
  return selected.map((question) => {
    const raw = [question.answer, ...question.distractors];
    const padded = equalizeLength(raw);
    const combined = padded.map((label, index) => ({
      label,
      correct: index === 0,
    }));
    return {
      id: question.id,
      topic: question.topic,
      prompt: question.prompt,
      options: shuffle(combined),
    };
  });
}

export function scoreLabel(correct: number, total: number): string {
  if (total === 0) return "Sem questões";
  const ratio = correct / total;
  if (ratio === 1) return "Gabaritou";
  if (ratio >= 0.85) return "Excelente";
  if (ratio >= 0.7) return "Muito bom";
  if (ratio >= 0.5) return "Em progresso";
  return "Revisar a base";
}

const BEST_KEY = "locus-best-score";

export function readBestScore(): number {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(BEST_KEY);
  const parsed = raw ? Number.parseInt(raw, 10) : 0;
  return Number.isFinite(parsed) ? parsed : 0;
}

export function writeBestScore(score: number, total: number): number {
  const percent = total === 0 ? 0 : Math.round((score / total) * 100);
  const previous = readBestScore();
  const next = Math.max(previous, percent);
  window.localStorage.setItem(BEST_KEY, String(next));
  return next;
}
