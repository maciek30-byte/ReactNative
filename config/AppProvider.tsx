import {FC, ReactNode} from "react";
import {RootStoreProvider} from "./providers/RootStoreProvider";
import {NavigationProvider} from "./providers/NavigationProvider";

export const AppProvider:FC<{children: ReactNode}> = ({children})=>  {
    return (
        <RootStoreProvider>
            <NavigationProvider>
                {children}
            </NavigationProvider>
        </RootStoreProvider>
    )
}
