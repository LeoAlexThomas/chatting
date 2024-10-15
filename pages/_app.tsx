import "styles/globals.css";
import { MantineProvider } from "@mantine/core";
// core styles are required for all packages
import "@mantine/core/styles.css";
import type { AppProps } from "next/app";
import theme from "theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  );
}
