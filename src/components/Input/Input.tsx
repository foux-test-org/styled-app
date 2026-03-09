import { InputWrapper, Label, StyledInput, ErrorText } from "./Input.styled.ts";

export function Input({
  label,
  error,
  ...props
}: {
  label?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <InputWrapper>
      {label && <Label>{label}</Label>}
      <StyledInput $hasError={!!error} {...props} />
      {error && <ErrorText>{error}</ErrorText>}
    </InputWrapper>
  );
}
