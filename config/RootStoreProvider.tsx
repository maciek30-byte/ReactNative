import React, {createContext, FC, ReactNode, useContext} from "react";
import {RootStore} from "../RootStore";

const RootStoreContext = createContext<RootStore | null>(null);

interface RootStoreProviderProps {
    children: ReactNode;
}

export const RootStoreProvider: FC<RootStoreProviderProps> = ({ children }) => {
    const store = new RootStore();
    return <RootStoreContext.Provider value={store}>{children}</RootStoreContext.Provider>;
};

export const useRootStore = (): RootStore => {
    const context = useContext(RootStoreContext);
    if (context === null) {
        throw new Error('useRootStore must be used within RootStoreProvider');
    }
    return context;
};
