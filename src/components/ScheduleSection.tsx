import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const schedule = [
  { time: "11:00", event: "Vigsel & Dop", detail: "Samling vid Tännäs kyrka" },
  { time: "14:00", event: "Mottagning", detail: "På vallen i Fröjsön" },
];

const ScheduleSection = () => {
  return (
    <section id="schema" className="py-24 md:py-32 bg-secondary/30">
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Dagen
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
            Tidsplan
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {schedule.map((item, i) => (
            <motion.div
              key={item.time}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative flex items-start mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="hidden md:block md:w-1/2" />
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-2 border-card z-10" />
              <div className="ml-14 md:ml-0 md:w-1/2 md:px-8">
                <span className="font-display text-2xl text-primary font-medium">
                  {item.time}
                </span>
                <h3 className="font-display text-lg text-foreground mt-1">
                  {item.event}
                </h3>
                <p className="font-body text-sm text-muted-foreground mt-1">
                  {item.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
