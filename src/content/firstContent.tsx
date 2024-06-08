import { useInView } from "react-intersection-observer";
import { Content, Detail, SubContent, SubTitle } from "../components/style";

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
          학생 공모전을 통해 상산고등학교 마스코트를 만들어 굿즈에 활용
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 상산고등학교 공식 카페</SubTitle>
        <Detail>
          분실물 센터, 필기&자료 공유방, 동아리 포럼, 학생 커뮤니티와 같은 역할
          수행
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 매점 보완</SubTitle>
        <Detail>결제 카운터 늘리기, 매점의 줄 정리 방안을 마련</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>5. 모의고사 날 점심 개선</SubTitle>
        <Detail>점심시간이 짧은 모의고사 날 간단한 도시락 제공</Detail>
      </SubContent>
    </Content>
  );
}
