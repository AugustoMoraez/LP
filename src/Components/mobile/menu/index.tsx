import { Container } from "./style";
import { Icone } from "../../../types/Icones";
import { Link } from "react-router-dom";

type Prop = {
    toggle:true|false,
    Icones:Icone[],
    click:(e:any)=>void
}

export const MenuOptions = ({toggle,Icones,click}:Prop) => {
    return(
        <Container toggle={toggle}>
           <nav>
            {Icones.map((item)=>(
                <Link to={item.rota}
                className={item.ativo?"ativo":""}
                onClick={click}>
                {item.IconeNome}
                </Link>
            ))}
           </nav>
        </Container>
    )
}