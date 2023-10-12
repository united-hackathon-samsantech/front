import { CSSProperties, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  size: CSSProperties["fontSize"];
  weight?: CSSProperties["fontWeight"];
  color?: CSSProperties["color"];
}

const Text = ({
  children,
  size,
  weight = 600,
  color = "#000000",
}: TextProps) => {
  return (
    <span style={{ fontSize: size, fontWeight: weight, color }}>
      {children}
    </span>
  );
};

export default Text;
