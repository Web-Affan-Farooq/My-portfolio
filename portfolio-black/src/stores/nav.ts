import {create} from "zustand";

interface NavState {
    headerVisibility:boolean;
    setHeaderVisibility:() => void;
}

export const useNav = create<NavState>()((set) => ({
    headerVisibility:false,
    setHeaderVisibility:() => set((state) => ({
        headerVisibility:!state.headerVisibility
    }))
}))