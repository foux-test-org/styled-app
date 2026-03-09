import type { ReactNode } from "react";
import { CardWrapper, CardHeader, CardBody, CardFooter } from "./Card.styled.ts";

// Component imports styled components from companion .styled.ts file.
// Fiber walk hits CardWrapper (a styled component) before reaching Card.
export function Card({
  title,
  footer,
  children,
}: {
  title?: string;
  footer?: ReactNode;
  children: ReactNode;
}) {
  return (
    <CardWrapper>
      {title && <CardHeader>{title}</CardHeader>}
      <CardBody>{children}</CardBody>
      {footer && <CardFooter>{footer}</CardFooter>}
    </CardWrapper>
  );
}
