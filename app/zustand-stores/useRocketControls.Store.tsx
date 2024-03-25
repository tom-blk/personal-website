import { create } from 'zustand'

const useRocketControlsStore = create((set) => ({
  autoPilot: true,
  changeControls: () => set((state) => ({ autopilot: !state.autoPilot})),
}))