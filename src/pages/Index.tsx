import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import OurStorySection from "@/components/OurStorySection";
import InfoSection from "@/components/InfoSection";
import ScheduleSection from "@/components/ScheduleSection";
import RsvpSection from "@/components/RsvpSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <OurStorySection />
      <InfoSection />
      <ScheduleSection />
      <RsvpSection />
      <FooterSection />
    </div>
  );
};

export default Index;
