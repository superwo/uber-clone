import CustomButton from "@/components/CustomButton";
import InputField from "@/components/InputField";
import { icons, images } from "@/constants";
import { Link } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const SignUp = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [verification, setVerification] = useState({
        state: "default",
        error: "",
        code: "",
    });

    const onSignUpPress = async () => {
        console.log("Sign Up Pressed");
        // if (!isLoaded) return;
        // try {
        //     await signUp.create({
        //         emailAddress: form.email,
        //         password: form.password,
        //     });
        //     await signUp.prepareEmailAddressVerification({
        //         strategy: "email_code",
        //     });
        //     setVerification({
        //         ...verification,
        //         state: "pending",
        //     });
        // } catch (err: any) {
        //     // See https://clerk.com/docs/custom-flows/error-handling
        //     // for more info on error handling
        //     console.log(JSON.stringify(err, null, 2));
        //     Alert.alert("Error", err.errors[0].longMessage);
        // }
    };
    return (
        <ScrollView className="flex-1 bg-white">
            <View className="flex-1 bg-white">
                <View className="relative w-full h-[250px]">
                    <Image
                        source={images.signUpCar}
                        className="z-0 w-full h-[250px]"
                    />
                    <Text className="text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5">
                        Create Your Account
                    </Text>
                </View>
                <View className="p-5">
                    <InputField
                        label="Name"
                        placeholder="Enter name"
                        icon={icons.person}
                        value={form.name}
                        onChangeText={(value) =>
                            setForm({ ...form, name: value })
                        }
                    />
                    <InputField
                        label="Email"
                        placeholder="Enter email"
                        icon={icons.email}
                        textContentType="emailAddress"
                        value={form.email}
                        onChangeText={(value) =>
                            setForm({ ...form, email: value })
                        }
                    />
                    <InputField
                        label="Password"
                        placeholder="Enter password"
                        icon={icons.lock}
                        secureTextEntry={true}
                        textContentType="password"
                        value={form.password}
                        onChangeText={(value) =>
                            setForm({ ...form, password: value })
                        }
                    />
                    <CustomButton
                        title="Sign Up"
                        onPress={onSignUpPress}
                        className="mt-6"
                    />
                </View>
                {/* OAuth */}
                <Link
                    href="/sign-in"
                    className="text-lg text-center text-general-200 mt-10"
                >
                    Already have an account?{" "}
                    <Text className="text-primary-500">Log In</Text>
                </Link>
            </View>
            {/* Verificatio Modal */}
        </ScrollView>
    );
};

export default SignUp;
