import { Container } from "./style";
import home from "../../../public/images/home.svg";
import { Link } from "react-router-dom";

type Prop = {
    func:(e:any)=>void
}

export const Home = ({func}:Prop) => {
    return(
        <Container>
            <div className="conteudo">
                <h2>Boas vindas a Lacrei Saúde</h2>
                <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
                <div className="btns">
                    <Link to="pessoa-usuaria" onClick={func}>Pessoa Usuária</Link>
                    <Link to="profissional" onClick={func}>Profissional</Link>
                </div>
            </div>
            <div className="img">
                <img src={home} alt="img-home" />
            </div>
        </Container>
    )
}