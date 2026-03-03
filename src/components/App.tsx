import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ------------------ PRELOADER ------------------ */
const Preloader: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] bg-white flex items-center justify-center"
    >
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
          ease: "easeInOut",
        }}
        className="w-14 h-14 rounded-full border-4 border-accent border-t-transparent"
      />
    </motion.div>
  );
};

/* ------------------ MAIN APP ------------------ */
const App: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); // loader duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="min-h-screen bg-background flex items-center justify-center"
        >
          {/* Your existing content goes here */}
          <h1 className="text-4xl font-serif text-foreground">
            Website Loaded 🚀
          </h1>
        </motion.main>
      )}
    </>
  );
};

export default App;
