import styled from "@emotion/styled";
import colors from "../../styles/colors";

export const MainContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${colors.primary01};
`;

export const InnerContainer = styled.main`
  width: 500px;
  max-width: 500px;
  padding: 70px 0px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  background: ${colors.secondary01};
  gap: 40px;
  position: relative;
`;

export const TextContainer = styled.div`
  gap: 24px;
  display: flex;
  flex-direction: column;
`;
export const AdviseNumber = styled.p`
  font-size: 13px;
  text-align: center;
  line-height: 135%;
  font-weight: bolder;
  letter-spacing: 4px;
  color: ${colors.secondary03};
`;
export const Advise = styled.p`
  font-size: 28px;
  width: 400px;
  text-align: center;
  line-height: 135%;
  font-weight: bolder;
  letter-spacing: 4px;
  color: ${colors.secondary02};
`;
export const Button = styled.button`
  width: 64px;
  display: flex;
  align-items: center;
  height: 64px;
  justify-content: center;
  border: none;
  border-radius: 50%;
  position: absolute;
  bottom: -15px;
  background-color: ${colors.secondary03};
  &:hover {
    box-shadow: 0px 10px 20px #53ffaa;
  }
`;
