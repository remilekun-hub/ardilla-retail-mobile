import React, { useState } from "react";
import {
	Pressable,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
	ChevronLeftIcon,
	CheckCircleIcon,
} from "react-native-heroicons/outline";
import { router } from "expo-router";
import Selfie from "@/assets/svg/selfie";

export default function Onboarding() {
	const [step, setStep] = useState<number>(1);
	const handleNext = () => {
		setStep((step) => step + 1);
	};

	const ChangeKodhex = () => (
		<View className="flex justify-between h-full">
			<View>
				<View className="mb-7">
					<Text className="text-primary font-[500] text-[34px] mb-4">
						Change KodHex Name
					</Text>
					<Text className="text-[13px] font-[400] text-[#6B7280] leading-6">
						A KodHex name is your unique identifier and helps your friends
						find you easily
					</Text>
				</View>

				<View>
					<TextInput
						className="border-[1px] border-[#D1D5DB] p-4 rounded-[6px] caret-primary focus:border-primary outline-none placeholder:text-[#9CA3AF]"
						placeholder="Enter your kodhex"
					/>

					<View className="mt-9">
						<View className="flex flex-row items-center gap-2 mb-4">
							<CheckCircleIcon
								size={15}
								color="#9CA3AF"
								strokeWidth={2}
							/>
							<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
								Your Kodhex should not contain spaces or uppercase
								letters
							</Text>
						</View>
						<View className="flex flex-row items-center gap-2 mb-4">
							<CheckCircleIcon
								size={15}
								color="#9CA3AF"
								strokeWidth={2}
							/>
							<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
								Your Kodhex should not contain spaces or uppercase
								letters
							</Text>
						</View>
						<View className="flex flex-row items-center gap-2 mb-4">
							<View className="flex self-start">
								<CheckCircleIcon
									size={15}
									color="#9CA3AF"
									strokeWidth={2}
									className="self-start"
								/>
							</View>
							<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
								Kodhex should contain a minimum of 6 characters and a
								maximum of 15 characters
							</Text>
						</View>
					</View>
				</View>
			</View>

			<View className="mb-8">
				<TouchableOpacity
					className="bg-primary p-6 mb-4 rounded-[8px]"
					onPress={handleNext}
					activeOpacity={0.5}
				>
					<Text className="text-white text-center font-[700]">
						Continue
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
	const SetPassword = () => (
		<View className="flex justify-between h-full">
			<View>
				<View className="mb-7">
					<Text className="text-primary font-[500] text-[34px] mb-4">
						Set Password
					</Text>
					<Text className="text-[13px] font-[400] text-[#6B7280] leading-6">
						Enter new password to secure your account
					</Text>
				</View>

				<View>
					<TextInput
						className="border-[1px] border-[#D1D5DB] p-4 rounded-[6px] caret-primary focus:border-primary outline-none placeholder:text-[#9CA3AF] mb-5"
						placeholder="Create password"
						secureTextEntry
					/>
					<TextInput
						className="border-[1px] border-[#D1D5DB] p-4 rounded-[6px] caret-primary focus:border-primary outline-none placeholder:text-[#9CA3AF]"
						placeholder="Confirm Password"
						secureTextEntry
					/>

					<View className="mt-9">
						<View className="flex flex-row items-center gap-2 mb-3">
							<CheckCircleIcon
								size={15}
								color="#9CA3AF"
								strokeWidth={2}
							/>
							<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
								At least 8 characters
							</Text>
						</View>
						<View className="flex flex-row items-center gap-2 mb-3">
							<CheckCircleIcon
								size={15}
								color="#9CA3AF"
								strokeWidth={2}
							/>
							<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
								Consist of letters and numbers
							</Text>
						</View>
						<View className="flex flex-row items-center gap-2 mb-4">
							<View className="flex self-start">
								<CheckCircleIcon
									size={15}
									color="#9CA3AF"
									strokeWidth={2}
									className="self-start"
								/>
							</View>
							<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
								Password must match
							</Text>
						</View>
					</View>
				</View>
			</View>

			<View className="mb-8">
				<TouchableOpacity
					className="bg-primary p-6 mb-4 rounded-[8px]"
					onPress={handleNext}
					activeOpacity={0.5}
				>
					<Text className="text-white text-center font-[700]">
						Set Password
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
	const SetQuestion = () => (
		<View className="flex justify-between h-full">
			<View>
				<View className="mb-12">
					<Text className="text-primary font-[500] text-[34px] mb-4">
						Set Security Question
					</Text>
					<Text className="text-[13px] font-[400] text-[#6B7280] leading-6">
						Your security question puts an extra layer of security on your
						account
					</Text>
				</View>

				<View>
					<TextInput
						className="border-[1px] border-[#D1D5DB] p-4 rounded-[6px] caret-primary focus:border-primary outline-none placeholder:text-[#9CA3AF] mb-5"
						placeholder="Create password"
						secureTextEntry
					/>
					<TextInput
						className="border-[1px] border-[#D1D5DB] p-4 rounded-[6px] caret-primary focus:border-primary outline-none placeholder:text-[#9CA3AF]"
						placeholder="Confirm Password"
						secureTextEntry
					/>
				</View>
			</View>

			<View className="mb-8">
				<TouchableOpacity
					className="bg-primary p-6 mb-4 rounded-[8px]"
					onPress={handleNext}
					activeOpacity={0.5}
				>
					<Text className="text-white text-center font-[700]">
						Continue
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
	const TakeSelfie = () => (
		<View className="flex justify-between h-full">
			<View>
				<View className="mb-12">
					<Text className="text-primary font-[500] text-[34px] mb-4">
						Take a Selfie
					</Text>
					<Text className="text-[13px] font-[400] text-[#6B7280] leading-6">
						Congrats on a successful sign up. Now take a selfie
					</Text>
				</View>

				<View>
					<View className="mx-auto mb-10">
						<Selfie />
					</View>

					<Text className="text-primary text-[15px] font-[500] mb-5">
						Selfie Guidelines
					</Text>

					<View className="mt-1">
						<View className="flex flex-row items-center gap-2 mb-5">
							<View className="self-start">
								<CheckCircleIcon
									size={15}
									color="#240552"
									strokeWidth={2}
								/>
							</View>
							<View className="flex">
								<Text className="text-[13px] font-[500] text-primary leading-6 mb-2">
									Use good lighting
								</Text>
								<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
									Please take your selfie in a well-lit area. The
									perfect selfies are taken with the light source
									directly on your face.
								</Text>
							</View>
						</View>
						<View className="flex flex-row items-center gap-2 mb-5">
							<View className="self-start">
								<CheckCircleIcon
									size={15}
									color="#240552"
									strokeWidth={2}
								/>
							</View>
							<View className="flex">
								<Text className="text-[13px] font-[500] text-primary leading-6 mb-2">
									No head or face coverings
								</Text>
								<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
									Please remove your glasses, scarves or any other
									coverings you might have on.
								</Text>
							</View>
						</View>
						<View className="flex flex-row items-center gap-2 mb-4">
							<View className="self-start">
								<CheckCircleIcon
									size={15}
									color="#240552"
									strokeWidth={2}
								/>
							</View>
							<View className="flex">
								<Text className="text-[13px] font-[500] text-primary leading-6 mb-2">
									Keep your face visible
								</Text>
								<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
									All parts of your face should be visible to the
									camera
								</Text>
							</View>
						</View>
					</View>
				</View>
			</View>

			<View className="mb-8">
				<TouchableOpacity
					className="bg-primary p-6 mb-4 rounded-[8px]"
					onPress={handleNext}
					activeOpacity={0.5}
				>
					<Text className="text-white text-center font-[700]">
						Take a Selfie
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);

	const handleBack = () => {
		{
			step > 1 ? setStep((step) => step - 1) : router.back();
		}
	};

	const renderStep = (activeStep: number): JSX.Element | null => {
		switch (activeStep) {
			case 1:
				return <ChangeKodhex />;
			case 2:
				return <SetPassword />;
			case 3:
				return <SetQuestion />;
			case 4:
				return <TakeSelfie />;
			default:
				return null;
		}
		// return render;
	};
	return (
		<SafeAreaView className="">
			<View className="p-5 h-full">
				<TouchableOpacity onPress={handleBack} className="mb-4">
					<ChevronLeftIcon size={24} color="#3D0072" strokeWidth={2.5} />
				</TouchableOpacity>
				{renderStep(step)}
				{/* <View className="flex justify-between h-full">
					<View>
						<View className="mb-7">
							<Text className="text-primary font-[500] text-[34px] mb-4">
								Change KodHex Name
							</Text>
							<Text className="text-[13px] font-[400] text-[#6B7280] leading-6">
								A KodHex name is your unique identifier and helps your
								friends find you easily
							</Text>
						</View>

						<View>
							<TextInput
								className="border-[1px] border-[#D1D5DB] p-4 rounded-[6px] caret-primary focus:border-primary outline-none"
								placeholder="Enter your kodhex"
							/>

							<View className="mt-9">
								<View className="flex flex-row items-center gap-2 mb-4">
									<CheckCircleIcon
										size={15}
										color="#9CA3AF"
										strokeWidth={2}
									/>
									<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
										Your Kodhex should not contain spaces or uppercase
										letters
									</Text>
								</View>
								<View className="flex flex-row items-center gap-2 mb-4">
									<CheckCircleIcon
										size={15}
										color="#9CA3AF"
										strokeWidth={2}
									/>
									<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
										Your Kodhex should not contain spaces or uppercase
										letters
									</Text>
								</View>
								<View className="flex flex-row items-center gap-2 mb-4">
									<View className="flex self-start">
										<CheckCircleIcon
											size={15}
											color="#9CA3AF"
											strokeWidth={2}
											className="self-start"
										/>
									</View>
									<Text className="text-[13px] font-[400] text-[#9CA3AF] leading-6">
										Kodhex should contain a minimum of 6 characters
										and a maximum of 15 characters
									</Text>
								</View>
							</View>
						</View>
					</View>
					<Text>{step}</Text>
					<View className="mb-8">
						<TouchableOpacity
							className="bg-primary p-6 mb-4 rounded-[8px]"
							onPress={handleNext}
							activeOpacity={0.5}
						>
							<Text className="text-white text-center">Continue</Text>
						</TouchableOpacity>
					</View>
				</View> */}
				<ChangeKodhex />
			</View>
		</SafeAreaView>
	);
}
