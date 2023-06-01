import styled from "styled-components";

type Prop = {
    toggle:boolean
}

export const Container = styled.div<Prop>`
    display: ${props => props.toggle ? "flex" : "none" };
    z-index: 98;
    margin-top: -59px;
    position: fixed;
    width: 100vw;
    height: 100vh ;
    background-color: rgba(255,255,255,0.9);

    nav{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        max-width: 300px;
        height: 500px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
        flex-direction: column;
        a{
            font-size: 24px;
            font-weight: 600;
            color:#1f1f1f;
            margin-bottom: 20px;
            
        }
        .ativo{
            color:rgba(1, 135, 98,0.6);
            font-weight: 600px;
        }
    }
`;