import styled from "styled-components";
import { Button, PrimaryButton } from "../components/Button/Button.tsx";
import { Card } from "../components/Card/Card.tsx";
import { Input } from "../components/Input/Input.tsx";
import { Badge, BadgeButton } from "../components/Badge/Badge.tsx";
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: ${(props) => props.theme.spacing.md};
`;

const ButtonRow = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacing.sm};
  align-items: center;
`;

export function Home() {
  return (
    <PageWrapper>
      <Title>Dashboard</Title>

      {/* Badge uses shared styled component extension */}
      <ButtonRow>
        <Badge>Active</Badge>
        <Badge color="#16a34a">Healthy</Badge>
        <BadgeButton>Click Me</BadgeButton>
      </ButtonRow>

      <Grid>
        <Card title="Revenue" footer={<span>+8.2% from last month</span>}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>$12,450</span>
        </Card>
        <Card title="Users" footer={<span>+3.1% from last month</span>}>
          <span style={{ fontSize: 28, fontWeight: 700 }}>1,284</span>
        </Card>
      </Grid>

      <Card title="Quick Search">
        <Input label="Search" placeholder="Search metrics..." />
      </Card>

      <ButtonRow>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
        <Button variant="danger">Delete</Button>
        <PrimaryButton>Big Action</PrimaryButton>
      </ButtonRow>
    </PageWrapper>
  );
}
