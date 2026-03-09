import styled from "styled-components";
import { PrimaryButton } from "../Button/Button.tsx";

// Extends another styled component from a different file.
// Fiber resolves to Badge's styled wrapper → PrimaryButton's styled wrapper → StyledButton.
// Three layers of styled component wrapping.
const BadgeWrapper = styled.span<{ $color?: string }>`
  display: inline-flex;
  align-items: center;
  padding: 2px ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.radii.full};
  font-size: 12px;
  font-weight: 500;
  background: ${(props) => props.$color ?? props.theme.colors.primary}22;
  color: ${(props) => props.$color ?? props.theme.colors.primary};
`;

// A button that looks like a badge — extends PrimaryButton from another file
export const BadgeButton = styled(PrimaryButton)`
  font-size: 12px;
  padding: 2px ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.radii.full};
`;

export function Badge({
  children,
  color,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return <BadgeWrapper $color={color}>{children}</BadgeWrapper>;
}
