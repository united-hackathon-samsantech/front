import styled from "@emotion/styled";
import Image from "next/image";

const categoryTags = [
  {
    title: "장소",
    tags: ["바다", "산", "놀이공원", "시내"],
  },
  {
    title: "감정",
    tags: ["행복", "즐거움", "감동", "반가움", "사랑"],
  },
  {
    title: "컨셉",
    tags: ["일러스트", "사진"],
  },
];

const FramePage = () => {
  return (
    <BackGround>
      <Main>
        <Frame />
        <Contents>
          <Title>태그 선택</Title>
          {categoryTags.map((category) => (
            <Section>
              <SectionTitle>{category.title}</SectionTitle>
              <Tags>
                {category.tags.map((tag) => (
                  <Tag>{tag}</Tag>
                ))}
              </Tags>
            </Section>
          ))}
        </Contents>
      </Main>
    </BackGround>
  );
};

export default FramePage;

const BackGround = styled.div`
  width: 1871px;
  height: 1000px;
  margin: 22px 0 0 22px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const Main = styled.div`
  display: flex;
  gap: 74px;
`;

const Frame = styled.div`
  width: 473px;
  height: 787px;
  background-color: gray;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 44px;
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
`;

const Title = styled.h1`
  font-size: 48px;
  color: #000;
  font-weight: 700;
  letter-spacing: -2.4px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const SectionTitle = styled.span`
  color: #f76687;
  font-family: Gmarket Sans TTF;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.div`
  display: flex;
  padding: 12px 47px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  border: 2px solid #aaa;

  color: #676767;
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
`;
