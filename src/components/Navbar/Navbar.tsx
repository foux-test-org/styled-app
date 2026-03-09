import { Link, useLocation } from "react-router-dom";
import { NavWrapper, NavBrand, NavLinks, NavLink } from "./Navbar.styled.ts";

export function Navbar() {
  const location = useLocation();

  return (
    <NavWrapper>
      <NavBrand>StyledApp</NavBrand>
      <NavLinks>
        <NavLink as={Link} to="/" $active={location.pathname === "/"}>
          Home
        </NavLink>
        <NavLink as={Link} to="/about" $active={location.pathname === "/about"}>
          About
        </NavLink>
      </NavLinks>
    </NavWrapper>
  );
}
