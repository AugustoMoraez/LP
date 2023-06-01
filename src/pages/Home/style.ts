import styled from "styled-components";



export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 64px 64px 0px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .conteudo{
        width: 100%;
        max-width: 540px;
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        h2{
            font-size: 48px;
            margin-top: -140px;
            
        }
        p{
            font-size: 24px;
            margin-top: 32px;
        }
        .btns{
            display: flex;
            -webkit-box-pack: justify;
            justify-content: space-between;
            -webkit-box-align: center;
            align-items: center;
            padding-top: 3rem;
            max-width: 453px;
            a{
                flex: 1;
                padding:10px 44px;
                font-size: 18px;
                border-radius: 10px;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
                cursor: pointer;
                &:hover{
                    opacity: 0.6;
                }
            }
            a:first-child{
                margin-right: 5px;
                background-color: rgb(1, 135, 98);
                color: rgb(255, 255, 255);
                border: 2px solid rgb(1, 135, 98);
            }
            a:last-child{
                margin-left: 5px;
                color: rgb(1, 135, 98);
                background-color: rgb(255, 255, 255);
                border: 2px solid rgb(1, 135, 98);
            }
        }
        
    }
    .img{
        width: 100%;
        max-width: 540px;
        img{
            width: 100%;
            max-width: 540px;
            background-position: center;
            background-size: cover;
        }
        
    }
    @media (max-width:1040px) {
        flex-direction: column;
        .conteudo{
            h2{
                margin-top: 0px;
                font-size: 30px;
            }
            p{
                font-size: 16px;
            }
        }
        .btns{
            a{
                padding: 10px 44px ;
            }
        }
    }
    @media (max-width:540px) {
        .btns{
            flex-direction: column;
            a{
                margin: 0;
                padding: 7px;
                margin-top: 10px;
            }
            a:last-child{
               width:211px;
            }
        }            
    }

`;