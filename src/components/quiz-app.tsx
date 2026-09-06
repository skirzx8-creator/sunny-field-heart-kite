import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Check, RotateCcw, X } from "lucide-react";
import { QUESTIONS, type QuizItem } from "@/lib/questions";
import {
  buildQuiz,
  readBestScore,
  scoreLabel,
  writeBestScore,
} from "@/lib/quiz";
import { cn } from "@/lib/utils";

type Screen = "home" | "play" | "results";
type Mode = 10 | 20 | 43;

const LETTERS = ["A", "B", "C", "D"] as const;

export function QuizApp() {
  const [screen, setScreen] = useState<Screen>("home");
  const [mode, setMode] = useState<Mode>(43);
  const [items, setItems] = useState<QuizItem[]>([]);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [answers, setAnswers] = useState<(number | null)[]>([]);
  const [best, setBest] = useState(0);

  useEffect(() => {
    setBest(readBestScore());
  }, []);

  const current = items[index];
  const correctCount = answers.reduce<number>((sum, choice, i) => {
    const item = items[i];
    if (choice === null || !item) return sum;
    return sum + (item.options[choice]?.correct ? 1 : 0);
  }, 0);

  useEffect(() => {
    if (screen !== "results" || items.length === 0) return;
    setBest(writeBestScore(correctCount, items.length));
  }, [screen, items.length, correctCount]);

  function start(nextMode: Mode) {
    const quiz = buildQuiz(QUESTIONS, nextMode);
    setMode(nextMode);
    setItems(quiz);
    setIndex(0);
    setPicked(null);
    setAnswers(Array.from({ length: quiz.length }, () => null));
    setScreen("play");
  }

  function choose(optionIndex: number) {
    if (picked !== null || !current) return;
    setPicked(optionIndex);
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = optionIndex;
      return next;
    });
  }

  function next() {
    if (index + 1 >= items.length) {
      setScreen("results");
      return;
    }
    setIndex((i) => i + 1);
    setPicked(null);
  }

  return (
    <main className="relative min-h-dvh overflow-x-hidden bg-bg text-fg">
      <PaperGrain />
      <div className="relative mx-auto flex min-h-dvh w-full max-w-3xl flex-col px-5 py-6 sm:px-8 sm:py-10">
        {screen === "home" ? (
          <HomeScreen best={best} mode={mode} onMode={setMode} onStart={() => start(mode)} />
        ) : null}
        {screen === "play" && current ? (
          <PlayScreen
            item={current}
            index={index}
            total={items.length}
            picked={picked}
            onChoose={choose}
            onNext={next}
            onExit={() => setScreen("home")}
          />
        ) : null}
        {screen === "results" ? (
          <ResultsScreen
            items={items}
            answers={answers}
            correctCount={correctCount}
            best={best}
            onRetry={() => start(mode)}
            onHome={() => setScreen("home")}
          />
        ) : null}
      </div>
    </main>
  );
}

function HomeScreen({
  best,
  mode,
  onMode,
  onStart,
}: {
  best: number;
  mode: Mode;
  onMode: (mode: Mode) => void;
  onStart: () => void;
}) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-10 py-6">
      <header className="flex flex-col gap-5">
        <p className="font-mono text-xs font-medium tracking-[0.22em] text-accent uppercase">
          Biologia molecular
        </p>
        <h1 className="font-display text-[2.6rem] leading-[1.05] font-semibold tracking-[-0.03em] text-fg sm:text-5xl">
          Lócus
        </h1>
        <p className="max-w-md text-base leading-relaxed text-fg-muted">
          As mesmas perguntas e respostas do material. As quatro alternativas de
          cada questão têm o mesmo tamanho — nada se entrega pelo comprimento.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-3">
        <Stat label="Questões" value={String(QUESTIONS.length)} />
        <Stat label="Temas" value="9" />
        <Stat label="Melhor" value={best ? `${best}%` : "—"} />
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-xs font-medium tracking-wide text-fg-subtle uppercase">
          Quantas questões
        </p>
        <div className="grid grid-cols-3 gap-2">
          {([10, 20, 43] as const).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => onMode(value)}
              className={cn(
                "h-12 rounded-md border text-sm font-medium transition-colors duration-150",
                mode === value
                  ? "border-accent bg-accent text-accent-fg"
                  : "border-border bg-bg-elevated text-fg hover:border-border-strong",
              )}
            >
              {value === 43 ? "Todas" : value}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={onStart}
        className="flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-base font-semibold text-accent-fg transition-transform duration-150 hover:brightness-110 active:scale-[0.98]"
      >
        Começar
        <ArrowRight className="size-4" strokeWidth={2.2} />
      </button>
    </div>
  );
}

