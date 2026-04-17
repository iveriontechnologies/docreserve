const AboutPhilosophy = () => {
  const items = [
    {
      number: "01",
      title: "Curated Attention",
      desc: "We reject the \"conveyor belt\" model of medicine. Every consultation is long-form, ensuring no symptom is overlooked and every question is answered."
    },
    {
      number: "02",
      title: "Seamless Accessibility",
      desc: "Top-tier healthcare shouldn't be a maze. We use modern digital integration to ensure booking, records, and follow-ups are frictionless for every patient."
    },
    {
      number: "03",
      title: "Evidence First",
      desc: "Warmth is backed by world-class science. We leverage the latest clinical research to build health strategies that are as rigorous as they are personalized."
    }
  ];

  return (
    <section className="bg-[var(--surface-container-lowest)] py-28">
      <div className="container mx-auto">

        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-label-sm text-[var(--primary)] uppercase tracking-widest">
            Our Ethos
          </p>

          <h2 className="text-display-lg font-bold text-[var(--on-surface)] mt-4">
            The Clinical Philosophy
          </h2>

          <div className="w-16 h-[3px] bg-[var(--primary)] mx-auto mt-6 rounded-full"></div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-20">
          {items.map((item, index) => (
            <div key={index} className="relative pt-20">

              {/* BIG NUMBER */}
              <div className="absolute -top-16 left-0 text-[7rem] font-bold text-[var(--on-surface)] opacity-5 select-none leading-none">
                {item.number}
              </div>

              {/* TEXT */}
              <div className="relative z-10">
                <h3 className="text-headline-md font-bold text-[var(--on-surface)]">
                  {item.title}
                </h3>

                <p className="text-body-lg text-[var(--on-surface-variant)] mt-5 leading-[var(--leading-body)]">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutPhilosophy;