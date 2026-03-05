import { Heart } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-12 bg-primary text-primary-foreground text-center">
      <p className="font-display text-2xl italic mb-2">Malin & Pontus</p>
      <p className="font-body text-sm opacity-80 flex items-center justify-center gap-2">
        Med kärlek <Heart className="w-3 h-3 fill-current" /> 4 Juli 2026
      </p>
    </footer>
  );
};

export default FooterSection;
