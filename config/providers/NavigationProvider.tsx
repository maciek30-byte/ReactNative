import {NavigationContainer} from "@react-navigation/native";
import {FC, ReactNode} from "react";

export const NavigationProvider: FC<{ children: ReactNode }> = ({children}) => {
    return (
        <NavigationContainer>
            {children}
        </NavigationContainer>
    )
}
