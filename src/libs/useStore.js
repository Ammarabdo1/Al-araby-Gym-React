import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set, get) => ({
      loader: true,
      setLoader: (value) => set({ loader: value }),
      loaderTimer: 1,
      setLoaderTimer: (value) => set({ loaderTimer: value }),

      showPopupPrices: false,
      setShowPopupPrices: (showPopupPrices) => set({ showPopupPrices }),

      serviceName: [],
      setServiceName: (serviceName) => set({ serviceName }),
      planType: "",
      setPlanType: (planType) => set({ planType }),
      duration: "",
      setDuration: (duration) => set({ duration }),

      subPrices: {
        service: 0,
        planType: 0,
        duration: 0,
        finalPrice: 0,
        offerPrice: 0,
        discount: 0,
      },

      setSubPrices: (type, price) =>
        set(() => {
          const { subPrices } = get();
          return {
            subPrices: {
              ...subPrices,
              [type]: price,
              finalPrice:
                (type === "service" ? price : subPrices.service) *
                (type === "planType" ? price : subPrices.planType) *
                (type === "duration" ? price : subPrices.duration),
            },
          };
        }),

      player: { name: "", phone: "", sendValid: true },
      setPlayer: (player) => set({ player }),

      open: false,
      set: () => set((state) => ({ open: !state.open })),
    }),
    {
      name: "Loader-State",
      partialize: (state) => ({
        loader: state.loader,
        loaderTimer: state.loaderTimer,
        player: state.player
      }),
    }
  )
);

export default useStore;
