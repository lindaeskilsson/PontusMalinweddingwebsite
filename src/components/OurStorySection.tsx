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
            Det var en solig eftermiddag i juni 2019 som våra vägar korsades för 
            första gången. Vi möttes på en gemensam väns sommarfest ute i skärgården 
            och det klickade direkt.
          </p>
          <p>
            Det som började med långa samtal över middag utvecklades snart till 
            promenader längs havet, delade drömmar och ett ständigt växande band. 
            Vi har rest världen runt, skrattat, gråtit och vuxit tillsammans.
          </p>
          <p>
            Nu är vi redo att ta nästa steg och vi vill inget hellre än att dela 
            denna dag med er — våra allra käraste.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default OurStorySection;
