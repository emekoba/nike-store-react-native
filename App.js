import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import {
	Aclonica_400Regular,
	Raleway_400Regular,
	Raleway_700Bold,
} from "@expo-google-fonts/dev";

import Login from "./src/Pages/Login/Login";
import Pages from "./src/Pages/Pages";
import { Control } from "./src/State/Control";

export default function App() {
	const Stack = createStackNavigator();

	let [fontsLoaded] = useFonts({
		Raleway: Raleway_400Regular,
		RalewayBold: Raleway_700Bold,
		Aclonica: Aclonica_400Regular,
	});

	fontsLoaded = true;

	if (!fontsLoaded) {
		return <AppLoading />;
	}

	return (
		<Control>
			<NavigationContainer>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
				>
					<Stack.Screen name="Login" component={Login} />
					<Stack.Screen name="Pages" component={Pages} />
				</Stack.Navigator>
			</NavigationContainer>
		</Control>
	);
}
