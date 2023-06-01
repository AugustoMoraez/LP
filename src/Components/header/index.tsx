import {Container} from "./style";
import { Icone } from "../../types/Icones";
import { Link } from "react-router-dom";


type Prop = {
    Icones:Icone[],
    func:(e:any)=>void,
    
}

export const Header = ({Icones,func}:Prop) => {
    return(
        <Container>
            <div className="Logo">
                <Link onClick={()=>func("Home")} to="/">Lacrei</Link>
            </div>
            {/*Desktop Menu*/}
            <nav>
                <ul>
                    {Icones.map((item,index)=>(
                        <li key={index} >
                            <Link
                             className={item.ativo?"ativo":""} 
                             to={item.rota}
                             onClick={func}>
                            {item.IconeNome}
                             </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            
           
        </Container>
    )
}