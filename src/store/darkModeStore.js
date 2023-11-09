import { proxy } from "valtio";

export const darkModeStore = proxy({
  isDark: false,
});

export default darkModeStore;
