import { Content } from "./PageProps";
import animationData from "../assets/data/123760-cat-sneaking.json";
import Lottie from "react-lottie";

const OnboardingContent = ({ title, subTitle, image }: Content) => {
  return (
    <div className="content">
      <h3>{title}</h3>
      <small>{subTitle}</small>
      <div className="image-container">
        <Lottie options={defaultOptions}/>
      </div>
    </div>
  );
};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

export default OnboardingContent;
