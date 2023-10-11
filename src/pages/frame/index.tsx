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

const colors = [
  {
    name: "red",
    color: "#F54141",
  },
  {
    name: "yellow",
    color: "#FFCA0E",
  },
  {
    name: "green",
    color: "#55C720",
  },
  {
    name: "blue",
    color: "#1589F3",
  },
  {
    name: "pupple",
    color: "#6F3DFF",
  },
  {
    name: "pink",
    color: "#F773DA",
  },
  {
    name: "black",
    color: "#000000",
  },
  {
    name: "white",
    color: "#ffffff",
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
          <Section>
            <SectionTitle>색상</SectionTitle>
            <Colors>
              {colors.map((color) => (
                <Color color={color.color} />
              ))}
            </Colors>
          </Section>
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
  padding-left: 389px;
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
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
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
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
  font-size: 32px;
  font-weight: 500;
  letter-spacing: -1.6px;
`;

const Tags = styled.div`
  display: flex;
  gap: 10px;
`;

const Tag = styled.button`
  @font-face {
    font-family: "GmarketSansMedium";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }
  font-family: "GmarketSansMedium";
  background-color: white;
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

const Color = styled.button<{ color: string }>`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background-color: ${({ color }) => color};
`;

const Colors = styled.div`
  display: flex;
  gap: 12px;
`;
