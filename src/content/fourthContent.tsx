import { useInView } from "react-intersection-observer";
import { Detail, SubContent, SubTitle } from "../components/style";
import styled from "styled-components";
import { motion } from "framer-motion";

const Content = styled(motion.div)`
  height: 100vh;
  padding: 20px;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

export default function FourthContent() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Content
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubContent>
        <SubTitle>1. 자사고 전국 네트워크</SubTitle>
        <Detail>현재 다수의 자사고와 컨택을 완료</Detail>
        <Detail>
          전국 자사고 네트워크를 카페 또는 블로그로 연결하여 주기적으로 소통하는
          기회를 마련
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 1학년&2학년 합동 생기부</SubTitle>
        <Detail>선후배 간의 보고서 작성 프로젝트를 진행</Detail>
        <Detail>후배는 경험 많은 선배에게 배움</Detail>
        <Detail>선배는 러더쉽을 어필 가능</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 기출 관련 개선</SubTitle>
        <Detail>동아리에서 기출 해설지 제작 추진</Detail>
        <Detail>
          기출 답안지을 보기 쉽게 변경, 채점 기준표도 함께 첨부 추진
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 스터디 그룹 시스템 구축</SubTitle>
        <Detail>학교에 스터디 그룹 신청서를 제출 시, 간단한 지원 제공</Detail>
      </SubContent>
    </Content>
  );
}
