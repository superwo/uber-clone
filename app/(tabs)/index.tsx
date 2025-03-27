import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
    return (
        <SafeAreaView className="flex-1 items-center justify-center bg-white">
            <Text className="text-lg font-bold text-blue-500">Hello</Text>
        </SafeAreaView>
    );
}
