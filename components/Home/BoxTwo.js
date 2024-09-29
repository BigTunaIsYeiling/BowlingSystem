import { Box, Button, Stack } from "@mui/material";
export const BoxTwo = ({ paymode, setData }) => {
  const PayChoice = ["Pay Now", "Pay Later"];
  return (
    <Box className="transparent-box" width={"95%"} padding={"8px"}>
      <Stack
        bgcolor={"#f7f7ff"}
        width={"100%"}
        height={"100%"}
        borderRadius={"8px"}
        direction={"row"}
        alignItems={"center"}
        padding={4}
        spacing={10}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Pay</Box>
          <Box fontWeight={"600"}>Mode</Box>
        </Stack>
        {PayChoice.map((choice, index) => (
          <Button
            key={index}
            sx={{
              backgroundColor: paymode == choice ? "#4892BA" : "white",
              color: "black",
              boxShadow: 3,
              "&:hover": {
                backgroundColor: paymode == choice ? "#4892BA" : "white",
                boxShadow: 4,
              },
              paddingX: 5,
            }}
            size="large"
            onClick={() => {
              setData((prev) => {
                return { ...prev, paymode: choice };
              });
            }}
          >
            <Box fontWeight={"600"} fontSize={"22px"}>
              {choice}
            </Box>
          </Button>
        ))}
      </Stack>
    </Box>
  );
};
