import { Container } from "./style";
import pessoaUsuaria from "../../images/rafiki 1.svg"


export const PessoaUsuaria = () => {
    return(
        <Container>
            <div className="conteudo">
                <h2>Pessoa Usuária</h2>
                <p>A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</p>
            </div>
            <div className="img">
                <img src={pessoaUsuaria} alt="img-home" />
            </div>
        </Container>
    )
}