import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from "react";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import SearchChannelContextProvider from "../context/SearchChannelContext";

const darkTheme = createTheme({
  type: "dark",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <NextUIProvider theme={darkTheme}>
          <SearchChannelContextProvider>
            <Component {...pageProps} />
          </SearchChannelContextProvider>
        </NextUIProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
