import { css } from "styled-components";

// Shared css fragments imported by multiple components.
// Source resolution can't trace these from the DOM — they're inlined at build time.
export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

export const truncateText = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const focusRing = css`
  &:focus-visible {
    outline: 2px solid ${(props) => props.theme.colors.primary};
    outline-offset: 2px;
  }
`;
