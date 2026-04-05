import React from "react";
import Hero from "../features/home/components/Hero";
import Service from "../features/home/components/Service";
import DoctorProfile from "../features/home/components/DoctorProfile";
import BookAppointmentSection from "../features/home/components/BookAppointmentSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Service />
      <DoctorProfile />
      <BookAppointmentSection />
    </div>
  );
};

export default HomePage;
