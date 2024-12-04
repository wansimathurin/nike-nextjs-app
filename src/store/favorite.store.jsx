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



// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers = [...numbers, 57,8,39,33]