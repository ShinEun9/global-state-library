import { create } from "zustand";

const useStore = create((set) => ({
  isDark: false,
  toggleThema: () => set((state) => ({ isDark: !state.isDark })),
}));

export default useStore;

// * An alternative approach is to define actions at module level, external to the store.
// export const toggleThema = () =>
//   useBoundStore.setState((state) => ({ isDark: !state.isDark }));
