import { css } from "styled-components";

export const fonts = css`
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: normal;
    font-display: swap;
    src: local("NotoSansKR"),
      url("/fonts/NotoSansRegular.woff2") format("woff2");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    font-display: swap;
    src: local("NotoSansKR"), url("/fonts/NotoSansMedium.woff2") format("woff2");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local("NotoSansKR"), url("/fonts/NotoSansBold.woff2") format("woff2");
  }
`;
