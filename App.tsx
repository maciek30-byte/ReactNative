import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import {RootStoreProvider} from "./config/RootStoreProvider";

export default function App() {
    return (
        <RootStoreProvider>
            <View style={styles.container}>
                <Text>Open up App.tsx to start working on your app!</Text>
                <StatusBar style="auto"/>
            </View>
        </RootStoreProvider>
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
