import { Container } from "./style";

type Prop = {
    boolean:true|false,
    click:()=>void
}

export const IconeMenu = ({boolean,click}:Prop) => {
    return(
        <Container onClick={click} toggle={boolean}>
            <div></div>
            <div></div>
        </Container>
    )
}