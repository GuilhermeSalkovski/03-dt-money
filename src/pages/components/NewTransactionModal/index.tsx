import * as Dialog from "@radix-ui/react-dialog";
import { CloseButton, Content, Overlay } from "./styles";
import { X } from "phosphor-react";

export function NewTransactionModal() {
    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title className="title">Nova Transação</Dialog.Title>
                <CloseButton><X size={24}/></CloseButton>

                <Dialog.Description className="description">Preencha os campos abaixo para cadastrar uma nova transação</Dialog.Description>
                <form action="">
                    <input type="text" placeholder="Descrição" required />
                    <input type="number" placeholder="Preço" required />
                    <input type="text" placeholder="Categoria" required />

                    <button type="submit">Cadastrar</button>
                </form>
            </Content>
      </Dialog.Portal>
    )
}