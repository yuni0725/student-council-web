import styled from "styled-components";
import { FadeIn } from "./animation";
import { useScrollAnimation } from "./useScrollAnimation";

type PropsType = {
  children: React.ReactNode;
  animationClass: string;
};

const Wrapper = styled.div`
  &.fade-in-05 {
    animation: ${FadeIn} 0.5s linear;
  }
  &.fade-in-10 {
    animation: ${FadeIn} 1s linear;
  }
  &.fade-in-15 {
    animation-delay: 200ms;
    animation: ${FadeIn} 1.5s linear;
  }

  margin-bottom: 5vh;
`;

export const ScrollAnimationContainer = ({
  children,
  animationClass,
}: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Wrapper ref={ref} className={isInViewport ? animationClass : ""}>
      {children}
    </Wrapper>
  );
};
