import { Box, Button, Stack } from "@mui/material";
import { FaPause, FaPlay, FaStop } from "react-icons/fa";
import { RiSpeedFill } from "react-icons/ri";
import { MdOutlineReplay } from "react-icons/md";
import { GoHome } from "react-icons/go";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
export const BoxFour = ({ data }) => {
  const router = useRouter();
  const AddBill = async () => {
    //check for all data values arent null or empty string
    if (
      data.lane === null ||
      data.game === null ||
      data.frame === null ||
      data.bowler === null ||
      data.paymode === null
    ) {
      return toast.error("اكمل جميع البيانات");
    }
    const res = await fetch("http://localhost:3000/bills/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success("تم اضافة الفاتورة");
      return router.push("/bill");
    } else {
      toast.error("فشل اضافة الفاتورة");
    }
  };
  return (
    <Box className="transparent-box" width={"95%"} padding={"8px"}>
      <Stack
        bgcolor={"#ffffff"}
        width={"100%"}
        height={"100%"}
        borderRadius={"8px"}
        direction={"row"}
        alignItems={"center"}
        padding={3}
        spacing={4}
      >
        <Stack direction={"column"} alignItems={"center"} spacing={2}>
          <Box fontWeight={"600"}>Lane</Box>
          <Box fontWeight={"600"}>Control</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={1}>
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
            onClick={AddBill}
          >
            <Box fontWeight={"600"} fontSize={"22px"}>
              <FaPlay />
            </Box>
          </Button>
          <Box fontWeight={"500"}>Start</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={1}>
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
              <FaPause />
            </Box>
          </Button>
          <Box fontWeight={"500"}>Pause</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={1}>
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
              <RiSpeedFill />
            </Box>
          </Button>
          <Box fontWeight={"500"}>Continue</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={1}>
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
              <FaStop />
            </Box>
          </Button>
          <Box fontWeight={"500"}>Stop</Box>
        </Stack>
        <Stack direction={"column"} alignItems={"center"} spacing={1}>
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
              <MdOutlineReplay />
            </Box>
          </Button>
          <Box fontWeight={"500"}>Restart</Box>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={2}>
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
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
              <Box fontWeight={"600"} fontSize={"18px"}>
                Add
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
              <Box fontWeight={"600"} fontSize={"18px"}>
                Print
              </Box>
            </Button>
          </Stack>
          <Stack
            direction={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
            spacing={2}
          >
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
              disabled
            >
              <Box fontWeight={"600"} fontSize={"18px"}>
                Change Lane
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
              onClick={() => {
                router.push("/bill");
              }}
            >
              <Box fontWeight={"600"} fontSize={"18px"}>
                Bill
              </Box>
            </Button>
          </Stack>
        </Stack>

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
          <Box fontWeight={"600"} fontSize={"55px"}>
            <GoHome />
          </Box>
        </Button>
      </Stack>
    </Box>
  );
};
