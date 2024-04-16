import { create } from 'zustand'

interface RocketControlsStore {
  isOnAutoPilot: boolean;
  changeControls: (updatedControls: boolean) => void;
}

export const useRocketControlsStore = create<RocketControlsStore>((set) => ({
  isOnAutoPilot: true,
  changeControls: (updatedControls) => set(() => ({isOnAutoPilot: updatedControls})),
}))