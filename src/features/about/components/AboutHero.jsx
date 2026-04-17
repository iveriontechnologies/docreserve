import { assets } from "../../../assets/images/assets";

const AboutHero = () => {
  return (
    <section className="container mx-auto grid lg:grid-cols-2 gap-12 py-16 items-center">

      {/* IMAGE */}
      <div className="relative">

        <div className="rounded-[var(--radius-xl)] overflow-hidden bg-[var(--surface-container-low)]">
          <img
            src={assets.heroImage}
            alt="Doctor"
            className="w-full h-[520px] object-cover object-top"
          />
        </div>

        {/* FLOAT CARD */}
        <div className="absolute bottom-6 right-6 bg-[var(--glass-surface)] backdrop-blur-[var(--glass-blur)] px-6 py-5 rounded-[var(--radius-lg)] shadow-[var(--shadow-ambient-sm)]">

          <p className="text-[var(--tertiary)] text-label-sm font-semibold uppercase tracking-wider">
            Active Practice
          </p>

          <h3 className="text-headline-md font-bold text-[var(--on-surface)]">
            15+ Years
          </h3>

          <p className="text-body-lg text-[var(--on-surface-variant)]">
            Clinical excellence in primary care
          </p>

        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-col justify-center">

        <p className="text-label-sm text-[var(--primary)] uppercase tracking-wider">
          The Clinical Curator
        </p>

        <h1 className="text-display-lg font-bold text-[var(--on-surface)] mt-3 leading-[var(--leading-display)]">
          Dr. Jane Smith
        </h1>

        <p className="text-body-lg text-[var(--on-surface-variant)] mt-6 leading-[var(--leading-body)]">
          Medicine is more than a series of appointments; it is a partnership
          in health. We provide personalized care experiences for every patient.
        </p>

        <p className="italic mt-4 text-[var(--on-surface-variant)]">
          "Care that listens, precision that heals."
        </p>

      </div>

    </section>
  );
};

export default AboutHero;