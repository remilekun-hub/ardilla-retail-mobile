import Secure from "@/assets/svg/secure";
import { Link } from "expo-router";
import React from "react";
import { Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Page() {

	return (
		<SafeAreaView>
			<View className="flex h-full p-8 justify-between ">
				<View className="">
					<View className="w-[80vw] h-[400px] mx-auto pt-6">
						<Image
							style={{ resizeMode: "contain" }}
							source={require("@/assets/secure.png")}
							className="w-full h-full"
						/>
					</View>
					<View className="mt-4">
						<View className="flex flex-row justify-center mb-5">
							<Secure />
						</View>

						<Text className="text-center text-[#9CA3AF] leading-[19px] text-[13px]">
							Ardilla's Vault plans provide the financial {"\n"}{" "}
							stability your business deserves.
						</Text>
					</View>
				</View>

				<View>
					<Link
						href={"/signin"}
						className="block w-full text-white font-[600] text-center p-6 rounded-[8px] bg-primary"
					>
						<Text> Sign in</Text>
					</Link>
				</View>
			</View>
		</SafeAreaView>
	);
}
