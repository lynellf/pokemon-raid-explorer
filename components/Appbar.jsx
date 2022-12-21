import { useState } from "react";
import { Header, Modal, Button, Title } from "@mantine/core";
import { curry } from "lodash";
import styled from "styled-components";
import MyTeam from "components/MyTeam";

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
`;

export default function Appbar() {
  const [isOpen, setOpen] = useState(false);
  const handleClick = curry(toggleModal);
  const toggleModalOnClick = handleClick(setOpen);

  return (
    <>
      <Header height={50}>
        <FlexContainer>
          <Title>Raid Explorer</Title>
          <div>
            <Button onClick={toggleModalOnClick}>My Team</Button>
          </div>
        </FlexContainer>
      </Header>
      <Modal
        title={<Title>My Team</Title>}
        onClose={toggleModalOnClick}
        opened={isOpen}
        fullScreen
      >
        <MyTeam />
      </Modal>
    </>
  );
}

function toggleModal(setOpen, _event) {
  setOpen((current) => !current);
}
