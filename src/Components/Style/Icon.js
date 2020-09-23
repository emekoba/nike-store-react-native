import {
	Ionicons,
	Entypo,
	MaterialCommunityIcons,
	Octicons,
	AntDesign,
	MaterialIcons,
	Feather,
	SimpleLineIcons,
	FontAwesome,
	FontAwesome5,
	Foundation,
	Fontisto,
	Zocial,
	EvilIcons,
} from "@expo/vector-icons";
import React, { useContext, useEffect } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Resources } from "../../Resources/Resources";
import Colors from "./constants/Colors";
import * as Animatable from "react-native-animatable";
import { Brim } from "../../State/Control";

export default function Icon({ name, innername, focused, color }) {
	const [control] = useContext(Brim);

	useEffect(() => {
		if (focused) {
			bounce();
		}
	});

	let animate;
	function handleRef(ref) {
		animate = ref;
	}

	function bounce() {
		animate.bounceIn();
	}

	return (
		<Animatable.View
			ref={handleRef}
			useNativeDriver={true}
			animation="bounceIn"
		>
			{/* LOGIN................................................................................................................................................. */}

			{name === "check" && (
				<MaterialCommunityIcons
					name="check-all"
					size={18}
					// color="#8293ee"
					// color="white"
				/>
			)}

			{name === "google" && <Image source={Resources.google} style={x.login} />}

			{name === "facebook" && (
				<Image source={Resources.facebook} style={x.login} />
			)}

			{/* DESCRIPTION................................................................................................................................................. */}

			{name === "like_desc" && (
				<AntDesign
					name="hearto"
					size={28}
					// color={color}
					color="black"
				/>
			)}

			{name === "add_cart_desc" && (
				<Ionicons
					name="ios-basket"
					size={32}
					// color={color}
					color="black"
				/>
			)}

			{/* CART................................................................................................................................................. */}

			{name === "add" && <FontAwesome name="plus" size={9} color={color} />}

			{name === "remove" && <FontAwesome name="minus" size={9} color={color} />}

			{name === "like_top" && <AntDesign name="heart" size={30} color="red" />}

			{/* POST................................................................................................................................................. */}

			{name === "like" && (
				<AntDesign name={innername} size={30} color={color} />
			)}

			{name === "add_cart" && (
				<Ionicons name="ios-basket" size={36} color={"white"} />
			)}

			{/* TAB................................................................................................................................................. */}
			{name === "store" && <Image source={Resources.store} style={x.store} />}

			{name === "feed" && <Image source={Resources.shoe2} style={x.feed} />}

			{name === "cart" && (
				<View>
					<Text style={x.badge}>{control.cart.length}</Text>
					<Image source={Resources.cart} style={x.cart} />
				</View>
			)}

			{name === "profile" && <Image source={control.dp} style={x.profile} />}
		</Animatable.View>
	);
}

const x = StyleSheet.create({
	tabIcon: {
		marginTop: 15,
		height: 30,
		width: 30,
	},

	feed: {
		marginTop: 15,
		marginRight: 8,
		height: 38,
		width: 38,
	},

	profile: {
		marginTop: 15,
		height: 32,
		width: 32,
		borderRadius: 32 / 2,
		borderWidth: 2,
		borderColor: "tomato",
	},

	store: { marginTop: 15, height: 26, width: 26 },

	badge: {
		position: "absolute",
		right: -5,
		top: 20,
		borderRadius: 18 / 2,
		height: 18,
		width: 18,
		backgroundColor: "#f2476a",
		textAlign: "center",
		textAlignVertical: "center",
		fontSize: 8,
		color: "white",
		zIndex: 2,
		fontWeight: "bold",
	},

	cart: { marginTop: 15, height: 38, width: 38 },

	login: {
		height: 33,
		width: 33,
	},
});
