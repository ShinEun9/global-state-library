import { makeAutoObservable } from "mobx";

class DarkMode {
  isDark = false;
  constructor() {
    makeAutoObservable(this);
  }
  toggleThema() {
    this.isDark = !this.isDark;
  }
}

const darkModeStore = new DarkMode();

export default darkModeStore;
