import { useLocale } from "../providers/LocaleProvider";

export function Profile() {
  const { t } = useLocale();
  return (
    <section className="p-8 mx-auto mb-20 max-w-3xl flex flex-col md:flex-row items-center md:items-start gap-6 px-4 border border-gray-600 rounded-4xl">
      {/* left-side */}
      <div className="shrink-0 md:self-center">
        <img
          src="/images/my-portforio-photo1.jpeg"
          alt="My portrait"
          className="w-28 h-28 my-auto md:w-40 md:h-40 object-cover rounded-full shadow-lg items-center"
        />
      </div>

      {/* right-side */}
      <div className="flex-1 flex flex-col">
        {/* hero-title */}
        <h1 className="pt-4 text-gray-600 text-lg">{t("profile.me")}</h1>
        {/* subtitle */}
        <div className="py-4 text-lg">{t("profile.greet")}</div>
      </div>
    </section>
  );
}
