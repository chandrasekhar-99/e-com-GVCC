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
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <NavBarContainer>
        <Link to="/"><Logo>Lumero</Logo></Link>

        <Menu>
          <Link to="/"><MenuItem>Home</MenuItem></Link>
          <MenuItem>Visitors</MenuItem>
          <MenuItem>Reports</MenuItem>
          <Link to="/admin-login"><MenuItem>Admin Login</MenuItem></Link>
        </Menu>

        <Hamburger onClick={() => setOpen(true)}>☰</Hamburger>
      </NavBarContainer>

      <OverlayMenu open={open}>
        <CloseBtn onClick={() => setOpen(false)}>×</CloseBtn>

        <Link to="/"><OverlayItem>Home</OverlayItem></Link>
        <OverlayItem>Visitors</OverlayItem>
        <OverlayItem>Reports</OverlayItem>
        <Link to="/admin-login"><OverlayItem>Admin Login</OverlayItem></Link>
      </OverlayMenu>
    </>
  );
};

export default NavBar;
