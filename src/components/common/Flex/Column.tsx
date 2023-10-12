import styled from "@emotion/styled";
import { FlexProps } from "./type";

const Column = ({
  children,
  gap,
  justifyContent,
  alignItems,
  width,
  height,
  style,
}: FlexProps) => {
  return (
    <StyledColumn
      style={{ gap, justifyContent, alignItems, width, height, ...style }}
    >
      {children}
    </StyledColumn>
  );
};

export default Column;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
