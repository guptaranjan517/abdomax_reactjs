import { create } from "zustand";
import { persist } from "zustand/middleware";
interface PersonalData {
  fullName: string;
  email: string;
  phoneNumber: string;
  countryCode: string;
}
interface StepData {
  1?: { date: Date | null };
  2?: { time: string | null };
  3?: { personal: PersonalData };
}
interface AppointmentState {
  currentStep: number;
  packageId: string;
  stepsData: StepData | null;
  setPackageId: (id: string) => void;
  nextStep: () => void;
  prevStep: () => void;
  resetFlow: () => void;
  clearPersistedState: () => void;
  setStepData: (step: keyof StepData, data: StepData[keyof StepData]) => void;
  finalSubmit: boolean;
  setCurrentStep: (step: number) => void;
  setFinalSubmit: (status: boolean) => void;
}
const useAppointmentStore = create<AppointmentState>()(
  (set, get) => ({
    currentStep: 1,
    stepsData: null,
    packageId: "",
    finalSubmit: false,
    setFinalSubmit: (status) => set({ finalSubmit: status }),
    setPackageId: (id) => set({ packageId: id }),
    nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
    prevStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
    setCurrentStep: (step: any) => set({ currentStep: step }),  // Implemented here
    setStepData: (step, data) =>
      set((state) => ({
        stepsData: { ...state.stepsData, [step]: data },
      })),
    resetFlow: () =>
      set({
        currentStep: 1,
        stepsData: null,
      }),
    clearPersistedState: () => {
      // store.persist.clearStorage();
    },
  })
);
export default useAppointmentStore;