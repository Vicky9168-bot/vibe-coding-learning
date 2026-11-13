import {
  allUnits,
  chapters,
  formatDuration,
  totalDurationSec,
} from "@/data/course";

export default function Home() {
  const stats = [
    { label: "章節", value: `${chapters.length} 章` },
    { label: "單元", value: `${allUnits.length} 個` },
    { label: "影片總長", value: formatDuration(totalDurationSec(allUnits)) },
  ];

  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">歡迎回來 👋</h1>
        <p className="mt-1 text-muted">
          AI Coding 課程學習站:你不是打字員,而是架構師。
        </p>
      </header>

      <section aria-label="課程總覽" className="grid grid-cols-3 gap-3">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-border bg-card p-4"
          >
            <p className="text-sm text-muted">{stat.label}</p>
            <p className="mt-1 text-xl font-bold">{stat.value}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border border-dashed border-border p-6 text-muted">
        進度、經驗值與連續學習天數會在後續步驟加入。
      </section>
    </div>
  );
}
