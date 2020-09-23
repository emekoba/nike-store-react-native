import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Store() {
	return (
		<View style={x.container}>
			<Text>store</Text>
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
