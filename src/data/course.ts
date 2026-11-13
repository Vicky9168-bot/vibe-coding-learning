/**
 * 課程大綱:唯一資料來源。
 * 整理自 vibe_coding/course_content.docx(只有單元標題與時長,沒有影片內容)。
 */

export type UnitType = "video" | "project" | "assignment";

export interface Unit {
  /** 全站唯一,進度、筆記都用它當 key,不要改動已發出的 id */
  id: string;
  title: string;
  type: UnitType;
  /** 影片秒數;作業沒有影片,為 null */
  durationSec: number | null;
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  /** 課程標示為 NEW 的章節 */
  isNew: boolean;
  units: Unit[];
}

/** "07:22" -> 442 */
function mmss(text: string): number {
  const [minutes, seconds] = text.split(":").map(Number);
  return minutes * 60 + seconds;
}

function video(id: string, title: string, duration: string): Unit {
  return { id, title, type: "video", durationSec: mmss(duration) };
}

function project(id: string, title: string, duration: string): Unit {
  return { id, title, type: "project", durationSec: mmss(duration) };
}

function assignment(id: string, title: string): Unit {
  return { id, title, type: "assignment", durationSec: null };
}

export const chapters: Chapter[] = [
  {
    id: "c1",
    number: 1,
    title: "AI Coding 新時代:你不是打字員,而是架構師",
    isNew: false,
    units: [
      video("c1-u1", "AI Coding 課程導覽", "07:22"),
      video("c1-u2", "AI Coding 改變了什麼?你現在真正要學的是什麼?", "08:12"),
      video("c1-u3", "前後端、資料庫、API、AI是什麼?一次搞懂全貌", "08:28"),
      video("c1-u4", "積木圖鑑:你的 12 個積木", "07:21"),
      video("c1-u5", "積木流程法:我們如何思考堆疊積木流程?", "04:23"),
      video("c1-u6", "怎麼寫出 AI 看得懂的需求:系統拆解五問", "04:23"),
      video("c1-u7", "程式編輯器下載 & AI Coding環境建置", "06:08"),
    ],
  },
  {
    id: "c2",
    number: 2,
    title: "展示積木 x 版本控制積木 x 部署積木:見證應用網站的誕生",
    isNew: false,
    units: [
      video("c2-u1", "AI Coding 工作流程:認識 Claude Code 與建立第一個專案", "11:36"),
      video("c2-u2", "展示積木:為什麼這門課從 Next.js 開始?", "07:19"),
      video("c2-u3", "展示積木是什麼:用 AI 打造第一個網站畫面", "18:38"),
      video("c2-u4", "展示積木:從靜態畫面到互動網站", "09:23"),
      video("c2-u5", "版本控制積木:像專業工程師一樣存檔 (Git),不打指令也能完成上傳 github", "10:11"),
      video("c2-u6", "部署積木:一鍵讓你的網站正式上線", "06:00"),
      project("c2-u7", "實戰實作:打造你的第一個作品集", "16:44"),
      assignment("c2-a1", "作業 1 - 把你的Landing Page / 互動小工具部署上線,附公開網址"),
    ],
  },
  {
    id: "c3",
    number: 3,
    title: "邏輯積木 × AI 積木:讓網站真正開始思考",
    isNew: false,
    units: [
      video("c3-u1", "為什麼 AI 積木不能放展示層 —— 邏輯積木就是中間人", "06:45"),
      video("c3-u2", "邏輯積木:第一個 API Route", "04:02"),
      video("c3-u3", "展示積木 × 邏輯積木:第一次前後端串接", "10:03"),
      video("c3-u4", "AI 積木:OPENAI API Key設定和使用(文生文、文生圖等)", "04:51"),
      video("c3-u5", "展示積木 × 邏輯積木 × AI 積木:讓網站開始跟 AI 對話", "17:40"),
      video("c3-u6", "AI Coding:讓 AI 幫你安裝任何套件", "03:33"),
      project("c3-u7", "專案實戰一:打造 AI 面試模擬器", "17:39"),
      video("c3-u8", "把你的 AI 工具上線:設 API key (env var)+Vercel 部署", "07:38"),
      video("c3-u9", "使用者自備 API Key模式的網站建立(BYOK)", "07:35"),
      assignment("c3-a1", "作業 1 - 打造你的第一個 AI 工具並部署上線"),
    ],
  },
  {
    id: "c4",
    number: 4,
    title: "加入記憶、身份與檔案積木:從工具變成系統",
    isNew: false,
    units: [
      video("c4-u1", "記憶積木是什麼:讓系統記住資料", "04:24"),
      video("c4-u2", "免費線上資料庫建立和畫面看到資料(GUI)", "10:19"),
      video("c4-u3", "存入第一筆資料, 看懂資料庫的三層架構", "05:57"),
      video("c4-u4", "利用 AI 來用白話文寫資料庫架構", "09:39"),
      video("c4-u5", "記憶積木:讓 AI 幫你完成 CRUD", "15:44"),
      video("c4-u6", "身份積木:為什麼網站需要登入?", "01:51"),
      video("c4-u7", "身份積木:AI Coding 建立註冊登入功能", "05:55"),
      video("c4-u8", "記憶積木 × 身份積木:讓每位使用者都看到自己的資料", "11:37"),
      video("c4-u9", "檔案積木:永久保存使用者上傳的圖片與檔案", "06:23"),
      video("c4-u10", "記憶積木 × 檔案積木:把檔案和資料串起來", "03:31"),
      project("c4-u11", "專案實戰二:打造多人智能記帳本", "25:57"),
      project("c4-u12", "專案實戰三:合約審查小幫手", "22:31"),
    ],
  },
  {
    id: "c5",
    number: 5,
    title: "加入連線與爬蟲積木:讓網站看見世界",
    isNew: true,
    units: [
      video("c5-u1", "連線積木是什麼:讓網站開始取得外部資料", "03:03"),
      video("c5-u2", "連線積木:如何閱讀 API 文件並完成第一次 API 串接取得結構性資料", "06:41"),
      video("c5-u3", "沒有 API 怎麼辦?AI 幫你寫爬蟲(爬蟲注意事項)", "03:32"),
      video("c5-u4", "第一個爬蟲積木:簡單網頁爬蟲", "12:12"),
      video("c5-u5", "外部資料如何結合邏輯積木、展示積木與記憶積木?", "07:06"),
      project("c5-u6", "專案實戰四:打造股票摘要網站", "22:15"),
    ],
  },
  {
    id: "c6",
    number: 6,
    title: "加入排程和通知積木:讓系統自己跑",
    isNew: true,
    units: [
      video("c6-u1", "為什麼網站需要自動化?", "02:04"),
      video("c6-u2", "排程積木:讓網站自己決定什麼時候執行", "16:02"),
      video("c6-u3", "通知積木:為什麼寄信沒你想的簡單", "03:06"),
      video("c6-u4", "通知積木:用 Resend 寄出第一封 Email", "06:56"),
      project("c6-u5", "專案實戰五:AI 郵件秘書", "19:02"),
    ],
  },
  {
    id: "c7",
    number: 7,
    title: "從 Demo 到產品:AI Coding 的最佳實踐",
    isNew: true,
    units: [
      video("c7-u1", "回顧你的積木工具箱:我們已經學會了什麼?", "07:09"),
      video("c7-u2", "從積木到產品:如何規劃一個 AI SaaS", "06:11"),
      video("c7-u3", "AI Coding 最佳實踐:如何讓 AI 一次做對", "03:49"),
      video("c7-u4", "AI Debug:當 AI 開始亂跑時怎麼辦?", "03:29"),
      video("c7-u5", "AI Coding 常見地雷:開錯專案、跑錯終端機怎麼辦?", "05:31"),
    ],
  },
  {
    id: "c8",
    number: 8,
    title: "專案實戰武力全開",
    isNew: true,
    units: [
      project("c8-u1", "專案實戰六:行銷心理測驗搜集名單", "22:22"),
      project("c8-u2", "專案實戰七:會議記錄整理師", "17:59"),
      project("c8-u3", "專案實戰八:履歷健檢優化器", "11:19"),
      project("c8-u4", "專案實戰九:AI 英文家教", "17:01"),
      assignment("c8-a1", "作業 1 - 完成具備 AI 功能+登入+資料儲存+公開網址的產品,部署上線!"),
    ],
  },
  {
    id: "c9",
    number: 9,
    title: "從學會開發,到做出自己的產品",
    isNew: true,
    units: [
      video("c9-u1", "沒學過也能做:如何利用 AI 學習新功能", "05:23"),
      video("c9-u2", "AI Coding 時代,被放大百倍的 10% 關鍵能力", "05:19"),
      video("c9-u3", "給你的最後一段話", "04:06"),
    ],
  },
];

export const allUnits: Unit[] = chapters.flatMap((chapter) => chapter.units);

export function getChapter(chapterId: string): Chapter | undefined {
  return chapters.find((chapter) => chapter.id === chapterId);
}

/** 章節(或整門課)的影片總秒數,作業不計 */
export function totalDurationSec(units: Unit[]): number {
  return units.reduce((sum, unit) => sum + (unit.durationSec ?? 0), 0);
}

/** 3725 -> "1 小時 2 分";乾淨顯示用,不含秒 */
export function formatDuration(seconds: number): string {
  const totalMinutes = Math.round(seconds / 60);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  if (hours === 0) return `${minutes} 分`;
  return `${hours} 小時 ${minutes} 分`;
}

/** 442 -> "07:22",單元旁邊顯示用 */
export function formatClock(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const rest = seconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(rest).padStart(2, "0")}`;
}
