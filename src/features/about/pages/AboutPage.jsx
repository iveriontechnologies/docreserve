import React from "react";
import { GraduationCap, Stethoscope } from "lucide-react";
import { assets } from "../../../assets/images/assets";

const AboutPage = () => {
  return (
    <div className="bg-[var(--surface-container-lowest)]">

      {/* HERO */}
      <section className="container mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-12 py-16">

        <div className="relative">
          <div className="rounded-3xl overflow-hidden bg-gray-100">
            <img
              src={assets.heroImage}
              alt="Dr. Jane Smith"
              className="w-full h-[520px] object-cover object-top"
            />
          </div>

          <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm px-6 py-5 rounded-2xl shadow-xl max-w-[260px]">
            <p className="text-green-600 text-xs font-semibold tracking-wider">
              ● ACTIVE PRACTICE
            </p>
            <h3 className="text-2xl font-bold mt-1">15+ Years</h3>
            <p className="text-xs text-gray-500 mt-1 leading-snug">
              of clinical excellence in primary care and internal medicine.
            </p>
          </div>
        </div>

        <div className="max-w-xl px-2 lg:px-6">
          <p className="text-sm tracking-[0.25em] text-[var(--primary)] font-semibold uppercase">
            The Clinical Curator
          </p>

          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3 leading-tight">
            Dr. Jane Smith
          </h1>

          <p className="mt-6 text-[var(--on-surface-variant)] leading-relaxed">
            Medicine is more than a series of appointments; it is a partnership in
            health. Dr. Jane Smith founded DocReserve with the vision of returning
            the focus to the patient.
          </p>

          <p className="mt-4 text-[var(--on-surface-variant)] leading-relaxed">
            By combining evidence-based clinical rigor with a compassionate approach,
            she helps patients navigate medical journeys with clarity.
          </p>

          <p className="mt-6 italic font-medium text-gray-700">
            "Care that listens, precision that heals."
          </p>
        </div>
      </section>

      {/* EDUCATION + EXPERTISE */}
      <section className="container mx-auto py-20 grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 bg-[#f5f7fb] p-10 rounded-3xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100">
              <GraduationCap className="text-blue-600" size={18} />
            </div>
            <h3 className="text-xl font-bold">Education & Training</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs tracking-widest text-blue-600 font-semibold uppercase">
                Medical School
              </p>
              <h4 className="font-semibold mt-2">Johns Hopkins University</h4>
              <p className="text-sm text-gray-500">Doctor of Medicine (MD)</p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-blue-600 font-semibold uppercase">
                Residency
              </p>
              <h4 className="font-semibold mt-2">
                Mayo Clinic College of Medicine
              </h4>
              <p className="text-sm text-gray-500">
                Internal Medicine Specialization
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-blue-600 font-semibold uppercase">
                Fellowship
              </p>
              <h4 className="font-semibold mt-2">Stanford Health Care</h4>
              <p className="text-sm text-gray-500">
                Preventative & Lifestyle Medicine
              </p>
            </div>

            <div>
              <p className="text-xs tracking-widest text-blue-600 font-semibold uppercase">
                Board Certification
              </p>
              <h4 className="font-semibold mt-2">ABIM Certified</h4>
              <p className="text-sm text-gray-500">
                American Board of Internal Medicine
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white p-10 rounded-3xl shadow-xl flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/20 mb-6">
              <Stethoscope size={18} />
            </div>

            <h3 className="text-xl font-bold mb-6">Expertise Areas</h3>

            <ul className="space-y-3 text-sm">
              <li>• Chronic Disease Management</li>
              <li>• Preventative Screenings</li>
              <li>• Integrative Wellness Plans</li>
              <li>• Geriatric Specialty Care</li>
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-white/20 text-sm text-white/80">
            Recognized as Top Physician 2021, 2022, 2023
          </div>
        </div>
      </section>

      {/* CLINICAL PHILOSOPHY */}
      <section className="bg-[#f5f6f8] py-28">
        <div className="container mx-auto px-4 text-center">

          <p className="text-xs tracking-[0.35em] text-green-700 font-semibold uppercase">
            Our Ethos
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-gray-900">
            The Clinical Philosophy
          </h2>

          <div className="w-16 h-[3px] bg-green-700 mx-auto mt-5 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 text-left">

            {[
              {
                title: "Curated Attention",
                desc: "We reject the \"conveyor belt\" model of medicine. Every consultation is long-form, ensuring no symptom is overlooked and every question is answered."
              },
              {
                title: "Seamless Accessibility",
                desc: "Top-tier healthcare shouldn't be a maze. We use modern digital integration to ensure booking, records, and follow-ups are frictionless for every patient."
              },
              {
                title: "Evidence First",
                desc: "Warmth is backed by world-class science. We leverage the latest clinical research to build health strategies that are as rigorous as they are personalized."
              }
            ].map((item, i) => (
              <div key={i} className="relative pt-28">

                {/* BIG NUMBER ON TOP */}
                <span className="absolute -top-12 left-0 text-[80px] font-extrabold text-gray-200">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* CONTENT BELOW */}
                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f3f4f6] py-20">
        <div className="container mx-auto px-4">
          <div className="bg-[#e9eaec] rounded-3xl py-16 px-6 md:px-12 text-center shadow-sm">

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
              Ready for a different kind of healthcare?
            </h2>

            <p className="mt-4 text-gray-600 max-w-xl mx-auto">
              Join the hundreds of patients who have found a higher standard of
              care with Dr. Jane Smith.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">

              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium shadow-md hover:scale-105 transition">
                Book Your First Visit
              </button>

              <button className="px-6 py-3 rounded-xl bg-white text-gray-800 font-medium shadow-sm hover:bg-gray-100 transition">
                View Services
              </button>

            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
