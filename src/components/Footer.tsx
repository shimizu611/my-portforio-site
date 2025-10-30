import { useLocale } from "../providers/LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  return (
    <footer id="contact" className="bg-[#EEF8E9] border-t mt-8">
      <div className="max-w-4xl mx-auto px-8 py-6 text-sm text-gray-700">
        <p className="mb-2">
          Email: <a className="underline" href="shimizu611@gmail.com">gmail</a> ·
          GitHub: <a className="underline" href="hhttps://github.com/shimizu611" target="_blank" rel="noreferrer">@ShimIno-</a>
        </p>
        <small>© {new Date().getFullYear()} {t("common.name")} 　　　　　— {t("footer.rights")}</small>
      </div>
    </footer>
  );
}
