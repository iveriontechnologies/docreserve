import Input from "../../../components/ui/Input";
import Button from "../../../components/shared/Button";
import ContactInfo from "../components/ContactInfo";
import { contact_details } from "../../../assets/icons/icons";
import OpeningHours from "../components/OpeningHours";

const ContactPage = () => {
  return (
    <div className="py-10">
      <div className="container">
        {/* ======================Heading====================== */}
        <h2 className="text-display-lg font-bold">
          Get in <span className="text-[var(--primary)]">touch</span>
        </h2>
        <p className="text-body-lg max-w-full lg:max-w-1/2 text-[var(--on-surface-variant)] text-center sm:text-start">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book
        </p>

        {/* =======================Contact Details==================== */}
        <div className="mt-10 flex flex-col lg:flex-row gap-10">
          {/* ================Left=============== */}
          <form className="flex flex-col gap-4 bg-[var(--surface-container-lowest)] px-10 py-10 rounded-[var(--radius-xl)] w-full lg:w-1/2">
            <h3 className="text-headline-md font-medium">Send a Message</h3>
            <div className="flex justify-between items-center gap-8">
              <Input name={"First Name"} placeholder={"John"} type="text" />
              <Input name={"Last Name"} placeholder={"Doe"} type="text" />
            </div>
            <div className="flex justify-between items-center gap-8">
              <Input
                name={"Email"}
                placeholder={"john@example.com"}
                type="email"
              />
              <Input
                name={"Phone Number"}
                placeholder={"Enter you phone number"}
              />
            </div>

            <div className="flex flex-col gap-2">
              <h3>Choose a topic</h3>
              <select className="w-full border rounded-full px-4 py-2">
                <option value="">Select One</option>
                <option value="genaral">General Consultation</option>
                <option value="chronic">Chronic Disease</option>
                <option value="padritritian">Padritrician</option>
              </select>
            </div>

            <div className="w-full flex flex-col gap-2">
              <h3>Message</h3>
              <textarea
                placeholder="Type your meassages..."
                rows={"4"}
                className="rounded-lg px-2 py-2 text-body-lg border w-full"
              />
            </div>

            <Button name={"Send Message"} size="lg" />
          </form>
          {/* ================Right============== */}
          <div className="flex flex-col gap-10 md:flex-row lg:flex-col">
            {/* ==================Up-Box================= */}
            <div className="flex flex-col gap-4 bg-[var(--surface-container-low)] px-8 py-8 rounded-[var(--radius-lg)]">
              {contact_details.map((item, index) => (
                <ContactInfo
                  key={index}
                  icon={item.icon}
                  text={item.detail}
                  title={item.name}
                />
              ))}
            </div>
            {/* ==================Down-Box=============== */}
            <OpeningHours />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
