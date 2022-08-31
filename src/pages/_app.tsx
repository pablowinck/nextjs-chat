import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import React from "react";

const MyApp: AppType = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

export default MyApp;
