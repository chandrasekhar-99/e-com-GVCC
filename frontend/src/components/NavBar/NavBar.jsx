import { useState } from "react";
import {
  NavBarContainer,
  Logo,
  Hamburger,
  OverlayMenu,
  OverlayItem,
  CloseBtn,
  Menu,
  MenuItem
} from "./NavBar.styles";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBarContainer>
        <Logo>Vistora</Logo>

        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>Visitors</MenuItem>
          <MenuItem>Reports</MenuItem>
          <MenuItem>Admin Login</MenuItem>
        </Menu>

        <Hamburger onClick={() => setOpen(true)}>☰</Hamburger>
      </NavBarContainer>

      <OverlayMenu open={open}>
        <CloseBtn onClick={() => setOpen(false)}>×</CloseBtn>

        <OverlayItem>Home</OverlayItem>
        <OverlayItem>Visitors</OverlayItem>
        <OverlayItem>Reports</OverlayItem>
        <OverlayItem>Admin Login</OverlayItem>
      </OverlayMenu>
    </>
  );
};

export default NavBar;
