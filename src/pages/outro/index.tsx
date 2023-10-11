import styled from "@emotion/styled";
import { Animals, Logo, Camera } from "@/assets";
import Image from "next/image";

const Outro = () => {
  return (
    <BackGround>
      <AnimalsWrapper>
        <Image src={Animals} fill alt="" />
      </AnimalsWrapper>
      <Contents>
        <LogoWrapper>
          <Image src={Logo} fill alt="" />
        </LogoWrapper>
      </Contents>
    </BackGround>
  );
};

export default Outro;

const BackGround = styled.div`
  width: 1871px;
  height: 1000px;
  margin: 40px 0 0 22px;
  background-color: white;
  display: flex;
  align-items: center;
  padding-left: 389px;
`;

const ImageWrapper = styled.div`
  position: absolute;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;

const AnimalsWrapper = styled(ImageWrapper)`
  width: 605px;
  height: 605px;
  top: 265px;
  left: 345px;
`;

const LogoWrapper = styled(ImageWrapper)`
  position: relative;
  width: 477px;
  height: 343px;
`;

const Contents = styled.div`
  position: absolute;
  top: 359px;
  right: 277px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
`;
