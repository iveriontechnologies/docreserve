import AboutHero from "../components/AboutHero";
import AboutEducation from "../components/AboutEducation";
import AboutPhilosophy from "../components/AboutPhilosophy";

const AboutPage = () => {
  return (
    <div className="bg-[var(--surface)]">
      <AboutHero />
      <AboutEducation />
      <AboutPhilosophy />
    </div>
  );
};

export default AboutPage;