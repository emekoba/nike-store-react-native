import React, { useContext } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import Post from "../../Components/Functional/Post";
import { Brim } from "../../State/Control";
import Favorites from "../Favorites/Favorites";
import Icon from "../../Components/Style/Icon";

export default function Cart() {
	const Tab = createMaterialTopTabNavigator();

	return (
		<Tab.Navigator
			tabBarOptions={{
				style: {
					borderBottomLeftRadius: 30,
					borderBottomRightRadius: 30,
					paddingTop: 40,
				},
				indicatorStyle: { height: 0 },
				contentContainerStyle: {
					backgroundColor: "rgba(231, 238, 241, 0.138)",
				},
				labelStyle: {
					borderRadius: 30,
					padding: 10,
					fontSize: 13,
					width: 100,
					// height: 100,
					fontWeight: "bold",
					textTransform: "lowercase",
					backgroundColor: "rgba(231, 238, 241, 0.938)",
				},
			}}
		>
			<Tab.Screen
				name="Cart"
				component={Main}
				options={{
					tabBarIcon: ({ focused }) => <Icon name="like_top" />,

					// tabBarLabel: "",
				}}
			/>
			<Tab.Screen name="Favorites" component={Favorites} />
		</Tab.Navigator>
	);
}

function Main() {
	const [control] = useContext(Brim);

	let POSTS = getPosts();

	function toggleCart() {}

	function getPosts() {
		let x = -1;

		return (
			<FlatList
				data={control.cart}
				keyExtractor={(item) => item.name}
				showsVerticalScrollIndicator={false}
				renderItem={({ item }) => {
					x++;
					return (
						<Post
							from="cart"
							name={item.name}
							image={item.image}
							prevPrice={item.previousPrice}
							price={item.price}
							liked={item.liked}
							added={item.added}
							toggleCart={toggleCart}
							index={x}
						/>
					);
				}}
			/>
		);
	}

	return <View style={x.cart}>{POSTS}</View>;
}

const x = StyleSheet.create({
	cart: {
		flex: 1,
	},
});
