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

export default function SecondContent() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Content
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubContent>
        <SubTitle>1. 별 보러 가자~</SubTitle>
        <Detail>
          새하마노와 함께 주말 저녁 점등된 운동장에서 소중한 사람들과 밤하늘의
          천체관측 행사 진행
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 초청공연</SubTitle>
        <Detail>
          축제 공연 무대에 라이징 인디 밴드 또는 가수, 댄스팀 초청
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 동아리 행사 확대</SubTitle>
        <Detail>
          동아리 활동을 발표하고, 제작물을 공개할 수 있는 박람회를 개최
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 스포츠 경기 단체 관람</SubTitle>
        <Detail>2024년에 예정된 올림픽, 축구 경기, 영화 등을 단체 관람</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>5. 공연 동아리 공연 기회 확대</SubTitle>
        <Detail>
          공연 동아리와 학생들을 위한 버스킹, 주말 단기 공연 개최를 통해, 더
          많은 공연 기회를 제공
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>6. 선후배 관계 회복 프로그램</SubTitle>
        <Detail>
          멘토•멘티 관계에 어려움을 느끼는 학생들을 위해 선배와 후배를 매칭하여
          함께 할 수 있는 프로그램 진행
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>7. 예능 프로그램 오마주 및 패러디 영상 제작</SubTitle>
        <Detail>
          출발 드림팁, 피지컬 100, 도전 골든벨, 워크맨, 하트시널 등의 재밌는
          컨텐츠들을 방송부와 협조하여 제작
        </Detail>
      </SubContent>
    </Content>
  );
}
