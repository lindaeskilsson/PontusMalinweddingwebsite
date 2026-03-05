import { motion } from "framer-motion";
import heroImage from "@/assets/background.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-10 text-center text-primary-foreground px-4"
      >
        <p className="font-body text-lg tracking-[0.3em] uppercase mb-4 opacity-90">
          Vi gifter oss
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6 italic">
          Malin & Pontus
        </h1>
        <p className="font-body text-lg tracking-[0.3em] uppercase mb-4 opacity-90">
          Jag blir döpt
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium mb-6 italic">
          Henning Harry Eskilsson
        </h1>
        <div className="w-20 h-px bg-primary-foreground/60 mx-auto mb-6" />
        <p className="font-body text-xl md:text-2xl tracking-wide opacity-90">
          4 Juli 2026
        </p>
        <p className="font-body text-lg mt-2 opacity-80">
          Tännäs, Härjedalen
        </p>
        <motion.a
          href="#osa"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="inline-block mt-10 px-8 py-3 border border-primary-foreground/60 text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:bg-primary-foreground/10 transition-colors"
        >
          OSA
        </motion.a>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-5 h-8 border-2 border-primary-foreground/50 rounded-full flex justify-center pt-1">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-primary-foreground/70 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
