import { useInView } from "react-intersection-observer";
import { Content, Detail, SubContent, SubTitle } from "../components/style";

export default function ThirdContent() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  return (
    <Content
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SubContent>
        <SubTitle>1. 체육관 바닥</SubTitle>
        <Detail>심하게 손상된 체육관 바닥을 관리</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 전자칠판</SubTitle>
        <Detail>
          2학기 때 설치 될 수 있다고 알려진 전자칠판을 확정 짓고, 관리하는
          방안을 마련
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 급식실 앞 공간 마련</SubTitle>
        <Detail>
          급식실 앞 가방을 놓을 수 있는 공간이 많이 없고, 분실이 많기에 가방, 공
          등을 보관할 수 있는 공간을 마련
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 운동장 시설</SubTitle>
        <Detail>
          농구장과 축구장을 관리하고 방치되어 있는 야외 운동 시설 등을 관리
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>5. 여자 기숙사 내 운동 시설 마련</SubTitle>
        <Detail>
          남자 기숙사에만 존재하는 운동 시설을 여자 기숙사에도 설치
        </Detail>
      </SubContent>
    </Content>
  );
}
