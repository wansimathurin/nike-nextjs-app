import { create } from "zustand";

export const useStoreCart = create((set) => ({
  selectedIds: [],
  toggleId: (id) => {
    set((state) => {
      const isAlreadySelected = state.selectedIds.includes(id);
      return {
        ...state,
        selectedIds: isAlreadySelected
          ? state.selectedIds.filter((item) => item !== id) // Remove if exists
          : [...state.selectedIds, id], // Add if not exists
      };
    });
  },
  clearCart: () => {
    set(() => ({ selectedIds: [] }));
  },
  removeItem: (id) => {
   set((state)=>{return {
     ...state,
     selectedIds: state.selectedIds.filter((item) => item !== id)
   };})
  }
}));
