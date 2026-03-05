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
    content: [
      {
        name: "Tännäskröket Camping & Lägenheter",
        url: "https://tannaskroket.se",
      },
      {
        name: "Eriksgårdens Fjällhotell",
        url: "https://eriksgarden.se",
      },
      {
        name: "Hotell Funäsdalen",
        url: "https://hotellfunasdalen.se",
      },
      {
        name: "Skoogs Logi Lägenheter",
        url: "https://skoogslogi.se",
      },
    ],
  },
  {
    icon: Bus,
    title: "Transport",
    content:
      "Bussbolaget Härjedalingen kör mellan Stockholm och Funäsdalen och stannar även i Tännäs. Närmaste flygplats är Härjedalen Sveg Airport, cirka 1,5–2 timmar från Tännäs med bil.",
  },
  {
    icon: Shirt,
    title: "Klädsel",
    content:
      "Vi önskar kavaj och klänning. Tänk sommarfest – fint men bekvämt! Ni behöver inte följa klädkoden strikt, men vi uppskattar om ni klär er festligt.",
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
              {Array.isArray(card.content) ? (
  <ul className="mt-2 space-y-2 text-sm">
    {card.content.map((place) => (
      <li key={place.name}>
        <a
          href={place.url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-primary underline underline-offset-4 hover:opacity-70"
        >
          {place.name}
        </a>
      </li>
    ))}
  </ul>
) : (
  <p className="font-body text-muted-foreground leading-relaxed text-sm">
    {card.content}
  </p>
)}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
