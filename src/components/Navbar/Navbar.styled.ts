import styled from "styled-components";
import { flexCenter } from "../../theme/mixins.ts";

export const NavWrapper = styled.nav`
  ${flexCenter}
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  background: #1a1a2e;
`;

export const NavBrand = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #fff;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
`;

export const NavLink = styled.a<{ $active?: boolean }>`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  color: ${(props) => (props.$active ? "#fff" : "#a0aec0")};
  border-radius: ${(props) => props.theme.radii.md};
  font-size: 14px;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }
`;
