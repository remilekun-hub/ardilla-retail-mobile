import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
	return (
		<SafeAreaView>
			<View className="p-5">
				<Text className="text-black">Onboarding</Text>
			</View>
		</SafeAreaView>
	);
}
