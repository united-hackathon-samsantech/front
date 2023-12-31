import { useSetPhotoBoothStepStore } from "@/store/photoBoothStep";
import { usePhotoQuantityStore } from "@/store/photoQuantity";
import { PhotoBoothStep } from "@/types";
import styled from "@emotion/styled";
import Button from "../common/Button";
import Row from "../common/Flex/Row";
import Text from "../common/Text";

interface SelectQuantityProps {
  nextStep: PhotoBoothStep;
  prevStep: PhotoBoothStep;
}

const SelectQuantity = ({ nextStep, prevStep }: SelectQuantityProps) => {
  const [photoQuantity, setPhotoQuantity] = usePhotoQuantityStore();
  const setPhotoBoothStep = useSetPhotoBoothStepStore();

  return (
    <StyledSelectQuantity>
      <StyledHeader>
        <Button icon="PREV" onClick={() => setPhotoBoothStep(prevStep)}>
          돌아가기
        </Button>
        <Text size="28px" weight={600}>
          촬영 장수를 선택하세요
        </Text>
        <Button icon="NEXT" onClick={() => setPhotoBoothStep(nextStep)}>
          선택 완료
        </Button>
      </StyledHeader>
      <Row
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap="60px"
      >
        <StyledRadioButton
          onClick={() => setPhotoQuantity(1)}
          checked={photoQuantity === 1}
        >
          1장
        </StyledRadioButton>
        <StyledRadioButton
          onClick={() => setPhotoQuantity(2)}
          checked={photoQuantity === 2}
        >
          2장
        </StyledRadioButton>
        <StyledRadioButton
          onClick={() => setPhotoQuantity(3)}
          checked={photoQuantity === 3}
        >
          3장
        </StyledRadioButton>
        <StyledRadioButton
          onClick={() => setPhotoQuantity(4)}
          checked={photoQuantity === 4}
        >
          4장
        </StyledRadioButton>
      </Row>
    </StyledSelectQuantity>
  );
};

export default SelectQuantity;

const StyledSelectQuantity = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 24px;
  background-color: #ffffff;
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledRadioButton = styled.button<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;
  width: 250px;
  height: 100px;
  border-radius: 50px;
  color: #000000;
  font-size: 36px;
  font-weight: 500;
  background-color: ${({ checked }) => (checked ? "#F76687" : "#f2f2f2")};
  color: ${({ checked }) => (checked ? "#ffffff" : "#000000")};
  cursor: pointer;
`;
