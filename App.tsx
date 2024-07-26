import {StatusBar, StyleSheet} from 'react-native';
import {CategoriesScreen} from "./screens/CategoriesScreen";
import {AppProvider} from "./config/AppProvider";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {MealDetailScreen} from "./screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <AppProvider>
            <StatusBar barStyle="light-content"/>
            <Stack.Navigator initialRouteName="Categories">
                <Stack.Screen name="Categories" component={CategoriesScreen}/>
                <Stack.Screen name="Details" component={MealDetailScreen}/>
            </Stack.Navigator>
        </AppProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
