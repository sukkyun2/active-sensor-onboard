import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PageProps } from "./PageProps";

type SkipButtonProps = {
  handleOpen: Dispatch<SetStateAction<boolean>>;
  pageProps : PageProps;
};

const SkipButton = ({ handleOpen, pageProps }: SkipButtonProps) => {
  const navigate = useNavigate();

  const modalOpen = () => handleOpen(true);
  const lastIndex = () => pageProps.index === pageProps.total - 1; 
  const handleMain = () => navigate('/main') 

  return (
    <div className="button-container">
    { lastIndex() ? 
    <StartButton onClick={handleMain}>콕뱅크 시작하기</StartButton>
    : <SkipButtons onClick={modalOpen}>건너뛰기</SkipButtons>}
    </div>
  );
};

const Button = styled.button`
  display: flex;
  height: 10vmin;
  border-radius: 2vmin;
  border: 0;
  cursor: pointer;
  font-family: Apple SD Gothic NeoSB;
  left: 0;
  bottom: 0;
  justify-content: center;
  align-items: center;
  gap: 5vmin;
  margin-top : min(10%,10px);
`
const SkipButtons = styled(Button)`
  width: 100vw;
  background-color: white;
  text-decoration: underline;
  font-size: 1.5rem;
`

const StartButton = styled(Button)`
margin-left: 16vmin;
margin-right: 16vmin;
height: 15vmin;
width: 80vw;
background-color: #2E7F86;
color : white;
font-size: 2rem;
`


export default SkipButton;
