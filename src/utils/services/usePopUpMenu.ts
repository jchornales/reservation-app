import { create } from 'zustand';

type State = {
  isOpen: boolean;
};

type Action = {
  setIsOpen: () => void;
};

const usePopUpMenu = create<State & Action>((set) => ({
  isOpen: false,
  setIsOpen: () => set((current) => ({ isOpen: !current.isOpen })),
}));

export default usePopUpMenu;
