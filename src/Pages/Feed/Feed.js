import React, { useContext, useEffect, useState } from "react";
import {
	View,
	StyleSheet,
	Image,
	FlatList,
	ActivityIndicator,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Resources } from "../../Resources/Resources";
import { Brim } from "../../State/Control";
import { fs, rdb } from "../../Components/Functional/Firebase";
import Cart from "../Cart/Cart";
import Post from "../../Components/Functional/Post";
import Description from "./Description";

export default function Feed() {
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
			<Stack.Screen
				name="Main"
				component={Main}
				options={{
					cardStyle: { backgroundColor: "white" },
				}}
			/>
			<Stack.Screen name="Description" component={Description} />
			<Stack.Screen name="Cart" component={Cart} />
		</Stack.Navigator>
	);
}

function Main({ navigation }) {
	navigation.setOptions({
		headerLeft: null,
		headerStyle: {
			borderBottomLeftRadius: 30,
			borderBottomRightRadius: 30,
		},
		headerTitle: (
			<Image source={Resources.logo} style={x.logo} resizeMode="contain" />
		),
		headerTitleStyle: {
			height: 50,
			alignItems: "center",
		},
		headerTitleAlign: "center",
	});

	const [control, setcontrol] = useContext(Brim);

	const [posts, setposts] = useState();

	const [load, setload] = useState(true);

	const [endload, setendload] = useState(false);

	useEffect(() => {
		// fs.collection("feed")
		// 	.get()
		// 	.then((snapshot) => {
		// 		let changes = snapshot.docChanges();
		// 		changes.forEach((change) => {
		// 			if (change.type === "added") {
		// 				renderList(change.doc);
		// 			}
		// 		});
		// 	});

		setposts([getPosts()]);

		// setTimeout(() => {
		setload(false);
		// }, 3000);
	}, []);

	function renderList(doc) {
		console.log(doc.data());

		// setidea(doc.data().scribbly[0]);
	}

	function loadMore() {
		setendload(true);
	}

	function getPosts() {
		let x = -1;
		return (
			<FlatList
				data={control.feed}
				keyExtractor={(item) => item.name}
				showsVerticalScrollIndicator={false}
				onEndReached={loadMore}
				ListFooterComponent={<View style={{ height: 50 }} />}
				renderItem={({ item }) => {
					x++;

					return (
						<Post
							from="feed"
							navigation={navigation}
							name={item.name}
							image={item.image}
							prevPrice={item.previousPrice}
							price={item.price}
							liked={item.liked}
							added={item.added}
							toggleCart={toggleCart}
							toggleLike={toggleLike}
							index={x}
						/>
					);
				}}
			/>
		);
	}

	function toggleLike(name) {
		let newFeed = JSON.parse(JSON.stringify(control.feed));

		control.feed.map((each) => {
			if (each.name === name) {
			}
		});

		setcontrol({ ...control, feed: newFeed });

		// control.feed.map((each) => {
		// 	if (each.name === name) {
		// 		setcontrol({
		// 			...control,
		// 			feed: [
		// 				...control.feed,
		// 				{
		// 					name: each.name,
		// 					image: each.image,
		// 					previousPrice: each.previousPrice,
		// 					price: each.price,
		// 					liked: true,
		// 					added: each.added,
		// 				},
		// 			],
		// 		});
		// 	}
		// });
	}

	function toggleCart(name) {}

	return (
		<>
			{load === true ? (
				<View style={x.load}>
					<ActivityIndicator color="#8293ee" size={50} />
				</View>
			) : (
				<>
					<View style={x.feed}>{posts}</View>

					{/* {endload === true && <ActivityIndicator color="#8293ee" />} */}
				</>
			)}
		</>
	);
}

const x = StyleSheet.create({
	load: { flex: 1, justifyContent: "center", alignItems: "center" },

	logo: {
		width: 40,
		height: 30,
	},

	feed: {
		flex: 1,
		paddingLeft: 20,
		paddingRight: 20,
	},
});
