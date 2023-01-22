import styled from "styled-components";
import Link from "next/link";
import { Text } from "@mantine/core";

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  a {
    text-decoration: none;
    display: inline-block;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }

  @media (min-width: 768px) {
    flex-direction: column;
  }
`;

const NavContainer = styled.nav`
  border-bottom: 1px solid #e9ecef;

  @media (min-width: 768px) {
    height: 100%;
    border-right: 1px solid #e9ecef;
  }
`;

const NavItem = ({ label, href }) => (
  <li>
    <Link href={href}>
      <Text size="lg" align="left">
        {label}
      </Text>
    </Link>
  </li>
);

export default function Navbar() {
  return (
    <NavContainer aria-label="side navigation">
      <NavMenu>
        <NavItem href="/" label="Matchups" />
        <NavItem href="/my-team" label="My Team" />
      </NavMenu>
    </NavContainer>
  );
}
