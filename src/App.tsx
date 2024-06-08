import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import LogoScreen from "./screen/LogoScreen";
import PromiseScreen from "./screen/PromiseScreen";
import Footer from "./screen/Footer";
import { fonts } from "./fonts";

const GlobalStyles = createGlobalStyle`
  ${reset};
  ${fonts};
  * {
    box-sizing : border-box;
    }
    body {
      height : 500vh;
      font-family : "Noto Sans KR", "Roboto";
    
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
      <PromiseScreen></PromiseScreen>
      <Footer></Footer>
    </>
  );
}
