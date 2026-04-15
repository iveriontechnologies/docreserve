import { useState } from "react";
import "react-day-picker/dist/style.css";
import BookingCalendar from "../components/BookingCalender";
import { icons, time_slots } from "../../../assets/icons/icons";
import TimeSlots from "../components/TimeSlots";
import Input from "../../../components/ui/Input";
import Button from "../../../components/shared/Button";
import BookingSummary from "../components/BookingSummary";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [patientInfo, setPatientInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  const bookingSummary = [
    {
      icon: icons.book_summary_service_icon,
      label: "Service",
      value: selectedService || "Not Selected",
    },
    {
      icon: icons.booking_summary_calender_icon,
      label: "Date",
      value: selectedDate
        ? selectedDate.toLocaleDateString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "Not Selected",
    },
    {
      icon: icons.booking_summary_time_icon,
      label: "Time",
      value: selectedTime || "Not Selected",
    },
  ];

  return (
    <div className="py-10">
      <div className="container">
        <h2 className="text-display-md font-bold text-[48px] text-center sm:text-start">
          Reserve Your Consultation
        </h2>
        <p className="text-body-lg max-w-full lg:max-w-1/2 text-[var(--on-surface-variant)] text-center sm:text-start">
          Select a preferred date and time for your clinical assessment. Our
          automated system ensures a seamless scheduling experience.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mt-10 flex flex-col lg:flex-row gap-10"
        >
          {/* =================Left======================== */}
          <div className="flex-1 bg-[var(--surface-container-lowest)] rounded-lg p-6">
            {/* ===============Calender===================== */}
            <div className="">
              <div className="flex gap-2 items-center">
                <img src={icons.select_service_icon} alt="select service" />
                <h3 className="[font-family:var(--font-manrope)] font-bold text-[20px]">
                  1. Select Service & Date
                </h3>
              </div>
              <div className="flex flex-col gap-2 my-6">
                <h3 className="text-sm font-semibold [font-family:var(--font-inter)] text-[var(--on-surface-variant)]">
                  Type of Consultation
                </h3>
                <select
                  className="w-full border-none rounded-full px-4 py-2 bg-[var(--surface-container-high)] text-sm sm:text-base font-normal [font-family:var(--font-inter)] text-[var(--on-surface-variant)]"
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                >
                  <option value="">Select One</option>
                  <option value="General Health Checkup">
                    General Health Checkup
                  </option>
                  <option value="Chronic Disease">Chronic Disease</option>
                  <option value="Pediatric">Pediatric</option>
                </select>
              </div>

              <div className="mt-10">
                <BookingCalendar
                  selected={selectedDate}
                  setSelected={setSelectedDate}
                />
              </div>
            </div>
            {/* ===============Time Slot==================== */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
              {time_slots.map((slot, index) => (
                <TimeSlots
                  key={index}
                  time={slot.time}
                  isAvailable={slot.isAvailable}
                  isBooked={slot.isBooked}
                  isSelected={selectedTime === slot.time}
                  onSelect={setSelectedTime}
                />
              ))}
            </div>
            {/* ==================Patient Info=================== */}
            <div className="mt-10 flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <img src={icons.personal_info_icon} alt="Personal Info" />
                <h3 className="[font-family:var(--font-monrope)] text-[20px] font-bold">
                  3. Patient Details
                </h3>
              </div>
              <div className="flex items-center gap-10">
                <Input
                  onChange={handleInputChange}
                  value={patientInfo.fullName}
                  placeholder={"John Doe"}
                  name={"Full Name"}
                  inputName="fullName"
                  type={"text"}
                />
                <Input
                  onChange={handleInputChange}
                  value={patientInfo.email}
                  placeholder={"john.doe@example.com"}
                  inputName="email"
                  name={"Email Address"}
                  type={"email"}
                />
              </div>
              <div className="flex items-center gap-10">
                <Input
                  onChange={handleInputChange}
                  value={patientInfo.phone}
                  placeholder={"+1 (555) 000-0000"}
                  inputName="phone"
                  name={"Phone Number"}
                  type={"tel"}
                />
                <Input
                  onChange={handleInputChange}
                  value={patientInfo.reason}
                  placeholder={"Brief Description"}
                  inputName="reason"
                  name={"Reason for Visit (Optional)"}
                  type={"text"}
                />
              </div>
            </div>
          </div>
          {/* =================Right======================= */}
          <div className="w-full lg:w-[25%] flex flex-col gap-6">
            {/* ===============Booking Summary================= */}
            <div className="bg-[var(--surface-container-highest)] rounded-lg p-6 w-full">
              <h3 className="[font-family:var(--font-monrope)] text-sm sm:text-[20px] font-semibold text-center lg:text-start">
                Booking Summary
              </h3>
              <div className="flex flex-col md:flex-row lg:flex-col justify-center lg:justify-start gap-6 mt-3">
                {bookingSummary.map((item, index) => (
                  <BookingSummary
                    key={index}
                    icon={item.icon}
                    title={item.label}
                    value={item.value}
                  />
                ))}
              </div>
              <div className="w-full flex items-center justify-center mt-3">
                <Button
                  name={"Confirm Booking"}
                  size={"lg"}
                  onClick={() => console.log("")}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingPage;
