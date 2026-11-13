const activities = [
  { title: "12 積木圖鑑", description: "翻卡片認識每個積木,再用情境小測驗拼拼看。" },
  { title: "全貌圖", description: "點選前端、後端、資料庫、API、AI,並播放一次請求的流程。" },
  { title: "系統拆解五問練習", description: "一次一題,最後產生可以貼給 Claude Code 的需求文字。" },
];

export default function LearnPage() {
  return (
    <div className="flex flex-col gap-6">
      <header>
        <h1 className="text-2xl font-bold">第 1 章互動教學</h1>
        <p className="mt-1 text-muted">三個互動會在後續步驟依序加入。</p>
      </header>

      <ul className="grid gap-3 sm:grid-cols-3">
        {activities.map((activity) => (
          <li
            key={activity.title}
            className="rounded-2xl border border-dashed border-border bg-card p-4"
          >
            <h2 className="font-bold">{activity.title}</h2>
            <p className="mt-1 text-sm text-muted">{activity.description}</p>
            <p className="mt-3 text-xs text-muted">即將推出</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
