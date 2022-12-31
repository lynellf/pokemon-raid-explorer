import { MantineProvider, AppShell, Header } from "@mantine/core";
import Appbar from "components/Appbar";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <AppShell header={<Appbar />}>
        <Component {...pageProps} />
      </AppShell>
    </MantineProvider>
  );
}

export default MyApp;
