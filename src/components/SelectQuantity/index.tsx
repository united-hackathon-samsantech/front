import { FunnelStep } from "@/types";
import styled from "@emotion/styled";
import { useState } from "react";
import Button from "../common/Button";
import Row from "../common/Flex/Row";
import Text from "../common/Text";

interface SelectQuantityProps extends FunnelStep {}

const SelectQuantity = ({}: SelectQuantityProps) => {
  const [quantity, setQuantity] = useState("1");

  return (
    <StyledSelectQuantity>
      <StyledHeader>
        <Button icon="PREV">돌아가기</Button>
        <Text size="28px" weight={600}>
          촬영 장수를 선택하세요
        </Text>
        <Button icon="NEXT">선택 완료</Button>
      </StyledHeader>
      <Row
        width="100%"
        height="100%"
        alignItems="center"
        justifyContent="center"
        gap="60px"
      >
        <StyledRadioButton
          onClick={() => setQuantity("1")}
          checked={quantity === "1"}
        >
          1장
        </StyledRadioButton>
        <StyledRadioButton
          onClick={() => setQuantity("2")}
          checked={quantity === "2"}
        >
          2장
        </StyledRadioButton>
        <StyledRadioButton
          onClick={() => setQuantity("3")}
          checked={quantity === "3"}
        >
          3장
        </StyledRadioButton>
        <StyledRadioButton
          onClick={() => setQuantity("4")}
          checked={quantity === "4"}
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
  padding: 16px;
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
  width: 150px;
  border-radius: 50px;
  color: #000000;
  font-size: 28px;
  font-weight: 500;
  background-color: ${({ checked }) => (checked ? "#F76687" : "#f2f2f2")};
  color: ${({ checked }) => (checked ? "#ffffff" : "#000000")};
  cursor: pointer;
`;
