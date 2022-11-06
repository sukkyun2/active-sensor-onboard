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
    <div className="switch" data-isOn={isLargeLetter} onClick={toggleSwitch}>
      <motion.div className="handle" layout transition={spring}></motion.div>
    </div>
  );
};

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};

export default LetterToggleButton;
