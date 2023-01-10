import { Header, Title } from "@mantine/core";
import styled from "styled-components";

const Brand = styled(Title)`
  padding: 0 1rem;
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

function toggleModal(setOpen, _event) {
  setOpen((current) => !current);
}
