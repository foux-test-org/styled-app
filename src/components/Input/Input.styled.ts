import styled from "styled-components";
import { flexColumn, focusRing } from "../../theme/mixins.ts";

export const InputWrapper = styled.div`
  ${flexColumn}
  gap: ${(props) => props.theme.spacing.xs};
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: ${(props) => props.theme.colors.textMuted};
`;

// attrs pattern — adds default type attribute.
// Creates another wrapper layer in the fiber tree.
export const StyledInput = styled.input.attrs<{ $hasError?: boolean }>(
  (props) => ({
    type: props.type || "text",
  })
)`
  padding: ${(props) => props.theme.spacing.sm} ${(props) => props.theme.spacing.md};
  border: 1px solid ${(props) =>
    props.$hasError ? props.theme.colors.danger : props.theme.colors.border};
  border-radius: ${(props) => props.theme.radii.md};
  font-size: 14px;
  outline: none;
  transition: border-color 0.15s;
  ${focusRing}

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: ${(props) => props.theme.colors.danger};
`;
