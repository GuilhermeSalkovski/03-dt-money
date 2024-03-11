import { HeaderContainer, HeaderContent, HeaderLogo, NewTransactionButton } from "./styles";
import logoImg from "../../../assets/logo.svg";

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <HeaderLogo>
                <img src={logoImg} alt="" />
                <h2>DT Money</h2>
            </HeaderLogo>

            <NewTransactionButton>Nova Transação</NewTransactionButton>
        </HeaderContent>
    </HeaderContainer>
  )
}