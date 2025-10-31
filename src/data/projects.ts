export const projects = [
  {
    id: "restaurant",
    title: { en: "Local Restaurant Website", ja: "飲食店向けWebサイト" },
    oneLiner: {
      en: "Clear menu, hours, access, and contacts.",
      ja: "メニュー・営業時間・アクセス・お問い合わせ。",
    },
    links: [
      { label: "Demo", url: "https://bistro-demosite.vercel.app/" },
      { label: "GitHub", url: "https://github.com/shimizu611/bistro_demosite" },
    ],
  },
  {
    id: "anywhere-todo",
    title: { en: "Anywhere-Todo", ja: "Anywhere-Todo" },
    oneLiner: {
      en: "Task management from anywhere (MERN/TS).",
      ja: "どこからでも使えるタスク管理（MERN/TS）",
    },
    links: [
      { label: "Demo", url: "https://anywhere-todo-client.vercel.app/" },
      { label: "GitHub", url: "https://github.com/shimizu611/anywhere-todo-client" },
    ],
  },
] as const;
