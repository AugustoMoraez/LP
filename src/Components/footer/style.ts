import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 95vw;
    margin: auto ;
    border-top: 1px solid rgb(176, 224, 211);
    nav{
        width: 100%;
        max-width: 300px;
        padding: 30px 0px;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: auto;
        .ativo{
            font-weight: 600;
        }
    }
    .social{
        width: 100%;
        max-width: 150px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-right: auto;
    }
    span{
        font-weight: 100;
    }
    @media (max-width:520px) {
        nav{
            flex-direction: column;
            justify-content: space-between;
            align-items: flex-start;
            margin-right: auto;
        }
    }
`;