import { createContext, useContext, useEffect, useMemo, useState } from "react";
import en from "../i18n/en";
import ja from "../i18n/ja";
import { DEFAULT_LOCALE, type Locale } from "../i18n";


type Ctx = {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (path: string, vars?: Record<string, string | number>) => string;
};

const LocaleContext = createContext<Ctx | null>(null);
const dicts = { en, ja } as const;

const get = (o: any, path: string) =>
  path.split(".").reduce((a, k) => (a ? a[k] : undefined), o);

const tpl = (s: string, vars?: Record<string, string | number>) =>
  vars ? s.replace(/\{\{(\w+)\}\}/g, (_, k) => String(vars[k] ?? "")) : s;

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>(() => {
    const saved = localStorage.getItem("locale") as Locale | null;
    return saved ?? DEFAULT_LOCALE;
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const dict = useMemo(() => dicts[locale], [locale]);
  const t = (path: string, vars?: Record<string, string | number>) =>
    tpl(typeof get(dict, path) === "string" ? get(dict, path) : path, vars);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale]);

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
