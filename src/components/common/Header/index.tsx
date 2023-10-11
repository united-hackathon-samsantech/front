import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import { FunnelStep } from "@/types";
import styled from "@emotion/styled";
import Button from "../Button";

interface HeaderProps extends FunnelStep {
  prevBtnText: string;
  nextBtnText: string;
  title: string;
}

const Header = ({
  prevBtnText,
  nextBtnText,
  title,
  prevStep,
  nextStep,
}: HeaderProps) => {
  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  return (
    <StyledHeader>
      {prevStep && (
        <Button onClick={() => setPhotoBoothStep(prevStep)} icon="prev">
          {prevBtnText}
        </Button>
      )}
      <StyledTitle>{title}</StyledTitle>
      {nextStep && (
        <Button onClick={() => setPhotoBoothStep(nextStep)} icon="next">
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
  font-size: 26px;
  font-weight: bold;
  line-height: normal;
`;
