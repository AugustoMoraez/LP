import { Container } from "./style";
import { Link } from "react-router-dom";
import { Icone } from "../../types/Icones";
import face from "../../images/FacebookLogo.svg";
import linkedin from "../../images/LinkedinLogo.svg";
import insta from "../../images/InstagramLogo.svg";

type Prop = {
    Icones:Icone[],
    func:(e:any)=>void
}

export const Footer = ({Icones,func}:Prop) => {
    return(
        <Container>
            <nav>
                {Icones.map((item)=>(
                    <Link to={item.rota}
                    onClick={func}
                    className={item.ativo ? "ativo" : ""}>
                    {item.IconeNome}
                    </Link>
                ))}
            </nav>
            <div className="social">
                <a href="https://www.facebook.com/lacrei.saude" target="_blank ">
                    <img src={face} alt="face" />
                </a>
                <a href="https://www.instagram.com/lacrei.saude/" target="_blank ">
                    <img src={insta} alt="insta" />
                </a>
                <a href="https://www.linkedin.com/company/lacrei/" target="_blank ">
                    <img src={linkedin} alt="" />
                </a>
            </div>
            <span>Desafio frontend</span>
        </Container>
    )
}