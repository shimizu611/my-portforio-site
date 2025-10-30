import { useLocale } from "../providers/LocaleProvider";
import { motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";

const fadeUp:Variants = {
  hidden: { opacity: 0, y: 24 },
  show:   { 
    opacity: 1, y: 0, 
    transition:{
      duration: 1.2,
      ease: "easeOut" // 自然な原則
    } as Transition
  }
};

const stagger = {
  show: {
    transition: {
      duration: 0.8,
      staggerChildren: 0.5,
    }
  }
};

export function Hero() {
  const { t } = useLocale();
  return (
    <motion.section
      className="flex flex-col md:flex-row max-w-5xl mx-auto px-4 py-16 text-left"
      variants={stagger}
      initial="hidden"
      animate="show"
    >
      {/* left-side */}
      <motion.div className="flex-1 flex flex-col justify-center px-8" variants={fadeUp}>
        {/* hero-title */}
        <h1 className="text-gray-600 text-4xl">{t("hero.greet", { name: t("common.name") })}</h1>
        {/* subtitle */}
        <motion.h2 className="my-10 text-3xl md:text-3xl font-bold">{t("hero.title")}</motion.h2>
        <motion.p className="mt-3 text-gray-500">{t("hero.subtitle")}</motion.p>
        <motion.p className="mt-3 text-gray-500">{t("hero.stack")}</motion.p>
        <motion.div className="mt-6 flex items-center justify-center gap-3">
        </motion.div>
      </motion.div>
      {/* right-side */}
      <motion.div
        className="flex-1 bg-[#D6DF96] flex items-center justify-center rounded-4xl"
        variants={fadeUp}
      >
        <motion.img
          src="/images/my-portrait1.png"
          alt="My portrait"
          className="w-3/5 mt-8 h-auto object-contain shadow-mg"
        />


      </motion.div>
    </motion.section>
  );
}
