import { useLocale } from "../providers/LocaleProvider";
import { projects } from "../data/projects";

export function Works() {
  const { t, locale } = useLocale();
  return (
    <section id="works" className="max-w-5xl mx-auto px-4 pt-10 pb-40">
      <h2 className="text-xl font-semibold mb-4">{t("works.heading")}</h2>
      <div className="grid gap-4 md:grid-cols-2">
        {projects.map(p => (
          <article key={p.id} className="border rounded-lg p-4">
            <h3 className="font-semibold">{p.title[locale]}</h3>
            <p className="text-gray-600 mt-1">{p.oneLiner[locale]}</p>
            <div className="mt-3 flex gap-3">
              {p.links.map(l => (
                <a key={l.url} href={l.url} target="_blank" rel="noreferrer" className="underline">
                  {l.label}
                </a>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
