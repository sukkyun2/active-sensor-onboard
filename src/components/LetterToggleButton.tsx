import { motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

type LetterToggleProps = {
  isLargeLetter: boolean;
  setLargetLetter: Dispatch<SetStateAction<boolean>>;
};

const LetterToggleButton = ({
  isLargeLetter,
  setLargetLetter,
}: LetterToggleProps) => {
  const toggleSwitch = () => setLargetLetter(!isLargeLetter);

  return (
    <div className="toggle">
      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={isLargeLetter}
          onChange={toggleSwitch}
        />
        <div>
        <span className="onbtn">큰글씨</span>
        <span className="ofbtn">보통글씨</span>
        </div>
      </label>
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default LetterToggleButton;
