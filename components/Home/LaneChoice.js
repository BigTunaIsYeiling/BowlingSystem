import React, { useState } from "react";
import { Box, Menu, MenuItem } from "@mui/material";

const DropdownMenu = ({ lane, setData }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const Lanes = [1, 2, 3, 4, 5, 6];

  // Handle click to open the menu
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Box fontWeight={"600"} sx={{ cursor: "pointer" }} onClick={handleClick}>
        Lane {lane}
      </Box>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {Lanes.map((lane, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              setData((prev) => {
                return { ...prev, lane: lane };
              });
              return handleClose();
            }}
          >
            Lane {lane}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default DropdownMenu;
