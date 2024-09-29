"use client";
import FirstRow from "@/components/Bills/FirstRow";
import BorderlessTable from "@/components/Bills/Table";
import { Stack } from "@mui/material";
import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const BILLS_URL = "http://localhost:3000/bills";
export default function Page() {
  const { data, error } = useSWR(BILLS_URL, fetcher);

  if (error) return <div>Error loading data</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Stack
      justifyContent={"center"}
      alignItems={"center"}
      height={"100vh"}
      width={"100vw"}
    >
      <Stack
        padding={2}
        direction={"column"}
        width={"90%"}
        height={"90%"}
        sx={{ backgroundColor: "#2E4056", borderRadius: 2 }}
        spacing={3}
      >
        <FirstRow />
        <BorderlessTable
          data={data.data}
          total={data.total}
          turnover={data.turnover}
        />
      </Stack>
    </Stack>
  );
}
