import React from "react";
import styled from "@emotion/styled";

interface ProgressBarProps {
  available: number;
  max: number;
}

const ProgressBar = ({ available, max }: ProgressBarProps) => {
  const progressWidth = (available * 10) / max;

  return (
    <StyledProgressBar>
      <StyledProgress width={100 - progressWidth} />
    </StyledProgressBar>
  );
};

export default ProgressBar;

const StyledProgressBar = styled.div`
  width: 70%;
  height: 30px;
  background-color: #dedede;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 60px;
  overflow: hidden;
`;

const StyledProgress = styled.div<{ width: number }>`
  width: ${({ width }) => width}%;
  height: 30px;
  padding: 0;
  text-align: center;
  background-color: #f76687;
  color: #111;
`;
