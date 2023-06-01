import { Container } from "./style";
import home from "../../images/home.svg";
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
                    <div className="button" >
                        <Link onClick={func} to="/pessoa-usuaria">Pessoa Usuária</Link>
                    </div>
                    <div className="button">
                        <Link  onClick={func} to="/profissional">Profissional</Link>
                    </div>
                </div>
            </div>
            <div className="img">
                <img src={home} alt="img-home" />
            </div>
        </Container>
    )
}