import { Dispatch, SetStateAction } from "react";

type SkipButtonProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>;
};

const SkipButton = ({ handleOpen }: SkipButtonProps) => {
  const modalOpen = () => handleOpen(true);

  return (
    <button className="buttons" onClick={modalOpen}>시작하기</button>
  );
};

export default SkipButton;
