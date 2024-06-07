import styled from "styled-components";
import { ScrollAnimationContainer } from "../animation/ScrollAnimationContainer";

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 70%;
  height: auto;
`;

export default function LogoScreen() {
  return (
    <ScrollAnimationContainer animationClass="fade-in-15">
      <FullScreen>
        <Img src="logo.png"></Img>
      </FullScreen>
    </ScrollAnimationContainer>
  );
}
