import { useLocale } from "../providers/LocaleProvider";

export function Profile() {
  const { t } = useLocale();
  return (
    <section className="flex max-w-3xl mb-20 mx-auto my-auto items-center justify-center border rounded-xl border-gray-400">
      {/* left-side */}
      <div className="w-1/5 flex-none px-4 ">
        <img
          src="/images/my-portforio-photo1.jpeg"
          alt="My portrait"
          className="w-xl px-4 mx-4 h-auto object-contain shadow-1g rounded-full"
        />
      </div>

      {/* right-side */}
      <div className="flex-1 flex flex-col px-15">
        {/* hero-title */}
        <h1 className="pt-4 text-gray-600 text-lg">{t("profile.me")}</h1>
        {/* subtitle */}
        <div className="py-4 text-1g">{t("profile.greet")}</div>
        <div className="mt-6 flex items-center justify-center gap-3">
        </div>
      </div>
    </section>
  );
}
