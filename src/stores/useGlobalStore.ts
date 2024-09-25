import { create } from "zustand";
import { persist } from "zustand/middleware";
interface GlobalState {
  language: string;
  setLanguage: (language: string) => void;
}
const useGlobalStore = create<GlobalState>()(
  persist(
    (set) => ({
      language: "en",
      setLanguage: (lang) => set({ language: lang }),
    }),
    {
      name: "global-store",
    }
  )
);
export default useGlobalStore;
