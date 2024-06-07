import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LogoScreen from "./screen/LogoScreen";
import StudentScreen from "./screen/StudentScreen";

const GlobalStyles = createGlobalStyle`
  ${reset};
  * {
    box-sizing : border-box;
    //add font here
  }
  body {
    height : 300vh;
    
    &::-webkit-scrollbar {
      display : none;
    }
  }

`;

export default function App() {
  return (
    <>
      <GlobalStyles></GlobalStyles>
      <LogoScreen></LogoScreen>
      <StudentScreen></StudentScreen>
    </>
  );
}
