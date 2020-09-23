import React from "react";
import {
	View,
	StyleSheet,
	Image,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";

import Icon from "../../Components/Style/Icon";

export default function Description({ navigation, route }) {
	navigation.setOptions({
		headerStyle: {
			elevation: 0,
		},
		headerTitle: null,
		headerTransparent: true,
	});

	let R = route.params,
		tint = R.tint,
		image = R.image,
		price = R.price,
		prevPrice = R.prevPrice,
		added = R.added,
		name = R.name,
		liked = R.liked,
		description = R.description,
		sizes = R.sizes;

	function getSizes() {
		let sizes = [
			<TouchableOpacity
				key={0}
				activeOpacity={0.8}
				style={{ ...x.size, backgroundColor: tint }}
			>
				{/* <View style={x.badge} /> */}
				<Text style={x.size_txt}>32</Text>
			</TouchableOpacity>,

			<TouchableOpacity
				key={1}
				activeOpacity={0.8}
				style={{ ...x.size, backgroundColor: tint }}
			>
				<View style={x.badge} />
				<Text style={x.size_txt}>45</Text>
			</TouchableOpacity>,
		];

		return sizes;
	}

	function chooseSize() {}

	return (
		<ScrollView showsVerticalScrollIndicator={false}>
			<View style={{ ...x.topbar, backgroundColor: tint }}>
				{/* // TODO: add imagebackground or slideshow for a particular shoe */}

				<Image source={image} style={x.shoe} resizeMode="contain" />

				<View style={x.btns}>
					<TouchableOpacity style={x.button}>
						<Icon name="like_desc" color={tint} />
					</TouchableOpacity>

					<TouchableOpacity style={x.button}>
						<Icon name="add_cart_desc" color={tint} />
					</TouchableOpacity>
				</View>
			</View>

			<View style={x.bottombar}>
				<View style={x.name_price}>
					<Text style={x.name}>{name}</Text>

					<Text style={x.price}>${price}</Text>
				</View>

				<View style={x.sizes}>{getSizes()}</View>

				<Text style={x.desc}>
					{description}
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis
					mattis justo. Phasellus mattis nulla vitae mauris dapibus tempus.
					Etiam lacus libero, ultricies non neque sit amet, egestas suscipit ex.
					Fusce lorem risus, convallis non vehicula sed, sodales nec mauris.
					Vivamus vitae dolor tristique, convallis dolor vitae, laoreet augue.
					Etiam pulvinar, elit vel condimentum vehicula, leo lectus congue
					risus, ut accumsan nisl odio eget nulla. Maecenas sodales, erat ac
					ultricies blandit, urna lectus ultricies urna, sed iaculis nulla lorem
					in velit. Quisque sit amet erat at dui auctor ornare. Mauris gravida
					condimentum risus, et ornare nibh tristique quis. Quisque nec ex sed
					massa lacinia pretium. In hac habitasse platea dictumst. Pellentesque
					habitant morbi tristique senectus et netus et malesuada fames ac
					turpis egestas. Vestibulum sit amet est justo.
				</Text>
			</View>
		</ScrollView>
	);
}

const x = StyleSheet.create({
	topbar: {
		height: 300,
		backgroundColor: "lightblue",
	},

	shoe: {
		height: 220,
		width: 220,
		position: "absolute",
		bottom: -90,
		left: 0,
	},

	btns: {
		position: "absolute",
		bottom: -30,
		right: 30,
		flexDirection: "row",
		width: 150,
		justifyContent: "space-between",
		zIndex: 1000,
	},

	button: {
		backgroundColor: "white",
		height: 60,
		width: 60,
		borderRadius: 60 / 2,
		justifyContent: "center",
		alignItems: "center",
		elevation: 4,
	},

	bottombar: {
		zIndex: -10,
		height: 500,
		backgroundColor: "white",
		padding: 20,
		paddingTop: 80,
	},

	name_price: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-end",
		marginBottom: 30,
	},

	name: {
		fontFamily: "Raleway",
		fontSize: 20,
	},

	price: {
		fontFamily: "RalewayBold",
		fontSize: 25,
		marginRight: 15,
	},

	sizes: {
		flexDirection: "row",
		alignItems: "flex-end",
		marginBottom: 30,
	},

	size: {
		padding: 5,
		justifyContent: "center",
		alignItems: "center",
		elevation: 3,
		borderRadius: 5,
		height: 40,
		width: 35,
		marginRight: 20,
	},

	size_txt: {
		// fontFamily: "Raleway",
		fontWeight: "bold",
	},

	badge: {
		position: "absolute",
		top: -6,
		right: -7,
		borderRadius: 18 / 2,
		height: 18,
		width: 18,
		backgroundColor: "#f2476a",
	},

	desc: {
		// borderWidth: 1,
		// fontSize: 15,
	},
});
