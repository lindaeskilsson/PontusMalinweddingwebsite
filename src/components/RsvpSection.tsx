import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const RsvpSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    diet: "",
    allergies: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.attending) {
      toast.error("Fyll i namn och om du kommer eller inte.");
      return;
    }
    setSubmitted(true);
    toast.success("Tack för ditt svar!");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <section id="osa" className="py-24 md:py-32 bg-card">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-lg mx-auto px-6 text-center"
        >
          <h2 className="font-display text-4xl italic text-foreground mb-4">
            Tack!
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Vi har tagit emot ditt svar. Vi ses{" "}
            {formData.attending === "yes" ? "den 15 augusti!" : "förhoppningsvis snart!"}
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="osa" className="py-24 md:py-32 bg-card">
      <div className="max-w-lg mx-auto px-6">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-3">
            OSA
          </p>
          <h2 className="font-display text-4xl md:text-5xl italic text-foreground mb-4">
            Kan du komma?
          </h2>
          <p className="font-body text-muted-foreground">
            Vänligen svara senast den 31 Maj 2026
          </p>
        </motion.div>

        <motion.form
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <label className="block font-body text-sm text-foreground mb-2">
              Namn *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="Ditt fullständiga namn"
              maxLength={100}
            />
          </div>

          <div>
            <label className="block font-body text-sm text-foreground mb-2">
              E-post
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              placeholder="din@epost.se"
              maxLength={255}
            />
          </div>

          <div>
            <label className="block font-body text-sm text-foreground mb-4">
              Kommer du? *
            </label>
            <div className="flex gap-4">
              {[
                { value: "yes", label: "Ja, jag kommer!" },
                { value: "no", label: "Tyvärr, jag kan inte" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() =>
                    setFormData({ ...formData, attending: option.value })
                  }
                  className={`flex-1 py-3 px-4 border rounded font-body text-sm transition-colors ${
                    formData.attending === option.value
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-background text-foreground border-border hover:border-primary/50"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {formData.attending === "yes" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="space-y-6"
            >
              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Antal gäster
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  {[1, 2, 3, 4].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "person" : "personer"}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Matpreferenser
                </label>
                <input
                  type="text"
                  name="diet"
                  value={formData.diet}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Vegetarisk, vegan, etc."
                  maxLength={200}
                />
              </div>

              <div>
                <label className="block font-body text-sm text-foreground mb-2">
                  Allergier
                </label>
                <input
                  type="text"
                  name="allergies"
                  value={formData.allergies}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="Nötter, gluten, laktos, etc."
                  maxLength={200}
                />
              </div>
            </motion.div>
          )}

          <div>
            <label className="block font-body text-sm text-foreground mb-2">
              Meddelande till brudparet
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full px-4 py-3 bg-background border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              placeholder="Skriv gärna en hälsning..."
              maxLength={500}
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase hover:opacity-90 transition-opacity rounded"
          >
            Skicka svar
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default RsvpSection;
