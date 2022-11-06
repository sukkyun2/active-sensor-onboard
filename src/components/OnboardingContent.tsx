import { Content } from "./PageProps";
import Lottie from "lottie-react";

const OnboardingContent = ({ title, subTitle, resource }: Content) => {
  const description = subTitle.split("\n")[0]
  const highLightKeyWord = subTitle.split("\n")[1]

  return (
    <div className="content">
      <h2>{title}</h2>
      <small>{description}</small>
      <p>{highLightKeyWord}</p>
        <Lottie
          className="image-container"
          loop={true}
          animationData={require("../assets/data/123760-cat-sneaking.json")}
        />
    </div>
  );
};

export default OnboardingContent;
