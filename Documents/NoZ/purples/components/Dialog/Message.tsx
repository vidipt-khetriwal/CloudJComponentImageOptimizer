import { useState } from "react";
import { Dialog } from "@headlessui/react";

type MessageProps = {
  children: React.ReactNode;
  title: string;
  description: string;
  message: string;
  actionText: string;
  cancelText: string;
  onClickAction: () => void;
  onClickCancel: () => void;
};

export const Message = ({
  children,
  title,
  description,
  message,
  actionText,
  cancelText,
  onClickAction,
  onClickCancel,
}: MessageProps) => {
  let [isOpen, setIsOpen] = useState(true);

  const onClickActionHandler = () => {
    onClickAction();
    setIsOpen(false);
  };

  const onClickCancelHandler = () => {
    onClickCancel();
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <Dialog.Panel>
        <Dialog.Title>{title}</Dialog.Title>
        <Dialog.Description>{description}</Dialog.Description>

        <p>{message}</p>

        <button onClick={onClickActionHandler}>{actionText}</button>
        <button onClick={onClickCancelHandler}>{cancelText}</button>
      </Dialog.Panel>
    </Dialog>
  );
};
