import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import "animate.css";

const Wrapper = styled.div`
  height: 60vh;
  width: 100vw;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgDiv = styled(motion.div)`
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: 80%;
  width: 80%;
`;

export default function Footer() {
  const { inView, ref } = useInView({ threshold: 0.7 });
  return (
    <Wrapper>
      <ImgDiv
        ref={ref}
        className={inView ? "animate__animated animate__bounce" : ""}
      ></ImgDiv>
    </Wrapper>
  );
}
