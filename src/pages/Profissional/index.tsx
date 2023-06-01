import { Container } from "./style";
import profissional from "../../images/profissional 1.svg"


export const Profissional = () => {
    return(
        <Container>
            <div className="conteudo">
                <h2>Profissional</h2>
                <p>Buscamos recrutar pessoas profissionais da saúde que entendam as necessidades e se comprometam com o bem-estar da comunidade LGBTQIAPN+</p>
            </div>
            <div className="img">
                <img src={profissional} alt="img-home" />
            </div>
        </Container>
    )
}