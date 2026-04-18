import { create } from "zustand";

const useBookingStore = create((set) => ({
  selectedDate: new Date(),
  selectedTime: "",
  selectedService: "",
  patientInfo: {
    fullName: "",
    email: "",
    phone: "",
    reason: "",
  },

  setSelectedDate: (date) => set({ selectedDate: date }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setSelectedService: (service) => set({ selectedService: service }),

  setPatientInfo: (field, value) =>
    set((state) => ({
      patientInfo: {
        ...state.patientInfo,
        [field]: value,
      },
    })),

  resetBooking: () =>
    set({
      selectedDate: new Date(),
      selectedTime: "",
      selectedService: "",
      patientInfo: {
        fullName: "",
        email: "",
        phone: "",
        reason: "",
      },
    }),
}));

export default useBookingStore;
