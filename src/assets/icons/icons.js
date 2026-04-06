import right_arrow from "./right_arrow.png";
import general_consultation from "./general_consultaion_icon.png";
import chronic_care from "./chronic_care_icon.png";
import phone_icon from "./phone.png";
import email_icon from "./email_icon.png";
import clock_icon from "./clock_icon.png";
import location_icon from "./location.png";

export const icons = {
  right_arrow,
  clock_icon,
};

export const service_card = [
  {
    name: "General Consultation",
    icon: general_consultation,
    description:
      "Comprehensive health assessmentsfocused on preventative care and holistic well-being.",
  },
  {
    name: "Pediatric Care",
    icon: "",
    description: "Compassionate care for infants, children, and adolescents.",
  },
  {
    name: "Chronic Care",
    icon: chronic_care,
    description:
      "Long-term management plans for diabetes, hypertension, and more.",
  },
];

export const service_card2 = [
  {
    text: "15 +",
    text2: "Years of Experience",
    color: "cyan-300/40",
  },
  {
    text: "5k +",
    text2: "Patients Served",
    color: "emerald-300/40",
  },
];

export const contact_details = [
  {
    icon: location_icon,
    name: "Physical Address",
    detail: "1221 Medical Plaza, Suite 400 Healthcare District, NY 10012",
  },
  {
    icon: phone_icon,
    name: "Phone Number",
    detail: "+1 (555) 012-3456",
  },
  {
    icon: email_icon,
    name: "Email",
    detail: "care@docreserve.com",
  },
];
