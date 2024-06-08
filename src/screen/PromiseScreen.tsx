import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import FirstName from "../name/firstName";
import SecondName from "../name/secondName";
import FirstContent from "../content/firstContent";
import SecondContent from "../content/secondContent";
import ThirdContent from "../content/thirdContent";
import ThirdName from "../name/thirdName";
import FourthName from "../name/fourthName";
import FourthContent from "../content/fourthContent";
import FifthName from "../name/fifthName";
import FifthContent from "../content/fifthContent";
import SixthName from "../name/sixthName";
import SixthContent from "../content/sixthContent";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.04fr 2fr;

  height: 600vh;
  width: 100vw;
`;

const NameDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScrollBarDiv = styled.div`
  height: 600vh;
  width: 100%;
  position: relative;
`;

const ScrollThumb = styled.div`
  position: absolute;
  width: 98%;
  height: 100%;
  background-color: #a6a6a6;
  z-index: 0;
`;

const ScrollBar = styled(motion.div)`
  position: absolute;
  height: 100%;
  width: 100%;

  background-color: #8ec5fc;
  z-index: 1;

  border-radius: 0px 0px 20px 20px;
`;

const ContentDiv = styled.div``;

export default function PromiseScreen() {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.1, 1], [0, 0, 1]);
  return (
    <>
      <Wrapper>
        <NameDiv>
          <FirstName></FirstName>
          <SecondName></SecondName>
          <ThirdName></ThirdName>
          <FourthName></FourthName>
          <FifthName></FifthName>
          <SixthName></SixthName>
        </NameDiv>
        <ScrollBarDiv>
          <ScrollThumb></ScrollThumb>
          <ScrollBar
            style={{ scaleY: scale, transformOrigin: "top" }}
            className="progress-bar"
          ></ScrollBar>
        </ScrollBarDiv>
        <ContentDiv>
          <FirstContent></FirstContent>
          <SecondContent></SecondContent>
          <ThirdContent></ThirdContent>
          <FourthContent></FourthContent>
          <FifthContent></FifthContent>
          <SixthContent></SixthContent>
        </ContentDiv>
      </Wrapper>
    </>
  );
}
