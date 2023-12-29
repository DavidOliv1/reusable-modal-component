import { create } from "zustand";

type TermsOfServiceModalStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

const useTermsOfServiceModalStore = create<TermsOfServiceModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useTermsOfServiceModalStore;
