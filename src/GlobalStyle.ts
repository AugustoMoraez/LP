import {createGlobalStyle} from "styled-components";


export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
}
body{
    color:#1f1f1f;
}
button,a{
    background:none;
    border:0;
    outline: none;
    transition: 0.5s;
}
p{
    color:#515151;
}


`;