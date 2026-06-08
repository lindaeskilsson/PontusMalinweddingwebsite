import { motion } from "framer-motion";
import { MapPin, Bus, Shirt, Info } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const infoCards = [
  {
    icon: MapPin,
    title: "Boende",
    type: "links",
    content: [
      { name: "Tännäskröket Camping & Lägenheter", url: "https://tannaskroket.se" },
      { name: "Eriksgårdens Fjällhotell", url: "https://eriksgarden.se" },
      { name: "Hotell Funäsdalen", url: "https://hotellfunasdalen.se" },
      { name: "Skoogs Logi Lägenheter", url: "https://skoogslogi.se" },
    ],
  },
  {
    icon: Bus,
    title: "Transport",
    type: "text",
    content:
      "Bussbolaget Härjedalingen kör mellan Stockholm och Funäsdalen och stannar även i Tännäs. Närmaste flygplats är Härjedalen Sveg Airport, cirka 1,5–2 timmar från Tännäs med bil.",
  },
  {
    icon: Shirt,
    title: "Klädsel",
    type: "text",
    content:
      "Vi önskar kavaj och klänning. Ni behöver inte följa klädkoden strikt, men vi uppskattar om ni klär er festligt. Har ni en folkdräkt i garderoben får ni mer än gärna bära den i kyrkan",
  },
  {
    icon: Info,
    title: "Övrigt",
    type: "list",
    content: [
      "Hålla tal? Kontakta Linda eller Kristoffer på mejl: eskilsson.linda@hotmail.se / kristoffer.saengsee.eskilsson@gmail.com",
      "Dryck bjuder vi på endast till maten – utöver det får man ta med själv.",
      "Vi vill inte att ni fotar och filmar i kyrkan utan bara njuter av nuet. Vi har en fotograf som kommer att både filma och fota, som ni får tillgång till senare.",
    ],
  },
];

const lastIndex = infoCards.length - 1;

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
              className={
                i === lastIndex
                  ? "bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-3"
                  : "bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              }
            >
              <card.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-display text-xl mb-3 text-foreground">
                {card.title}
              </h3>

              {card.type === "text" && (
                <p className="font-body text-muted-foreground leading-relaxed text-sm">
                  {card.content as string}
                </p>
              )}

              {card.type === "links" && (
                <ul className="mt-2 space-y-2 text-sm">
                  {(card.content as { name: string; url: string }[]).map((place) => (
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
              )}

              {card.type === "list" && (
                <ul className="mt-2 space-y-3 text-sm text-left">
                  {(card.content as string[]).map((item, idx) => (
                    <li key={idx} className="font-body text-muted-foreground leading-relaxed flex gap-2">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoSection;