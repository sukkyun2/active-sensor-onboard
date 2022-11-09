import Lottie from "lottie-react";
import styled, { css } from "styled-components";

const OnboardingContent = ({
  title,
  subTitle,
  resource,
  isLargeLetter,
}: ContentProps) => {
  return (
    <div className="content">
      <Title isLargeLetter={isLargeLetter}>{title}</Title>
      <SubTitle subTitle={subTitle} isLargeLetter={isLargeLetter} />
      <Lottie
        className="image-container"
        loop={true}
        animationData={require("../assets/data/123760-cat-sneaking.json")}
      />
    </div>
  );
};

const SubTitle = ({ subTitle, isLargeLetter }: SubTitleProps) => {
  const description = subTitle.split("\n")[0];
  const keyWord = subTitle.split("\n")[1];

  return (
    <div>
      <Description>
        {description} {isLargeLetter ? <br /> : null}
        <Keyword isLargeLetter={isLargeLetter}>{keyWord}</Keyword>
      </Description>
    </div>
  );
};

type ContentProps = {
  title: string;
  subTitle: string;
  resource: string;
  isLargeLetter: boolean;
};

type SubTitleProps = {
  subTitle: string;
  isLargeLetter: boolean;
};

const Title = styled.h2<{ isLargeLetter: boolean }>`
  font-size: ${(props) => (props.isLargeLetter ? "3.2rem" : "2.8rem")};
  font-family: Apple SD Gothic NeoSB;
  color: #4aa3ab;
`;

const Description = styled.p`
  font-size: 1.8rem;
  font-family: Apple SD Gothic NeoR;
`;

const Keyword = styled.small<{ isLargeLetter: boolean }>`
  font-size: ${(props) => (props.isLargeLetter ? "2rem" : "1.8rem")};
  font-family: Apple SD Gothic NeoB;
`;

export default OnboardingContent;
