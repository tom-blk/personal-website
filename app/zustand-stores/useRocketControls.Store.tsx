import { create } from 'zustand'

interface RocketControlsStore {
  controls: "autoPilot" | "mouse";
  changeControls: (updatedControls: "autoPilot" | "mouse") => void;
}

export const useRocketControlsStore = create<RocketControlsStore>((set) => ({
  controls: "autoPilot",
  changeControls: (updatedControls) => set(() => ({controls: updatedControls})),
}))