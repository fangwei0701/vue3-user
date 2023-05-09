import { defineStore } from "pinia";
import { User } from "./index.type";

export const userStore = defineStore("user", {
  state: (): { userData: User } => {
    return { userData: null };
  },
  actions: {
    setUser(user: User) {
      this.userData = user;
    },
    deleteUser() {
      this.userData = null;
    },
  },
});
