import { create } from "zustand";

export const useStoreFavorite = create((set) => ({
  selectedHeartIds: [],
  toggleHeartIconId: (id) => {
    set((state) => {
      const isAlreadySelected = state.selectedHeartIds.includes(id);
      return {
        ...state,
        selectedHeartIds: isAlreadySelected
          ? state.selectedHeartIds.filter((item) => item !== id) // Remove if exists
          : [...state.selectedHeartIds, id], // Add if not exists
      };
    });
  },
  clearFavorite: () => {
    set(() => ({ selectedHeartIds: [] }));
  },
}));
