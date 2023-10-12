import styled from "@emotion/styled";
import Image from "next/image";

const Logo = () => (
  <LogoWrapper>
    <Image src="/Logo.png" alt="logo" fill />
  </LogoWrapper>
);

export default Logo;

const LogoWrapper = styled.div`
  width: 282px;
  height: 125px;
  position: absolute;
  bottom: 40px;
  right: 44px;
`;
