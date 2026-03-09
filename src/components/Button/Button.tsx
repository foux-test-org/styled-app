import styled from "styled-components";
import { focusRing } from "../../theme/mixins.ts";

// Styles in the same file as the component — no companion .styled.ts or .module.css.
// Source resolution finds Button.tsx but there's no CSS file to infer.
const StyledButton = styled.button<{ $variant?: "primary" | "secondary" | "danger" }>`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: none;
  border-radius: ${(props) => props.theme.radii.md};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s;
  ${focusRing}

  background: ${(props) => {
    switch (props.$variant) {
      case "secondary":
        return props.theme.colors.secondary;
      case "danger":
        return props.theme.colors.danger;
      default:
        return props.theme.colors.primary;
    }
  }};

  color: #fff;

  &:hover {
    opacity: 0.9;
  }
`;

// Extending a styled component — PrimaryButton wraps StyledButton.
// Fiber walk sees PrimaryButton wrapper, needs to resolve through to base.
export const PrimaryButton = styled(StyledButton)`
  font-weight: 600;
  padding: ${(props) => props.theme.spacing.md} ${(props) => props.theme.spacing.lg};
`;

export function Button({
  variant = "primary",
  children,
  ...props
}: {
  variant?: "primary" | "secondary" | "danger";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  );
}
