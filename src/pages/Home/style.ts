import styled from "styled-components";



export const Container = styled.div `
    width: 100%;
    height: 100%;
    padding: 64px 64px 0px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
 
    .conteudo{
        
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
            justify-content: space-between;
            align-items: center;
            padding-top: 20px;
            width: 100%;
            max-width: 453px;
            text-align: center;
            .button{
               
                width: 100%;
                margin: 5px;
                padding: 14px 44px;
                border: 3px solid #018762;
                border-radius:10px;
                color: #fff;
                background-color: #018762;
                box-shadow:  0px 4px 4px rgba(0, 0, 0, 0.25);
                &:hover{
                    opacity: 0.8;
                    cursor: pointer;
                }
                a{
                    color: #fff;
                    font-weight: 600;
                    font-size: 14px;
                }
            }
            .button:last-child{
                background-color: #fff;
                a{
                    color:#018762;
                }
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
            flex-direction: column;
            .button{
                margin: auto;
            }
        }
    }
    @media (max-width:540px) {
        .btns{
            flex-direction: column;
            
            
        }            
    }

`;