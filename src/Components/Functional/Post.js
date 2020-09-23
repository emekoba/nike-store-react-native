import React, { useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";

import Icon from "../Style/Icon";

export default function Post({
	navigation,
	from,
	name,
	price,
	prevPrice,
	image,
	toggleCart,
	toggleLike,
	added,
	liked,
	description,
	index,
}) {
	const [colors] = useState([
		"#EEDD82",
		"lightgreen",
		"#ffd8b1",
		"#dd82ee",
		"#8293ee",
		"#f2476a",
		"#82eedd",
		"#2f95dc",
		"tomato",

		"dodgerblue",
		"#EEDD82",

		"#f032e6",
		"#fabebe",
		"#008080",
		"#e6beff",
		"#9a6324",
		"#fffac8",
		"#800000",
		"#aaffc3",
		"#808000",

		"#000075",
		"#808080",
		"#ffffff",
		"#3cb44b",
		"#000000",
		"#f58231",
		"#e6194b",
		"#911eb4",
		"#46f0f0",
		"#ffe119",
		"#4363d8",
		"#dd82ee",
		"#bcf60c",

		"tomato",
		"yellow",
		"purple",
		"#1A1A1A",
		"brown",
		"teal",
		"goldenrod",
	]);

	function openPost() {
		navigation.navigate("Description", {
			name: name,
			price: price,
			prevPrice: prevPrice,
			image: image,
			added: added,
			liked: liked,
			description: description,
			tint: colors[index],
		});
	}

	return (
		<>
			{from === "cart" && (
				<Animatable.View useNativeDriver={true} animation="fadeIn">
					<View style={{ ...cart.post, backgroundColor: colors[index] }}>
						<View style={cart.shoe}>
							<Image source={image} style={cart.shoe_image} />
						</View>

						<View style={cart.desc_price}>
							<Text style={cart.description}>{name}</Text>
							<Text style={cart.price}>${price}</Text>
						</View>

						<View style={cart.menu}>
							<TouchableOpacity style={cart.button}>
								<Icon name="add" />
							</TouchableOpacity>

							<Text style={cart.number}>{1}</Text>

							<TouchableOpacity style={cart.button}>
								<Icon name="remove" />
							</TouchableOpacity>
						</View>
					</View>
				</Animatable.View>
			)}

			{from === "feed" && (
				<Animatable.View useNativeDriver={true} animation="bounceIn">
					<TouchableOpacity activeOpacity={0.8} onPress={openPost}>
						<View style={{ ...feed.post, backgroundColor: colors[index] }}>
							<View style={feed.shoe}>
								<Image source={image} style={feed.shoe_image} />
							</View>

							<Text style={feed.description}>{name}</Text>

							<View style={feed.menu}>
								<TouchableOpacity onPress={() => toggleLike(name)}>
									<Icon
										name="like"
										innername={liked === false ? "hearto" : "heart"}
										color={added === false && "white"}
									/>
								</TouchableOpacity>

								<View style={feed.prices}>
									<Text style={feed.price_top}>${prevPrice}</Text>
									<Text style={feed.price_bottom}>${price}</Text>
								</View>

								<TouchableOpacity onPress={() => toggleCart(name)}>
									<Icon name="add_cart" />
								</TouchableOpacity>
							</View>
						</View>
					</TouchableOpacity>
				</Animatable.View>
			)}
		</>
	);
}

const feed = StyleSheet.create({
	post: {
		height: 320,
		width: "100%",
		backgroundColor: "#8293ee",
		marginTop: 40,
		// marginBottom: 20,
		borderRadius: 30,
	},

	shoe: {
		justifyContent: "center",
		alignItems: "center",
	},

	shoe_image: {
		height: 180,
		width: 200,
	},

	description: {
		flex: 0.5,
		textAlignVertical: "top",
		textAlign: "center",
		fontSize: 25,
		fontFamily: "Raleway",
		marginTop: 10,
	},

	menu: {
		flex: 1,
		justifyContent: "space-around",
		alignItems: "center",
		flexDirection: "row",
		paddingRight: 10,
		paddingLeft: 10,
	},

	prices: {
		alignItems: "center",
	},

	price_top: {
		fontSize: 11,
		marginBottom: 10,
		fontFamily: "RalewayBold",
	},

	price_bottom: {
		fontSize: 20,
		fontFamily: "RalewayBold",
	},
});

const cart = StyleSheet.create({
	post: {
		height: 130,
		backgroundColor: "#8293ee",
		marginTop: 20,
		marginBottom: 0,
		borderRadius: 20,
		flexDirection: "row",
		paddingRight: 20,
		padding: 10,
		margin: 20,
	},

	shoe: {
		flex: 0.8,
		marginTop: 10,
	},

	shoe_image: {
		height: 90,
		width: 120,
	},

	desc_price: {
		alignItems: "center",
		justifyContent: "center",
		flex: 2,
	},

	description: {
		textAlignVertical: "center",
		textAlign: "center",
		fontSize: 18,
		marginBottom: 20,
		fontFamily: "Raleway",
		paddingLeft: 8,
	},

	price: {
		fontSize: 15,
		fontFamily: "RalewayBold",
	},

	menu: {
		flex: 0.3,
		justifyContent: "space-around",
		alignItems: "center",
		paddingRight: 10,
		paddingLeft: 10,
	},

	button: {
		borderWidth: 2,
		height: 27,
		width: 27,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		borderColor: "white",
		borderTopRightRadius: 5,
	},

	number: {
		fontSize: 15,
		fontWeight: "bold",
	},
});
