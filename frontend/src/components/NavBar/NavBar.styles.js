import styled from "styled-components";

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 60px;
  padding: 0 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.69);
  backdrop-filter: blur(8px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
`;

export const Logo = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  font-weight: 300;
  cursor: pointer;
`;

export const Hamburger = styled.div`
  font-size: 2.3rem;
  cursor: pointer;
  user-select: none;

  @media (min-width: 769px) {
    display: none;
  }
`;


export const OverlayMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: #111111d6;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  transition: transform 0.4s ease;
  z-index: 3000;
`;

export const OverlayItem = styled.div`
  font-size: 2rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    color: #b5b5b5;
    transform: scale(1.08);
  }
`;

export const CloseBtn = styled.div`
  position: absolute;
  top: 25px;
  right: 30px;
  font-size: 3rem;
  cursor: pointer;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  cursor: pointer;
  font-size: 1.1rem;

  &:hover {
    color: #aaa;
  }
`;
