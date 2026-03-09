import styled from "styled-components";
import { Card } from "../components/Card/Card.tsx";
import { flexColumn } from "../theme/mixins.ts";

const PageWrapper = styled.div`
  ${flexColumn}
  gap: ${(props) => props.theme.spacing.lg};
  max-width: 800px;
  margin: 0 auto;
  padding: ${(props) => props.theme.spacing.lg};
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`;

export function About() {
  return (
    <PageWrapper>
      <Title>About</Title>
      <Card title="About This App">
        <p>
          This is a test project for styled-components source resolution.
          All styles are defined using styled-components — no CSS Modules or Tailwind.
        </p>
      </Card>
    </PageWrapper>
  );
}
