import right_arrow from "./right_arrow.png";
import general_consultation from "./general_consultaion_icon.png";
import chronic_care from "./chronic_care_icon.png";
import phone_icon from "./phone.png";
import email_icon from "./email_icon.png";
import clock_icon from "./clock_icon.png";
import location_icon from "./location.png";
import select_service_icon from "./booking_select_service.png";
import personal_info_icon from "./personal_info_icon.png";
import book_summary_service_icon from "./book_summary_service.png";
import booking_summary_calender_icon from "./booking_summary_calender_icon.png";
import booking_summary_time_icon from './booking_summary_time_icon.png'

export const icons = {
  right_arrow,
  clock_icon,
  select_service_icon,
  personal_info_icon,
  book_summary_service_icon,
  booking_summary_calender_icon,
  booking_summary_time_icon,
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

export const time_slots = [
  { time: "9:00 AM", isAvailable: true, isBooked: false },
  { time: "10:00 AM", isAvailable: false, isBooked: false },
  { time: "11:00 AM", isAvailable: true, isBooked: true },
  { time: "12:00 PM", isAvailable: true, isBooked: false },
  { time: "1:00 PM", isAvailable: true, isBooked: false },
  { time: "2:00 PM", isAvailable: true, isBooked: false },
  { time: "3:00 PM", isAvailable: true, isBooked: false },
  { time: "4:00 PM", isAvailable: false, isBooked: true },
  { time: "5:00 PM", isAvailable: true, isBooked: false },
];
