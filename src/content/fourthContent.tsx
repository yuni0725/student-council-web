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
        <Detail>
          현재 다수의 자사고 (하나고, 외대부고, 인천외고, 고양외고, 대일외고,
          경기외고, 한민고, 김천고)와 컨택 완료
        </Detail>
        <Detail>
          전국 자사고 네트워크를 카페 또는 블로그로 연결하여 주기적으로 소통을
          통해 포럼과 같은 합동 프로그램을 진행
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 1학년&2학년 합동 생기부</SubTitle>
        <Detail>선후배가 함께하는 보고서 작성 프로젝트 진행</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 기출 관련 문제점 보완</SubTitle>
        <Detail>각 분야의 동아리와 협력하여 기출문제 해설지를 제공</Detail>
        <Detail>각 과목별 서술형 채점 기준표와 등급 컷을 제공</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 스터디 그룹 시스템 구축</SubTitle>
        <Detail>
          다양한 사람들과 함께하는 탐구나 단체 스터디에 관심이 있는 학생 지원
        </Detail>
        <Detail>학습 보고서 제출로 전반적인 학습 분위기 형성</Detail>
      </SubContent>
    </Content>
  );
}
