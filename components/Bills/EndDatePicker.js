import React, { useState } from "react";
import { Box, Dialog, DialogContent } from "@mui/material";
import DatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

export default function EndDatePickerBox({ EndDate, SetEndDate }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleDateChange = (date) => {
    SetEndDate(date);
    setOpen(false);
  };

  // Format the selected date as YYYY-MM-DD
  const formattedDate = EndDate ? format(EndDate, "yyyy-M-d") : "";

  return (
    <>
      <Box
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          padding: "20px",
          cursor: "pointer",
        }}
        color={"white"}
        onClick={handleOpen}
      >
        {/* Display formatted date */}
        {formattedDate || "Select a Date"}
      </Box>

      {/* Dialog to show DatePicker */}
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <DatePicker
            selected={EndDate}
            onChange={handleDateChange}
            dateFormat="yyyy-M-d" // DatePicker will display the date in this format
            inline
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
