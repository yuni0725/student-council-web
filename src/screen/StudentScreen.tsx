import styled from "styled-components";
import { ScrollAnimationContainer } from "../animation/ScrollAnimationContainer";

const FullScreen = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Img = styled.img`
  width: 90%;
  height: auto;

  border-radius: 20px;
`;

const Content = styled.div`
  border: 2px solid black;
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function StudentScreen() {
  return (
    <ScrollAnimationContainer animationClass="fade-in-10">
      <FullScreen>
        <Img src="student.jpg"></Img>
        <Content>여기에 뭐 쓰지?</Content>
      </FullScreen>
    </ScrollAnimationContainer>
  );
}
