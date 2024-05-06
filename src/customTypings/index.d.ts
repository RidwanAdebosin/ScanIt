import { Dispatch, SetStateAction } from "react";

declare module "myTypes" {
  interface EditProps {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
  }
}

module.exports = {
  EditProps,
};
