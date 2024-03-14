import { HeaderContainer, HeaderContent, HeaderLogo, NewTransactionButton } from "./styles";
import logoImg from "../../../assets/logo.svg";
import * as Dialog from '@radix-ui/react-dialog';

export function Header() {
  return (
    <HeaderContainer>
        <HeaderContent>
            <HeaderLogo>
                <img src={logoImg} alt="" />
                <h2>DT Money</h2>
            </HeaderLogo>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <NewTransactionButton>Nova Transação</NewTransactionButton>
                </Dialog.Trigger>

                <Dialog.Portal>
                  <Dialog.Overlay className="overlay" />
                  <Dialog.Content className="content">
                    <Dialog.Title className="title">Nova Transação</Dialog.Title>
                    <Dialog.Description className="description">Preencha os campos abaixo para cadastrar uma nova transação</Dialog.Description>
                    <Dialog.Close className="close">Fechar</Dialog.Close>
                  </Dialog.Content>
                </Dialog.Portal>
              </Dialog.Root>
        </HeaderContent>
    </HeaderContainer>
  )
}