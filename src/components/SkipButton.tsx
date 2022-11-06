import { Dispatch, SetStateAction } from "react";

type SkipButtonProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>;
};

const SkipButton = ({ handleOpen }: SkipButtonProps) => {
  const modalOpen = () => handleOpen(true);

  return (
    <button className="buttons" onClick={modalOpen}>건너뛰기</button>
  );
};

export default SkipButton;
