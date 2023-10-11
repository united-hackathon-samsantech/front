import styled from "@emotion/styled";
import Image from "next/image";

const Logo = () => (
  <LogoWrapper>
    <Image src="/Logo.png" alt="logo" fill />
  </LogoWrapper>
);

export default Logo;

const LogoWrapper = styled.div`
  width: 322px;
  height: 145px;
  position: absolute;
  bottom: 50px;
  right: 54px;
`;
