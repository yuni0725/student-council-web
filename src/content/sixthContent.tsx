import { useInView } from "react-intersection-observer";
import { Detail, SubContent, SubTitle } from "../components/style";
import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
  height: 100vh;
  padding: 20px;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
`;

export default function SixthContent() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Content
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubContent>
        <SubTitle>제휴</SubTitle>
        <Detail>
          공식 제휴를 통한 할인 이벤트, 적립 이벤트, 더 나아가 시험기간, 시험이
          끝난 날 행사 진행
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>1. 생활편의</SubTitle>
        <Detail>살롱드태가</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 학업</SubTitle>
        <Detail>어라운드 스터디카페</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 카페</SubTitle>
        <Detail>메가커피, 곱빼기, 카페온달, 아오테아, 이터리</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 음식점</SubTitle>
        <Detail>이태리 부대찌개, 천유향 마라향솥, 닭마을 산책</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>5. 여가</SubTitle>
        <Detail>전북 현대 그린 스쿨</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>추후 확대 예정</SubTitle>
      </SubContent>
    </Content>
  );
}
