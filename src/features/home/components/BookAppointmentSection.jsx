import React from "react";

const BookAppointmentSection = () => {
  return (
    <div className="bg-[var(--primary)]">
      <div className="container mx-auto text-center py-10">
        <h2 className="text-headline-md font-bold text-white">
          Ready to Book Your Appointment?
        </h2>
        <p className="mt-4 text-body-lg text-white ">
          Experience personalized healthcare with Dr. Smith. Book your
          appointment today and take the first step towards better health.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[var(--primary)] font-semibold rounded-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default BookAppointmentSection;
