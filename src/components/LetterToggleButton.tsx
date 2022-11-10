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
          { isLargeLetter 
           ? <span className="onbtn">큰글씨</span>
           : <span className="ofbtn">보통글씨</span>
          }
        </div>
      </label>
    </div>
  );
};

export default LetterToggleButton;
