import { useMutation } from "@tanstack/react-query";
import { createBooking } from "../api/bookingApi";

export const useCreateBooking = () => {
  return useMutation({
    mutationFn: createBooking,
  });
};
