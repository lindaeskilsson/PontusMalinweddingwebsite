import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

type FormData = {
  name: string;
  email: string;
  attending: "" | "yes" | "no";
  guests: string; // keep as string for <select>
  diet: string;
  allergies: string;
  message: string;
};

const RsvpSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    attending: "",
    guests: "1",
    diet: "",
    allergies: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const endpoint =
    import.meta.env.VITE_RSVP_ENDPOINT ?? "https://formspree.io/f/mdawnpdg";

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const setAttending = (value: "yes" | "no") => {
    setFormData((prev) => ({
      ...prev,
      attending: value,
      // if guest says "no", reset fields that only matter for "yes"
      ...(value === "no"
        ? { guests: "1", diet: "", allergies: "" }
        : {}),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.attending) {
      toast.error("Fyll i namn och om du kommer eller inte.");
      return;
    }

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const payload = {
        ...formData,
        guests: Number(formData.guests),
        submittedAt: new Date().toISOString(),
        source: "wedding-site",
      };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        // Try to read Formspree error details
        let msg = "Kunde inte skicka just nu. Testa igen.";
        try {
          const data = await res.json();
          if (data?.error) msg = data.error;
        } catch {
          // ignore
        }
        throw new Error(msg);
      }

      setSubmitted(true);
      toast.success("Tack för ditt svar!");
    } catch (err) {
      console.error(err);
      toast.error(err instanceof Error ? err.message : "Något gick fel.");
    } finally {
      setIsSubmitting(false);
    }
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
            {formData.attending === "yes"
              ? "den 4 Juli!"
              : "förhoppningsvis snart!"}
          </p>

          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setFormData({
                name: "",
                email: "",
                attending: "",
                guests: "1",
                diet: "",
                allergies: "",
                message: "",
              });
            }}
            className="mt-8 inline-flex items-center justify-center px-6 py-3 border border-border rounded font-body text-sm hover:border-primary/50 transition-colors"
          >
            Skicka ett till svar
          </button>
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
              autoComplete="name"
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
              autoComplete="email"
            />
          </div>

          <div>
            <label className="block font-body text-sm text-foreground mb-4">
              Kommer du? *
            </label>

            <div className="flex gap-4">
              {[
                { value: "yes" as const, label: "Ja, jag kommer!" },
                { value: "no" as const, label: "Tyvärr, jag kan inte" },
              ].map((option) => (
                <button
                  key={option.value}
                  type="button"
                  onClick={() => setAttending(option.value)}
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
            disabled={isSubmitting}
            className={`w-full py-4 bg-primary text-primary-foreground font-body text-sm tracking-[0.2em] uppercase transition-opacity rounded ${
              isSubmitting ? "opacity-60 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {isSubmitting ? "Skickar..." : "Skicka svar"}
          </button>

          <p className="text-xs text-muted-foreground text-center">
            (Skickas via Formspree)
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default RsvpSection;