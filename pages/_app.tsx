import "styles/globals.css";
import { MantineProvider } from "@mantine/core";
// core styles are required for all packages
import "@mantine/core/styles.css";
// Notification styles
import "@mantine/notifications/styles.css";
import type { AppProps } from "next/app";
import theme from "theme";
import { SWRConfig } from "swr";
import api from "@/api";
import UserProvider from "@/context/UserProvider";
import LoginCheckProvider from "@/context/LoginCheckProvider";
import { Notifications } from "@mantine/notifications";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        refreshInterval: 5000,
        fetcher: api,
      }}
    >
      <MantineProvider theme={theme}>
        <Notifications />
        <LoginCheckProvider>
          <UserProvider>
            <Component {...pageProps} />
          </UserProvider>
        </LoginCheckProvider>
      </MantineProvider>
    </SWRConfig>
  );
}
