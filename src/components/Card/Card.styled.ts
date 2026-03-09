import styled from "styled-components";
import { flexColumn } from "../../theme/mixins.ts";

// Separate .styled.ts file — analogous to .module.css companion.
// Source resolution should identify Card.styled.ts as the style source.
export const CardWrapper = styled.div`
  ${flexColumn}
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.lg};
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

export const CardHeader = styled.div`
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  font-weight: 600;
  font-size: 16px;
`;

export const CardBody = styled.div`
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
`;

export const CardFooter = styled.div`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.lg};
  border-top: 1px solid ${(props) => props.theme.colors.border};
  background: ${(props) => props.theme.colors.surface};
`;
