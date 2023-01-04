import { MantineProvider, AppShell } from "@mantine/core";
import Appbar from "components/Appbar";

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div id="appContent">
        <AppShell header={<Appbar />}>
          <Component {...pageProps} />
        </AppShell>
      </div>
    </MantineProvider>
  );
}

export default MyApp;
