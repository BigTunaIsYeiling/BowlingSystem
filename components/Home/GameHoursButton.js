import React, { useState } from "react";
import { Button, Modal, Box, Backdrop, Grid, Typography } from "@mui/material";

// Style for the modal content
const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 2,
  zIndex: 1301,
};

// Custom Backdrop component with blur effect
const CustomBackdrop = (props) => (
  <Backdrop
    {...props}
    sx={{
      zIndex: 1300,
      backdropFilter: "blur(8px)",
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    }}
  />
);

// Numeric keypad component with display panel
const NumberPad = ({ inputValue, onNumberClick }) => {
  const numbers = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "0",
    "Clear",
    "Enter",
  ];

  return (
    <Box sx={modalStyle}>
      {/* Display Panel */}
      <Box
        sx={{
          mb: 2,
          p: 1,
          border: "1px solid #ccc",
          borderRadius: 1,
          textAlign: "right",
          fontSize: "18px",
          minHeight: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        {inputValue || "0"}
      </Box>

      {/* Number Pad Grid */}
      <Grid container spacing={1}>
        {numbers.map((num, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => onNumberClick(num)}
            >
              {num}
            </Button>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const InputModalMinit = () => {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(""); // Value being inputted on the number pad
  const [finalValue, setFinalValue] = useState(""); // Final value to display on the button

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNumberClick = (num) => {
    if (num === "Clear") {
      setInputValue("");
    } else if (num === "Enter") {
      // Set the final value when Enter is pressed
      setFinalValue(inputValue);
      handleClose();
    } else {
      setInputValue((prev) => prev + num);
    }
  };

  return (
    <>
      <Button
        sx={{
          backgroundColor: "#ffff",
          color: "black",
          boxShadow: 3,
          "&:hover": {
            backgroundColor: "white",
            boxShadow: 4,
          },
          paddingX: 5,
        }}
        size="large"
        onClick={handleOpen}
      >
        <Box fontWeight={"600"} fontSize={"22px"}>
          {finalValue || "0" + " "} Min
        </Box>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={CustomBackdrop}
      >
        <NumberPad inputValue={inputValue} onNumberClick={handleNumberClick} />
      </Modal>
    </>
  );
};

export default InputModalMinit;
