import { create } from "zustand";
import { persist } from 'zustand/middleware'

const useStore = create(
    persist(
        (set) => ({
            loader: true,
            setLoader: (value) => set({ loader: value }),
        }),
        {
            name: 'Loader-State',
            getStorage: () => sessionStorage
        }
    )
)

export default useStore