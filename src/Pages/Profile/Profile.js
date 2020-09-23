import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Profile() {
	// ! for signing out
	// auth()
	// .signOut()
	// .then(() => console.log('User signed out!'));

	return (
		<View style={x.container}>
			<Text>Profile</Text>
		</View>
	);
}

const x = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
