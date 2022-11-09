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
      <input
        className="checkbox"
        type="checkbox"
        checked={isLargeLetter}
        onChange={toggleSwitch}
      />
      <label htmlFor="checkbox">
        <span className="onbtn"></span>
        <span className="ofbtn"></span>
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
