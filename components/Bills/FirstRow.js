import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import StartDatePickerBox from "./StartDatePicker";
import EndDatePickerBox from "./EndDatePicker";
import { useRouter } from "next/navigation";
import { mutate } from "swr";
import { format } from "date-fns";
import toast from "react-hot-toast";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export default function FirstRow() {
  const router = useRouter();
  const firstdayofyear = new Date(new Date().getFullYear(), 0, 1);
  const lastdayofyear = new Date(new Date().getFullYear(), 11, 31);
  const [startDate, setStartDate] = useState(firstdayofyear);
  const [endDate, setEndDate] = useState(lastdayofyear);
  const BILLS_URL = "http://localhost:3000/bills";
  const updateData = async () => {
    const url = `${BILLS_URL}/?startDate=${format(
      startDate,
      "yyyy-MM-dd"
    )}&endDate=${format(endDate, "yyyy-MM-dd")}`;
    const newData = await fetcher(url);
    if (!newData.data) {
      return toast.error(newData.message);
    }
    mutate(BILLS_URL, newData, {
      revalidate: false,
    });
  };
  return (
    <Stack direction={"row"} alignItems={"center"} spacing={3}>
      <Box color={"white"}>Date From</Box>
      <StartDatePickerBox startDate={startDate} SetStartDate={setStartDate} />
      <Box color={"white"}>Date To</Box>
      <EndDatePickerBox EndDate={endDate} SetEndDate={setEndDate} />
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
        onClick={updateData}
      >
        <Box fontWeight={"600"} fontSize={"22px"}>
          Check
        </Box>
      </Button>
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
      >
        <Box fontWeight={"600"} fontSize={"22px"}>
          Check Today&apos;s Bills
        </Box>
      </Button>
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
      >
        <Box fontWeight={"600"} fontSize={"22px"}>
          Export
        </Box>
      </Button>
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
        onClick={router.back}
      >
        <Box fontWeight={"600"} fontSize={"22px"}>
          Back
        </Box>
      </Button>
    </Stack>
  );
}
