import styled from "@emotion/styled";
import Button from "../Button";

interface HeaderProps {
  prevBtnText: string;
  nextBtnText: string;
  prevStep?: () => void;
  nextStep?: () => void;
  title: string;
}

const Header = ({
  prevBtnText,
  nextBtnText,
  title,
  prevStep,
  nextStep,
}: HeaderProps) => {
  return (
    <StyledHeader>
      {prevStep && (
        <Button onClick={prevStep} icon="prev">
          {prevBtnText}
        </Button>
      )}
      <StyledTitle>{title}</StyledTitle>
      {nextStep && (
        <Button onClick={nextStep} icon="next">
          {nextBtnText}
        </Button>
      )}
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const StyledTitle = styled.span`
  color: #000000;
  font-size: 32px;
  font-weight: bold;
  line-height: normal;
`;
