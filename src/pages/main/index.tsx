import { useEffect, useState } from "react";
import {
  Advise,
  AdviseNumber,
  Button,
  InnerContainer,
  MainContainer,
  TextContainer,
} from "./styles";
import Devider from "../../assets/icons/pattern-divider-desktop.svg";
import Dice from "../../assets/icons/icon-dice.svg";

const Main = () => {
  const [advice, setAdvice] = useState("");
  const [adviceId, setAdviceId] = useState(null);

  const fetchAdvice = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      const data = await response.json();
      setAdvice(data.slip.advice);
      setAdviceId(data.slip.id);
    } catch (error) {
      setAdvice("Oops! Something went wrong.");
      setAdviceId(null);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <MainContainer>
      <InnerContainer>
        <TextContainer>
          {adviceId && <AdviseNumber>Advice #{adviceId}</AdviseNumber>}
          <Advise>"{advice}"</Advise>
        </TextContainer>
        <Devider />
        <Button onClick={fetchAdvice}>
          <Dice />
        </Button>
      </InnerContainer>
    </MainContainer>
  );
};

export default Main;
