import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS } from "@/lib/business";

const DURATION_MS = 1800;

export const IntroLoader = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setVisible(false), DURATION_MS);
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  // Allow scroll once loader fully exits
  useEffect(() => {
    if (!visible) {
      const t = setTimeout(() => {
        document.body.style.overflow = "";
      }, 700);
      return () => clearTimeout(t);
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro-loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-cream"
          aria-hidden
          role="presentation"
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-sans font-extrabold text-4xl md:text-5xl tracking-[0.22em] text-ink uppercase"
            >
              {BUSINESS.shortName}
            </motion.div>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: DURATION_MS / 1000 - 0.3, ease: "easeInOut" }}
              style={{ transformOrigin: "left center" }}
              className="h-px w-40 md:w-56 bg-brand"
            />

            <motion.div
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-xs uppercase tracking-[0.3em] text-muted-ink"
            >
              Beauty Studio
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
