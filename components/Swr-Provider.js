"use client";
import { SWRConfig } from "swr";
export const SWRProvider = ({ children }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
      }}
    >
      {children}
    </SWRConfig>
  );
};
