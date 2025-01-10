import { create } from "zustand";
import { persist } from "zustand/middleware";
export const themeStore = create(
  persist((set) => ({
    token: "",
    addAccessToken: (token) =>
    set((prevState) => ({ ...prevState, token: token })),//token expire muddeti eave ed
  }))
);
