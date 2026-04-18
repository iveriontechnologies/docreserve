import { supabase } from "../../../lib/supabase";

export const createBooking = async (bookingData) => {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .insert(bookingData)
      .select()
      .single();

    if (error) {
      throw error;
    } else {
      console.log("Data pushed successfully:", data);
    }
  } catch (error) {
    console.error("Error occurred while pushing data:", error);
  }
};


