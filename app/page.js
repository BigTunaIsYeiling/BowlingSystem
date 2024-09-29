"use client";
import { BoxFour } from "@/components/Home/BoxFour";
import { BoxOne } from "@/components/Home/BoxOne";
import { BoxThree } from "@/components/Home/BoxThree";
import { BoxTwo } from "@/components/Home/BoxTwo";
import { Stack } from "@mui/material";
import { useState } from "react";
export default function Home() {
  const [data, setData] = useState({
    lane: 1,
    game: "",
    frame: null,
    bowler: null,
    paymode: null,
  });
  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100vw"}
    >
      <Stack
        padding={6}
        alignItems={"center"}
        justifyContent={"center"}
        direction={"column"}
        width={"100%"}
        spacing={2}
      >
        <BoxOne data={data} setData={setData} />
        <BoxTwo paymode={data.paymode} setData={setData} />
        <BoxThree
          bowler={data.bowler}
          frame={data.frame}
          game={data.game}
          setData={setData}
        />
        <BoxFour data={data} />
      </Stack>
    </Stack>
  );
}
