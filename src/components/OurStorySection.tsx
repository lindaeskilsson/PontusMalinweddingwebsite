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
            DVår gemensamma historia tog sin början i Tännäs vintern 2020, och sedan dess har vi haft förmånen att dela livets alla stora stunder tillsammans.
             Efter ett oförglömligt frieri på en alptopp 2022 och ankomsten av vår efterlängtade son 2025, vill vi nu fira familjen och framtiden.
          </p>
      
          <p>
            Det är med stor glädje vi bjuder in er till en dag i kärlekens tecken, där vi förenar vårt bröllop med dopet av vår son. 
            Vi har valt en plats som har en speciell betydelse för oss, och vi hoppas att ni vill göra oss sällskap och skapa nya minnen tillsammans med oss.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
