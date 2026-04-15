import { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "../Styles/booking-calendar.css";

const BookingCalendar = ({ selected, setSelected }) => {
  return (
    <div className="calendar-shell">
      <DayPicker
        mode="single"
        selected={selected}
        onSelect={setSelected}
        showOutsideDays
        className="booking-calendar"
        classNames={{
          months: "dp-months",
          month: "dp-month",
          month_grid: "dp-month-grid",
          weekdays: "dp-weekdays",
          weekday: "dp-weekday",
          week: "dp-week",
          day: "dp-day",
          day_button: "dp-day-button",
          caption: "dp-caption",
          caption_label: "dp-caption-label",
          nav: "dp-nav",
          button_previous: "dp-button-previous",
          button_next: "dp-button-next",
          selected: "dp-selected",
          today: "dp-today",
          outside: "dp-outside",
          disabled: "dp-disabled",
        }}
      />
    </div>
  );
};

export default BookingCalendar;
