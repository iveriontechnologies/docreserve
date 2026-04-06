import { assets } from "../../../assets/images/assets";
import DoctorExperienceCard from "../../../components/ui/DoctorExperienceCard";
import { service_card2 } from "../../../assets/icons/icons";

const DoctorProfile = () => {
  return (
    <div className="bg-[var(--surface-container-lowest)] py-20">
      <div className="container flex flex-col sm:flex-row items-center justify-between py-10">
        {/* ================Image=========== */}
        <div className="pl-0 sm:pl-20">
          <div className="w-[250px] h-[250px] rotate-45 bg-[var(--primary)] rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="rotate-[-45deg] w-full h-full flex items-center justify-center">
              <img
                src={assets.heroImage}
                alt="Doctor"
                className="w-[400px] h-[400px] object-contain mt-24"
              />
            </div>
          </div>
        </div>

        {/* ================Content=========== */}

        <div className="w-full sm:w-[50%] mt-20 sm:mt-0 px-4">
          <h2 className="text-headline-md font-bold">
            Dedicated to Your Long-Term Health
          </h2>

          <p className="mt-4 text-body-lg text-[var(--on-surface-variant)]">
            Dr. Smith brings over 15 years of clinical excellence in Internal
            Medicine. She is renowned for her patient-centric approach and
            commitment to evidence-based healthcare.
          </p>

          <p className="mt-4 text-[var(--on-surface-variant)] italic text-body-lg">
            "My philosophy is simple: listen to the patient first. Understanding
            your lifestyle and concerns is the first step towards accurate
            diagnosis and effective treatment."
          </p>
          {/* ===================Experience=================== */}

          <div className="flex items-center gap-6 mt-10 ">
            {service_card2.map((item, index) => (
              <DoctorExperienceCard
                key={index}
                text={item.text}
                text2={item.text2}
                color={item.color}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
