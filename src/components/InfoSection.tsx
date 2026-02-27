import { motion } from "framer-motion";
import { MapPin, Plane, Train, Bus, Ship, Shirt } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const infoCards = [
  {
    icon: MapPin,
    title: "Boende",
    content:
      "Vi har reserverat rum på Hotel Norra Hamnen som ligger nära festlokalen. Ange kod 'BRÖLLOP2026' vid bokning. Alternativt finns det flera mysiga Airbnb-lägenheter i centrum.",
  },
  {
    icon: Plane,
    title: "Flygplats",
    content:
      "Närmaste flygplats är Göteborg Landvetter (GOT), ca 30 min med buss eller taxi till centrum.",
  },
  {
    icon: Train,
    title: "Tågstation",
    content:
      "Göteborg Centralstation ligger i hjärtat av staden. Spårvagn eller taxi tar er enkelt vidare till platsen.",
  },
  {
    icon: Ship,
    title: "Färja",
    content:
      "Stena Line trafikerar linjen Frederikshavn–Göteborg för er som kommer från Danmark.",
  },
  {
    icon: Bus,
    title: "Buss",
    content:
      "Nils Ericson Terminalen är den centrala bussterminalen. FlixBus och andra bolag har linjer hit.",
  },
  {
    icon: Shirt,
    title: "Klädsel",
    content:
      "Vi önskar kavaj och klänning. Tänk sommarfest – fint men bekvämt! Ni behöver inte följa klädkoden strikt, men vi uppskattar om ni klär er festligt. Undvik vitt.",
  },
];

const InfoSection = () => {
  return (
    <section id="information" className="py-24 md:py-32 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            Praktisk information
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground">
            Bra att veta
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {infoCards.map((card, i) => (
            <motion.div
              key={card.title}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
            >
              <card.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed text-sm">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
