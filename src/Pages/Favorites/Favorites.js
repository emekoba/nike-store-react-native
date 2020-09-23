import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Favorites() {
	return (
		<View style={x.container}>
			<Text>Favorites</Text>
		</View>
	);
}

const x = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
