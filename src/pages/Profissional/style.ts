import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 64px 64px 0px 64px;
    .conteudo{
        
        flex:1;
       
        h2{
            font-size: 42px;
            margin-top: -140px;
        }
        p{
            border-left: 6px solid #018762;
            padding-left: 16px;
            margin-top: 32px;
            font-size: 24px;
        }
    }
    .img{
        width: 100%;
        max-width: 540px;
        flex: 1;
        img{
            width: 100%;
            max-width: 540px;
            background-position: center;
            background-size: cover;
        }
        
    }
    @media (max-width:1100px) {
        flex-direction: column;
        .conteudo{       
            h2{
                
                margin-top: 0;
            }
       
        }
    }
`;