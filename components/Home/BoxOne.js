import { Box, Stack } from "@mui/material";
import DropdownMenu from "./LaneChoice";

export const BoxOne = ({ data, setData }) => {
  return (
    <Box className="transparent-box" width={"95%"} padding={"8px"}>
      <Stack
        bgcolor={"#e0f7ff"}
        width={"100%"}
        height={"100%"}
        borderRadius={"8px"}
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={4}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Lane</Box>
          <Box fontWeight={"600"}>Status</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <DropdownMenu lane={data.lane} setData={setData} />
          <Box fontWeight={"500"}>Free</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Pay Mode</Box>
          <Box fontWeight={"500"}>Pay Now</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Free/Remaining</Box>
          <Box fontWeight={"500"}>Remaining Frames : 2</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Consumption Mode</Box>
          <Box fontWeight={"500"}>2 P 10 Frames</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Current amount</Box>
          <Box fontWeight={"500"}>2RMB</Box>
        </Stack>
      </Stack>
    </Box>
  );
};
