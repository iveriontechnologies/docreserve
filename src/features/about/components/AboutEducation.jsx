import { GraduationCap, Stethoscope } from "lucide-react";

const AboutEducation = () => {
  return (
    <section className="container mx-auto py-20 grid lg:grid-cols-3 gap-8">

      {/* LEFT CARD */}
      <div className="lg:col-span-2 bg-[var(--surface-container-low)] p-10 rounded-[var(--radius-xl)]">

        <div className="flex items-center gap-3 mb-8">

          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--primary-container)]">
            <GraduationCap className="text-[var(--on-primary)]" size={18} />
          </div>

          <h3 className="text-headline-md font-bold text-[var(--on-surface)]">
            Education & Training
          </h3>

        </div>

        <div className="grid md:grid-cols-2 gap-8">

          <div>
            <p className="text-label-sm text-[var(--primary)] uppercase tracking-wider">
              Medical School
            </p>
            <h4 className="font-semibold text-[var(--on-surface)]">
              Johns Hopkins University
            </h4>
          </div>

          <div>
            <p className="text-label-sm text-[var(--primary)] uppercase tracking-wider">
              Residency
            </p>
            <h4 className="font-semibold text-[var(--on-surface)]">
              Mayo Clinic
            </h4>
          </div>

          <div>
            <p className="text-label-sm text-[var(--primary)] uppercase tracking-wider">
              Fellowship
            </p>
            <h4 className="font-semibold text-[var(--on-surface)]">
              Stanford Health Care
            </h4>
          </div>

          <div>
            <p className="text-label-sm text-[var(--primary)] uppercase tracking-wider">
              Certification
            </p>
            <h4 className="font-semibold text-[var(--on-surface)]">
              ABIM Certified
            </h4>
          </div>

        </div>

      </div>

      {/* RIGHT CARD (PRIMARY GRADIENT SYSTEM) */}
      <div
        className="p-10 rounded-[var(--radius-xl)] text-[var(--on-primary)] flex flex-col justify-between shadow-[var(--shadow-ambient-sm)]"
        style={{ background: "var(--gradient-primary)" }}
      >

        <div>

          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--on-primary)]/20 mb-6">
            <Stethoscope size={18} className="text-[var(--on-primary)]" />
          </div>

          <h3 className="text-headline-md font-bold mb-6">
            Expertise
          </h3>

          <ul className="space-y-3 text-body-lg text-[var(--on-primary)]/90">
            <li>Chronic Disease Management</li>
            <li>Preventative Care</li>
            <li>Wellness Plans</li>
            <li>Specialized Care</li>
          </ul>

        </div>

        <p className="mt-6 text-sm text-[var(--on-primary)]/80">
          Recognized Top Physician
        </p>

      </div>

    </section>
  );
};

export default AboutEducation;