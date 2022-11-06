import { Content } from "./PageProps";
import Lottie from "lottie-react";

const OnboardingContent = ({ title, subTitle, resource }: Content) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <small>{subTitle}</small>
        <Lottie
          className="image-container"
          loop={true}
          animationData={require("../assets/data/123760-cat-sneaking.json")}
        />
    </div>
  );
};

export default OnboardingContent;
