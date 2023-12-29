import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

type ModalProps = {
  isOpen: boolean;
  disabled?: boolean;
  title?: string;
  body: React.ReactNode;
  footer?: React.ReactNode;
  onClose: () => void;
  onAction?: () => void;
  onSecondaryAction?: () => void;
  actionLabel?: string;
  secondaryActionLabel?: string;
};

const Modal = ({
  isOpen,
  disabled,
  title,
  body,
  footer,
  onClose,
  onAction,
  onSecondaryAction,
  actionLabel,
  secondaryActionLabel,
}: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 bg-[#222222]/60 z-50 flex items-center">
      <div className="relative w-full h-full md:max-w-[576px] md:h-auto mx-auto border rounded-2xl bg-[#FEFEFE] shadow-md">
        {/* HEADER */}
        <header className="relative flex items-center justify-center border-b py-3 px-5">
          <button
            onClick={onClose}
            className="absolute top-2 left-2 text-zinc-600 hover:bg-neutral-200/60 rounded-full cursor-pointer transition p-2 flex items-center"
          >
            <IoMdClose size={24} />
          </button>
          <h1 className="font-semibold text-zinc-800 text-lg">{title}</h1>
        </header>
        {/* BODY */}
        <div className="relative py-8 px-5">
          {body}
          <div className="flex flex-row gap-6 mt-5">
            {onSecondaryAction && secondaryActionLabel && (
              <Button
                label={secondaryActionLabel}
                onClick={onSecondaryAction}
                disabled={disabled}
                outline
              />
            )}
            {onAction && actionLabel && (
              <Button
                label={actionLabel}
                onClick={onAction}
                disabled={disabled}
              />
            )}
          </div>
        </div>
        {/* FOOTER */}
        {footer && <footer className="relative py-8 px-5">{footer}</footer>}
      </div>
    </div>,
    document.querySelector(".modal-container") as Element
  );
};

export default Modal;
