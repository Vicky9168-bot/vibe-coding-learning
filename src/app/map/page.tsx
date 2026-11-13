import {
  chapters,
  formatClock,
  formatDuration,
  totalDurationSec,
  type UnitType,
} from "@/data/course";

const typeLabel: Record<UnitType, string> = {
  video: "影片",
  project: "實戰",
  assignment: "作業",
};

export default function MapPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">課程地圖</h1>
        <p className="mt-1 text-muted">9 章所有單元一覽(勾選進度會在下一步加入)。</p>
      </header>

      {chapters.map((chapter) => (
        <section
          key={chapter.id}
          aria-labelledby={`${chapter.id}-title`}
          className="rounded-2xl border border-border bg-card p-4"
        >
          <h2 id={`${chapter.id}-title`} className="font-bold">
            第 {chapter.number} 章 {chapter.title}
            {chapter.isNew && (
              <span className="ml-2 rounded-full bg-accent px-2 py-0.5 text-xs text-accent-foreground">
                NEW
              </span>
            )}
          </h2>
          <p className="mt-1 text-sm text-muted">
            {chapter.units.length} 個單元 ·{" "}
            {formatDuration(totalDurationSec(chapter.units))}
          </p>

          <ul className="mt-3 flex flex-col divide-y divide-border">
            {chapter.units.map((unit) => (
              <li
                key={unit.id}
                className="flex items-center gap-3 py-2 text-sm"
              >
                <span className="shrink-0 rounded-md bg-accent-soft px-2 py-0.5 text-xs font-medium text-accent">
                  {typeLabel[unit.type]}
                </span>
                <span className="flex-1">{unit.title}</span>
                {unit.durationSec !== null && (
                  <span className="shrink-0 font-mono text-xs text-muted">
                    {formatClock(unit.durationSec)}
                  </span>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
