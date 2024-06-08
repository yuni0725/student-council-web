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

export default function FirstContent() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Content
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubContent>
        <SubTitle>1. 시설 신청 시스템 구축</SubTitle>
        <Detail>
          체육관, 음악 합주실, 신강 세 가지 공간을 신청할 수 있는 상산 시설 신청
          사이트 만들어 운영
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 상산 굿즈 개선</SubTitle>
        <Detail>
          학생 공모전을 통해 상산고등학교 마스코트 선정 후 굿즈에 활용
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 상산고등학교 공식 카페</SubTitle>
        <Detail>자료 공유방을 개설하여, 자료와 기출문제 등을 공유</Detail>
        <Detail>각 동아리별 학생들과 선생님들 간 커뮤니티 조성</Detail>
        <Detail>
          그 외에도 SSEP 팀원 모집, 분실문 보관소 등 다목적으로 사용
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 모의고사 날 편의식 제공</SubTitle>
        <Detail>점심시간이 짧은 모의고사 날 간단한 도시락 제공</Detail>
      </SubContent>
    </Content>
  );
}
