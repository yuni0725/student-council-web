import { useInView } from "react-intersection-observer";
import { Title } from "../components/style";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;

  position: relative;

  display: grid;
  grid-template-rows: 1fr 1fr 3fr;
`;

export default function ThirdName() {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  return (
    <Wrapper>
      <div></div>
      <Title
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        시설
      </Title>
      <div></div>
    </Wrapper>
  );
}
