import styled from "styled-components";

type Prop = {
    toggle:boolean
}

export const Container = styled.div<Prop>`
    right: 0;
    z-index: 99;
    cursor: pointer;
    margin-top: -37px;
    margin-right: 20px;
    display: none;
    position: absolute;
    width: 50px;
    height: 50px;
    position: ${props => props.toggle ? "fixed": "" };
    div{
        width: 30px;
        height: 7px;
        border-radius: 10px;
        background-color: #018762;
        transition: 0.5s;
    }
    div:first-child{
        transform: ${props => props.toggle ? "rotate(45deg)" : "rotate(0)" };
    }
    div:last-child{
       margin-top:${props => props.toggle ? "-7px" : "7px" } ;
        transform: ${props => props.toggle ? "rotate(-45deg)" : "rotate(0)" };
    }
    @media (max-width:650px) {
        display: block;
    }
`;