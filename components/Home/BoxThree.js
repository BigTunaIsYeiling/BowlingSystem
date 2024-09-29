import { Box, Button, Stack } from "@mui/material";
import InputModal from "./GamesButton";
import InputModalMinit from "./GameHoursButton";
export const BoxThree = ({ bowler, frame, game, setData }) => {
  const numbers = [1, 2, 3, 4, 5, 6];
  const FramesNumbers = [3, 6, 10];
  return (
    <Box className="transparent-box" width={"95%"} padding={"8px"}>
      <Stack
        bgcolor={"#ffffff"}
        width={"100%"}
        height={"100%"}
        borderRadius={"8px"}
        direction={"row"}
        alignItems={"center"}
        padding={2}
        spacing={10}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Mode</Box>
          <Box fontWeight={"600"}>Select</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box fontWeight={"500"}>By Minutes</Box>
            <InputModalMinit />
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box fontWeight={"500"}>Games</Box>
            <InputModal game={game} setdata={setData} />
          </Stack>
        </Stack>
        <Stack direction={"column"} alignItems={"flex-start"} spacing={2}>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box fontWeight={"500"}>Bowler</Box>
            {numbers.map((num, index) => (
              <Button
                sx={{
                  backgroundColor: num == bowler ? "#4892BA" : "white",
                  color: "black",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: num == bowler ? "#4892BA" : "white",
                    boxShadow: 4,
                  },
                  paddingX: 5,
                }}
                size="large"
                key={index}
                onClick={() => {
                  setData((prev) => {
                    return { ...prev, bowler: num };
                  });
                }}
              >
                <Box fontWeight={"600"} fontSize={"22px"}>
                  {num}
                </Box>
              </Button>
            ))}
          </Stack>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box fontWeight={"500"}>Frames</Box>
            {FramesNumbers.map((num, index) => (
              <Button
                sx={{
                  backgroundColor: num == frame ? "#4892BA" : "white",
                  color: "black",
                  boxShadow: 3,
                  "&:hover": {
                    backgroundColor: num == frame ? "#4892BA" : "white",
                    boxShadow: 4,
                  },
                  paddingX: 5,
                }}
                size="large"
                key={index}
                onClick={() => {
                  setData((prev) => {
                    return { ...prev, frame: num };
                  });
                }}
              >
                <Box fontWeight={"600"} fontSize={"22px"}>
                  {num}
                </Box>
              </Button>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};
