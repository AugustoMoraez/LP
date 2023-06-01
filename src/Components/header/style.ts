import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height:59px;
    background-color: #EEEEEE;
    padding: 8px 64px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .Logo a{
        font-size: 32px;
        color:rgb(1, 135, 98);
        font-weight: bold;
        &:hover{
            color: rgba(1, 135, 98,0.6);
        }
    }
    nav{
       width:100%;
       max-width: 320px;
       font-weight: bold;
       a{
        color:#1f1f1f;
        &:hover{
            opacity: 0.6;
        }
       }
        ul .ativo{
           color:rgb(1, 135, 98);
        }
    }
`;