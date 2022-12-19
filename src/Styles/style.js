import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Inter', sans-serif;
}

:root{
    --whiteFixed: #FFFFFF;
    --black: #000000;
    --brand1: #f5f9f2;
    --brand2: #67718e;
    --brand3: #2e3867;
    --brand4: #ffdd9a;
    --grey0: #0B0D0D;
    --grey1: #212529;
    --grey2: #495057;
    --grey3: #868E96;
    --grey4: #ADB5BD;
    --grey5: #CED4DA;
    --grey6: #DEE2E6;
    --grey7: #E9ECEF;
    --grey8: #F1F3F5;
    --grey9: #F8F9FA;
    --grey10: #FDFDFD;
    --alert1: #CD2B31;
    --alert2: #FDD8D8;
    --alert3: #FFE5E5;
    --sucess1: #18794E;
    --sucess2: #CCEBD7;
    --sucess3: #DDF3E4;
    --random1: #E34D8C;
    --random2: #C04277;
    --random3: #7D2A4D;
    --random4: #7000FF;
    
}

:link{
    
    text-decoration: none;
}

h1, h2, h3, h4, p, span {
    font-weight: 700;
}

button {
    cursor: pointer;
}
body{
    background: var(--brand4);

}

@font-face {
    font-family: 'ITC Avant Garde Gothic';
    src: local('ITC Avant Garde Gothic Md'), local('ITC-Avant-Garde-Gothic-Md'),
        url('ITCAvantGardeStd-Md.woff2') format('woff2'),
        url('ITCAvantGardeStd-Md.woff') format('woff'),
        url('ITCAvantGardeStd-Md.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

`;

export default GlobalStyle;
