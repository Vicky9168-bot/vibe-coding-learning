import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";

export const metadata: Metadata = {
  title: "Vibe Coding 學習站",
  description: "AI Coding 課程的互動式學習網站:進度追蹤、積木圖鑑與練習",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="zh-Hant" className="h-full antialiased">
      <body className="min-h-full">
        <Nav />
        <main className="mx-auto w-full max-w-4xl px-4 pb-24 pt-6 md:ml-60 md:px-8 md:pb-10">
          {children}
        </main>
      </body>
    </html>
  );
}