function PlayScreen({
  item,
  index,
  total,
  picked,
  onChoose,
  onNext,
  onExit,
}: {
  item: QuizItem;
  index: number;
  total: number;
  picked: number | null;
  onChoose: (index: number) => void;
  onNext: () => void;
  onExit: () => void;
}) {
  const revealed = picked !== null;
  const selected = revealed ? item.options[picked] : null;
  const isCorrect = Boolean(selected?.correct);

  useEffect(() => {
    function onKey(event: KeyboardEvent) {
      const map: Record<string, number> = { Digit1: 0, Digit2: 1, Digit3: 2, Digit4: 3, KeyA: 0, KeyB: 1, KeyC: 2, KeyD: 3 };
      if (event.code in map && picked === null) {
        onChoose(map[event.code] ?? 0);
      }
      if ((event.key === "Enter" || event.key === " ") && picked !== null) {
        event.preventDefault();
        onNext();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [picked, onChoose, onNext]);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={onExit}
          className="inline-flex h-11 items-center gap-2 rounded-md px-1 text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
        >
          <ArrowLeft className="size-4" />
          Sair
        </button>
        <p className="font-mono text-xs tracking-wide text-fg-subtle tabular-nums">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </p>
      </div>

      <div className="h-1 overflow-hidden rounded-full bg-bg-subtle">
        <div
          className="h-full rounded-full bg-accent transition-[width] duration-200 ease-[var(--ease-out)]"
          style={{ width: `${((index + (revealed ? 1 : 0)) / total) * 100}%` }}
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-mono text-[11px] tracking-[0.18em] text-accent uppercase">
          {item.topic}
        </p>
        <h2 className="font-display text-2xl leading-snug font-medium tracking-tight text-fg sm:text-3xl">
          {item.prompt}
        </h2>
      </div>

      <EqualOptions
        options={item.options}
        picked={picked}
        onChoose={onChoose}
      />

      <div className="mt-auto flex flex-col gap-3 pt-2">
        {revealed ? (
          <p
            className={cn(
              "text-sm font-medium",
              isCorrect ? "text-correct" : "text-wrong",
            )}
          >
            {isCorrect ? "Correto. A resposta do material foi mantida." : "Incorreto. A alternativa certa está marcada."}
          </p>
        ) : (
          <p className="text-sm text-fg-subtle">Toque em uma alternativa. A, B, C e D têm o mesmo tamanho.</p>
        )}
        <button
          type="button"
          disabled={!revealed}
          onClick={onNext}
          className="flex h-14 items-center justify-center gap-2 rounded-lg bg-accent text-base font-semibold text-accent-fg transition-opacity duration-150 disabled:opacity-35"
        >
          {index + 1 === total ? "Ver resultado" : "Próxima"}
          <ArrowRight className="size-4" strokeWidth={2.2} />
        </button>
      </div>
    </div>
  );
}

function EqualOptions({
  options,
  picked,
  onChoose,
}: {
  options: QuizItem["options"];
  picked: number | null;
  onChoose: (index: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const revealed = picked !== null;

  const equalize = () => {
    const root = ref.current;
    if (!root) return;
    const buttons = Array.from(root.querySelectorAll<HTMLButtonElement>("[data-option]"));
    buttons.forEach((button) => {
      button.style.minHeight = "";
    });
    const max = Math.max(...buttons.map((button) => button.getBoundingClientRect().height), 96);
    buttons.forEach((button) => {
      button.style.minHeight = `${Math.ceil(max)}px`;
    });
  };

  useLayoutEffect(() => {
    equalize();
    const root = ref.current;
    if (!root) return;
    const observer = new ResizeObserver(() => equalize());
    observer.observe(root);
    window.addEventListener("resize", equalize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", equalize);
    };
  }, [options, picked]);

  return (
    <div ref={ref} className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:grid-rows-2">
      {options.map((option, optionIndex) => {
        const isPicked = picked === optionIndex;
        const showCorrect = revealed && option.correct;
        const showWrong = revealed && isPicked && !option.correct;
        return (
          <button
            key={`${optionIndex}-${option.label.slice(0, 12)}`}
            type="button"
            data-option=""
            disabled={revealed}
            onClick={() => onChoose(optionIndex)}
            className={cn(
              "flex h-full items-stretch gap-3 rounded-lg border px-3.5 py-3.5 text-left transition-[border-color,background-color,transform] duration-150 ease-[var(--ease-out)]",
              "disabled:cursor-default",
              !revealed && "bg-bg-elevated border-border hover:border-border-strong active:scale-[0.995]",
              showCorrect && "border-correct bg-correct-bg",
              showWrong && "border-wrong bg-wrong-bg",
              revealed && !showCorrect && !showWrong && "border-border bg-bg-elevated opacity-70",
            )}
          >
            <span
              className={cn(
                "mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-sm font-mono text-xs font-medium",
                showCorrect && "bg-correct text-accent-fg",
                showWrong && "bg-wrong text-accent-fg",
                !showCorrect && !showWrong && "bg-bg-subtle text-fg",
              )}
            >
              {LETTERS[optionIndex]}
            </span>
            <span className="flex-1 text-[0.95rem] leading-snug text-fg whitespace-pre-wrap">
              {option.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}

function ResultsScreen({
  items,
  answers,
  correctCount,
  best,
  onRetry,
  onHome,
}: {
  items: QuizItem[];
  answers: (number | null)[];
  correctCount: number;
  best: number;
  onRetry: () => void;
  onHome: () => void;
}) {
  const missed = useMemo(
    () =>
      items
        .map((item, i) => ({ item, choice: answers[i], i }))
        .filter(({ item, choice }) => {
          if (choice === null) return true;
          return !item.options[choice]?.correct;
        }),
    [items, answers],
  );

  return (
    <div className="flex flex-1 flex-col gap-8">
      <header className="flex flex-col gap-3 pt-2">
        <p className="font-mono text-xs tracking-[0.22em] text-accent uppercase">
          Resultado
        </p>
        <h2 className="font-display text-4xl leading-none font-semibold tracking-[-0.03em]">
          {correctCount}
          <span className="text-fg-subtle">/{items.length}</span>
        </h2>
        <p className="text-base text-fg-muted">
          {scoreLabel(correctCount, items.length)}. Melhor marca: {best}%.
        </p>
      </header>

      <div className="flex flex-col gap-2 sm:flex-row">
        <button
          type="button"
          onClick={onRetry}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-lg bg-accent font-semibold text-accent-fg"
        >
          <RotateCcw className="size-4" />
          Jogar de novo
        </button>
        <button
          type="button"
          onClick={onHome}
          className="flex h-12 flex-1 items-center justify-center rounded-lg border border-border bg-bg-elevated font-medium text-fg"
        >
          Início
        </button>
      </div>

      {missed.length > 0 ? (
        <section className="flex flex-col gap-4">
          <h3 className="text-sm font-medium tracking-wide text-fg-subtle uppercase">
            Revisar erros ({missed.length})
          </h3>
          <ol className="flex flex-col gap-3">
            {missed.map(({ item, choice, i }) => {
              const correct = item.options.find((option) => option.correct)?.label.trim() ?? "";
              const yours =
                choice === null ? "Sem resposta" : item.options[choice]?.label.trim() ?? "";
              return (
                <li
                  key={item.id}
                  className="rounded-lg border border-border bg-bg-elevated px-4 py-4"
                >
                  <p className="font-mono text-[11px] text-fg-subtle tabular-nums">
                    Questão {i + 1}
                  </p>
                  <p className="mt-1 font-display text-lg leading-snug font-medium">{item.prompt}</p>
                  <p className="mt-3 flex items-start gap-2 text-sm text-wrong">
                    <X className="mt-0.5 size-3.5 shrink-0" />
                    <span>{yours}</span>
                  </p>
                  <p className="mt-1.5 flex items-start gap-2 text-sm text-correct">
                    <Check className="mt-0.5 size-3.5 shrink-0" />
                    <span>{correct}</span>
                  </p>
                </li>
              );
            })}
          </ol>
        </section>
      ) : (
        <p className="rounded-lg border border-correct bg-correct-bg px-4 py-4 text-sm text-correct">
          Nenhuma questão errada. As respostas do material foram todas acertadas.
        </p>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-bg-elevated px-3 py-3">
      <p className="text-[11px] tracking-wide text-fg-subtle uppercase">{label}</p>
      <p className="mt-1 font-display text-2xl leading-none font-medium tabular-nums">{value}</p>
    </div>
  );
}

function PaperGrain() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.35]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 12% 8%, color-mix(in oklab, var(--color-accent) 9%, transparent) 0 18%, transparent 42%), radial-gradient(circle at 88% 92%, color-mix(in oklab, var(--color-fg) 6%, transparent) 0 16%, transparent 40%)",
      }}
    />
  );
}
