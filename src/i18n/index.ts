import { createI18n } from "vue-i18n";
import { useStorage } from "@vueuse/core";
import EN from "./en/index";
import CN from "./cn/index";

const messages = {
  cn: { ...CN },
  en: { ...EN },
};

const lang = useStorage("LANG", "cn");

const i18n = createI18n({
  messages,
  locale: lang.value,
  legacy: false,
  globalInjection: true,
});

export default i18n;
