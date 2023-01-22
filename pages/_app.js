import styled from "styled-components";
import { MantineProvider } from "@mantine/core";
import Appbar from "components/Appbar";
import Navbar from "components/Navbar";
import pixelsToRem from "utils/pixelsToRem";

const AppShell = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: ${pixelsToRem(120)} 1fr;

  @media (min-width: 768px) {
    grid-template-columns: ${pixelsToRem(200)} 1fr;
    grid-template-rows: 100%;
  }
`;

const Container = styled.div`
  padding: 0 1rem;
`;

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Appbar />
      <main>
        <AppShell>
          <aside>
            <Navbar />
          </aside>
          <Container>
            <Component {...pageProps} />
          </Container>
        </AppShell>
      </main>
    </MantineProvider>
  );
}

export default MyApp;
