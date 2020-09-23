import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Icon from "../Components/Style/Icon";
import Feed from "./Feed/Feed";
import Cart from "./Cart/Cart";
import Profile from "./Profile/Profile";
import Store from "./Store/Store";
import * as Animatable from "react-native-animatable";
import { TouchableOpacity } from "react-native";

export default function Pages() {
	const Tabs = createBottomTabNavigator();

	return (
		<Tabs.Navigator
			initialRouteName="Feed"
			tabBarOptions={{ style: { borderTopWidth: 0, elevation: 0, height: 60 } }}
		>
			<Tabs.Screen
				name="Store"
				component={Store}
				options={{
					title: "",
					tabBarIcon: ({ focused }) => <Icon name="store" focused={focused} />,
				}}
			/>

			<Tabs.Screen
				name="Feed"
				component={Feed}
				options={{
					title: "",
					tabBarIcon: ({ focused }) => <Icon name="feed" focused={focused} />,
				}}
			/>

			<Tabs.Screen
				name="Cart"
				component={Cart}
				options={{
					title: "",
					tabBarIcon: ({ focused }) => <Icon name="cart" focused={focused} />,
				}}
			/>

			<Tabs.Screen
				name="Profile"
				component={Profile}
				options={{
					title: "",
					tabBarIcon: ({ focused }) => (
						<Icon name="profile" focused={focused} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
}
