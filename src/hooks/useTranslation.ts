import { useLocale } from "../providers/LocaleProvider";
export function useTranslation() {
  const { t } = useLocale();
  return { t };
}
