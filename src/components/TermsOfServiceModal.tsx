import { useCallback } from "react";
import useTermsOfServiceModalStore from "../store/useTermsOfServiceModalStore";
import Modal from "./Modal";

const TermsOfServiceModal = () => {
  const { isOpen, onClose } = useTermsOfServiceModalStore();

  const handleAction = useCallback(() => {
    // do something with the response, then closes de modal
    onClose();
  }, [onClose]);

  const handleSecondaryAction = useCallback(() => {
    // do something with the response, then closes de modal
    onClose();
  }, [onClose]);

  const body = (
    <div className="text-base ">
      Ao utilizar o site, você concorda em não enviar, transmitir ou
      compartilhar qualquer conteúdo que viole direitos de terceiros, seja
      ilegal, difamatório, obsceno, ofensivo, etc.
    </div>
  );

  return (
    <Modal
      body={body}
      isOpen={isOpen}
      title="Termos de uso"
      onClose={onClose}
      onAction={handleAction}
      onSecondaryAction={handleSecondaryAction}
      actionLabel="Aceitar"
      secondaryActionLabel="Recusar"
    />
  );
};

export default TermsOfServiceModal;
