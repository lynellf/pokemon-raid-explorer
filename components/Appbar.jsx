import { Header, Title } from "@mantine/core";
import styled from "styled-components";

const Brand = styled(Title)`
  padding: 0 1rem;
  margin: 0;
`;

export default function Appbar() {
  return (
    <>
      <Header height={50}>
        <Brand order={1}>Raid Explorer</Brand>
      </Header>
    </>
  );
}
