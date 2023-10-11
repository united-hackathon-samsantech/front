import Next from "@/assets/common/Next";
import Previous from "@/assets/common/Previous";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: "none" | "next" | "prev";
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  icon = "none",
  disabled = false,
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {icon === "prev" && <Previous />}
      {children}
      {icon === "next" && <Next />}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 20px;
  border-radius: 25px;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  background-color: ${({ disabled }) => (disabled ? "#C6C6C6" : "#F76687")};
  color: #ffffff;
`;
