import styled from "styled-components";
import { FadeIn } from "./animation";
import { useScrollAnimation } from "./useScrollAnimation";

type PropsType = {
  children: React.ReactNode;
  animationClass: string;
};

const Wrapper = styled.div`
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
