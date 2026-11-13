"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "首頁", icon: "🏠" },
  { href: "/map", label: "課程地圖", icon: "🗺️" },
  { href: "/learn", label: "互動教學", icon: "🧩" },
  { href: "/notes", label: "筆記與作業", icon: "📝" },
];

function isActive(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** 桌面:左側導覽;手機:底部分頁 */
export function Nav() {
  const pathname = usePathname();

  return (
    <>
      <aside className="fixed inset-y-0 left-0 hidden w-60 flex-col gap-1 border-r border-border bg-card p-4 md:flex">
        <p className="mb-4 px-3 text-lg font-bold">
          <span className="text-accent">Vibe</span> Coding 學習站
        </p>
        <nav aria-label="主要導覽" className="flex flex-col gap-1">
          {links.map((link) => {
            const active = isActive(pathname, link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-accent-soft text-accent"
                    : "text-muted hover:bg-accent-soft hover:text-foreground"
                }`}
              >
                <span aria-hidden="true">{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>
      </aside>

      <nav
        aria-label="主要導覽"
        className="fixed inset-x-0 bottom-0 z-10 flex border-t border-border bg-card md:hidden"
      >
        {links.map((link) => {
          const active = isActive(pathname, link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`flex flex-1 flex-col items-center gap-0.5 py-2 text-xs font-medium ${
                active ? "text-accent" : "text-muted"
              }`}
            >
              <span aria-hidden="true" className="text-lg">
                {link.icon}
              </span>
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
