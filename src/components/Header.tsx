import { useLocale } from "../providers/LocaleProvider";

export function Header() {
  const { locale, setLocale, t } = useLocale();
  return (
    <header className="w-full bg-[#EEF8E9]">
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-lg md:text-xl font-semibold tracking-tight">
          {t("common.name")}
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#works" className="hover:underline">{t("common.works")}</a>
          <a href="#contact" className="hover:underline">{t("common.contact")}</a>
          <select
            aria-label={t("common.language")}
            className="ml-1 rounded-md px-2 py-1 bg-white"
            value={locale}
            onChange={(e) => setLocale(e.target.value as "en" | "ja")}
          >
            <option value="en">{t("common.english")}</option>
            <option value="ja">{t("common.japanese")}</option>
          </select>
        </nav>
      </div>
    </header>
  );
}
