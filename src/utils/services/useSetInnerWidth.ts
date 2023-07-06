import { create } from 'zustand';

type State = {
  width: number;
};

type Action = {
  setInnerWidth: (width: State['width']) => void;
};

const useSetInnerWidth = create<State & Action>((set) => ({
  width: 0,
  setInnerWidth: (width) =>
    set(() => ({
      width: width,
    })),
}));
export default useSetInnerWidth;
