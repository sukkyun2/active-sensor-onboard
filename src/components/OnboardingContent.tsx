import { Content } from "./PageProps";
// import animationData from "../assets/data/123760-cat-sneaking.json";
import Lottie from "react-lottie";

const OnboardingContent = ({ title, subTitle, resource }: Content) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <small>{subTitle}</small>
      <div className="image-container">
        <Lottie
          options={options(require("../assets/data/123760-cat-sneaking.json"))}
        />
      </div>
    </div>
  );
};

const options = (animationData: any) => ({
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
});

export default OnboardingContent;
