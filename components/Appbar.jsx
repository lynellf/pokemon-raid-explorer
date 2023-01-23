import { Header } from "@mantine/core";
import styled from "styled-components";

const Brand = styled.h1`
  padding: 0 1rem;
  margin: 0;
`;

export default function Appbar() {
  return (
    <>
      <Header height={50}>
        <Brand>Raid Explorer</Brand>
      </Header>
    </>
  );
}
