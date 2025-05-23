import { IMainSlice, TAppColorMode, TChannel, TMessage, TServerData } from "@/lib/types";
import { create } from "zustand";



const initialState: IMainSlice = {
    safeAreaBg: '',
    hideBottomTab: false,
    serverData: {} as TServerData,
    channelData: {} as TChannel,
    messages: [],
    userProfile: {
        name: "Paulos",
        user_name: "paulos_ab",
        id: 1,
        image: 'https://unsplash.it/400/400?image=1'
    },
    openRightdrawer: false,
    appColorMode: 'light'
}


type StoreType = IMainSlice & {
    updateSafeAreaBg: (bg: string) => void;
    setHideBottomTab: (hide: boolean) => void;
    setServerData: (data: TServerData) => void;
    setChannelData: (data: TChannel) => void;
    updateMessage: (message: TMessage) => void;
    setOpenRightDrawer: (open: boolean) => void;
    setAppColorMode: (mode: TAppColorMode) => void;
}



const useStore = create<StoreType>((set) => ({
    ...initialState,
    updateSafeAreaBg: (bg) => set({ safeAreaBg: bg }),
    setHideBottomTab: (hide) => set({ hideBottomTab: hide }),
    setServerData: (data) => set({ serverData: data }),
    setChannelData: (data) => set({ channelData: data }),
    updateMessage: (message) => set((state) => ({
        messages: [...state.messages, message]
    })),
    setOpenRightDrawer: (open) => set({ openRightdrawer: open }),
    setAppColorMode: (mode) => set({ appColorMode: mode }),
}))


export default useStore