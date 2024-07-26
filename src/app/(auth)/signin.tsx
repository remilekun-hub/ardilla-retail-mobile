import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	View,
	Text,
	TextInput,
	Image,
	Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { cn } from "@/lib/utils";
import { router } from "expo-router";
import { PhoneIcon } from "react-native-heroicons/outline";
import { CodeBracketIcon } from "react-native-heroicons/outline";

export default function signin() {
	const [loginMethod, setLoginMethod] = useState<"kodhex" | "phone">("kodhex");
	return (
		<SafeAreaView>
			<View className="bg-white flex h-full p-5 justify-between">
				<View>
					<View className="mb-10 w-full">
						<Image
							style={{ resizeMode: "contain" }}
							source={require("@/assets/need an account.png")}
							className="w-full h-[84px] relative z-[3]"
						/>
						<View className="absolute z-[2] top-[30px] w-full">
							<Image
								style={{ resizeMode: "contain" }}
								source={require("@/assets/second-rect-need.png")}
								className="w-[90%] h-[61px] mx-auto"
							/>
						</View>
						<View className="absolute z-[1] top-[38px] w-full">
							<Image
								style={{ resizeMode: "contain" }}
								source={require("@/assets/third-rect-need.png")}
								className="w-[82%] h-[61px] mx-auto"
							/>
						</View>
					</View>
					<View className="mb-6">
						<Text className="text-[#6B7280] text-[25px] font-[400]">
							Welcome{" "}
							<Text className="text-primary font-[600] text-[40px]">
								Champ.
							</Text>
						</Text>
					</View>
					<View className="flex flex-row bg-[#F3F4F6] p-1 rounded-[6px] mb-9">
						<View
							onTouchStart={() => setLoginMethod("kodhex")}
							className={cn(
								"w-1/2 py-3.5 rounded-[6px] flex flex-row justify-center items-center gap-1.5 ",
								loginMethod === "kodhex"
									? "bg-white text-primary"
									: "bg-[#F3F4F6] text-[#9CA3AF]"
							)}
						>
							<CodeBracketIcon color={cn(loginMethod === 'kodhex' ? "#240552" : "#9CA3AF")} size={20} />
							<Text
								className={cn(
									"text-center font-[500]",
									loginMethod === "kodhex"
										? "text-primary"
										: "text-[#9CA3AF]"
								)}
							>
								Kodhex
							</Text>
						</View>

						<View
							onTouchStart={() => setLoginMethod("phone")}
							className={cn(
								"w-1/2 py-3.5 rounded-[6px] flex flex-row justify-center items-center gap-1.5",
								loginMethod === "phone"
									? "bg-white text-primary"
									: "bg-[#F3F4F6] text-[#9CA3AF]"
							)}
						>
						
							<PhoneIcon color={cn(loginMethod === 'phone' ? "#240552" : "#9CA3AF")} size={20} />
							<Text
								className={cn(
									"text-center font-[500]",
									loginMethod === "phone"
										? "text-primary"
										: "text-[#9CA3AF]"
								)}
							>
								Phone Number
							</Text>
						</View>
					</View>
					<View>
						{loginMethod === "kodhex" ? (
							<View>
								<View className="mb-8">
									<Text className="text-[#1F2937] text-[15px] font-[500] mb-2.5">
										Kodhex
									</Text>
									<TextInput
										className="border-[1px] border-[#96abc9] p-4 rounded-[6px] caret-primary focus:border-primary outline-none"
										placeholder="Enter your kodhex"
									/>
								</View>
								<View>
									<Text className="text-[#1F2937] text-[15px] font-[500] mb-2.5">
										Password
									</Text>
									<TextInput
										className="border-[1px] border-[#96abc9] p-4 rounded-[6px] caret-primary focus:border-primary outline-none"
										placeholder="Enter your password"
									/>
								</View>
							</View>
						) : (
							<View>
								<View className="mb-8">
									<Text className="text-[#1F2937] text-[15px] font-[500] mb-2.5">
										Phone Number
									</Text>
									<TextInput
										className="border-[1px] border-[#96abc9] p-4 rounded-[6px] caret-primary focus:border-primary outline-none"
										placeholder="Enter your phone number"
									/>
								</View>
								<View>
									<Text className="text-[#1F2937] text-[15px] font-[500] mb-2.5">
										Password
									</Text>
									<TextInput
										className="border-[1px] border-[#96abc9] p-4 rounded-[6px] caret-primary focus:border-primary outline-none"
										placeholder="Enter your password"
									/>
								</View>
							</View>
						)}
					</View>
					<View className="flex flex-row justify-end mt-2.5">
						<Text className="text-[#9ca3af] text-[14px]">
							Forgot Password?{" "}
							<Link href={"/reset-password"}>
								<Text className="text-primary">Reset</Text>
							</Link>
						</Text>
					</View>
				</View>
				<View>
					<Text className="text-center text-[#D1D5DB] font-[500] mb-3.5 text-xs">
						Powered by Dhata
					</Text>
					<Pressable
						onPress={() => router.navigate("onboarding")}
						className="bg-primary p-6 mb-4 rounded-[8px]"
					>
						<Text className="text-white text-center">Continue</Text>
					</Pressable>
					<Text className="text-center text-primary font-[500] text-sm">
						Do you need help?
					</Text>
				</View>
			</View>

			<StatusBar style="dark" />
		</SafeAreaView>
	);
}
