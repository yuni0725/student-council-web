import { useInView } from "react-intersection-observer";
import { Content, Detail, SubContent, SubTitle } from "../components/style";

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
          주말 밤에 운동장에 모여 카운트 다운 후 운동장 조명을 끄는 행사 진행
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>2. 초청공연</SubTitle>
        <Detail>
          카일라이 행사 때 타 학교의 밴드부, 댄스부, 무명 인디가수 초청
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>3. 동아리 행사 확대</SubTitle>
        <Detail>
          동아리에서 한 활동을 발표하고, 제작물을 공개할 수 있는 박람회를 개최
        </Detail>
      </SubContent>
      <SubContent>
        <SubTitle>4. 스포츠 경기 단체 관람</SubTitle>
        <Detail>2025년에 예정된 올림픽, 축구 경기 등을 단체 관람</Detail>
      </SubContent>
      <SubContent>
        <SubTitle>5. 공연 동아리 공연 기회 확대</SubTitle>
        <Detail>
          점심, 저녁 시간의 버스킹 같은 작은 공연을 여는 등 다양한 음악활동 행사
          마련
        </Detail>
      </SubContent>
    </Content>
  );
}
