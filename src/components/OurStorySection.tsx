import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const OurStorySection = () => {
  return (
    <section id="var-historia" className="py-24 md:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div variants={fadeIn} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Vår historia
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-8">
            Hur vi träffades
          </h2>
          <Heart className="w-6 h-6 text-accent mx-auto mb-8" />
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 text-muted-foreground font-body leading-relaxed text-lg"
        >
          <p>
            Det var i Tännäs vintern 2019 som våra vägar möttes för första gången. 
            Sedan dess har livet tagit oss på en fantastisk resa tillsammans.
          </p>
          <p>
            År 2022 friade Pontus på en alptopp, och 2025 fick vi vår älskade son.
          </p>
          <p>
            Nu vill vi fira allt detta tillsammans med er -
            ß både vårt bröllop och dopet av vår son, på en plats som betyder mycket för oss.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
