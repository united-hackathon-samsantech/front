import IconArrowLeft from "@/assets/icons/IconArrowLeft";
import IconArrowRight from "@/assets/icons/IconArrowRight";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

type IconType = "NONE" | "NEXT" | "PREV";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconType;
  disabled?: boolean;
}

const Button = ({
  children,
  onClick,
  icon = "NONE",
  disabled = false,
  style,
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      disabled={disabled}
      icon={icon}
      style={style}
    >
      {icon === "PREV" && (
        <IconArrowLeft color="#FFFFFF" width={24} height={24} />
      )}
      {children}
      {icon === "NEXT" && (
        <IconArrowRight color="#FFFFFF" width={24} height={24} />
      )}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button<{ disabled: boolean; icon: IconType }>`
  display: flex;
  align-items: center;
  gap: 5px;
  ${({ icon }) => {
    switch (icon) {
      case "NEXT":
        return css`
          padding: 10px 10px 10px 16px;
        `;
      case "PREV":
        return css`
          padding: 10px 16px 10px 10px;
        `;
      default:
        return css`
          padding: 24px;
        `;
    }
  }};
  border-radius: 35px;
  font-size: 20px;
  font-weight: 600;
  background-color: ${({ disabled }) => (disabled ? "#C6C6C6" : "#F76687")};
  color: #ffffff;
`;
