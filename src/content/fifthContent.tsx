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

export default function FifthContent() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Content
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubContent>
        <SubTitle>1. 학생회 소식지 발간</SubTitle>
        <Detail>
          학생회에서 예산을 어떻게 어디에 사용했는지 보고하는 에산표를 매달 공개
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 학생회 건의함 설치</SubTitle>
        <Detail>
          학생회에게 요구 사항, 문의 사항을 건의할 수 있도록 건의함 제작
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 학생회 로드맵 제작</SubTitle>
        <Detail>
          학생회 간부수련회에서 미리 1년 로드맵을 공개 후 학생회 업무 정리
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 학생회 부서 피드백 반영</SubTitle>
        <Detail>새솔 학생회 모든 부서의 의견을 취합 후 해결안 제시</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>5. 학생회 공식 유튜브</SubTitle>
        <Detail>
          학생회 브이로그를 통해 학생회 홍보 효과, 학교 내의 자체 컨텐츠를 제작
        </Detail>
        <Detail>
          ex1) 체험해보상산 : 상산고등학교의 행정실, 입학관리부, 동아리 또는
          학생회 등을 체험해보는 장기 콘텐츠
        </Detail>
        <Detail>
          ex2) (다른) 학교! 다녀오겠습니다 : 전주의 주변 학교, 다른 자사고 등을
          가서 인터뷰하고 체험해보는 컨텐츠
        </Detail>
      </SubContent>
    </Content>
  );
}
