import React, { useContext, useEffect, useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	TouchableOpacity,
	TouchableNativeFeedback,
	Image,
	Keyboard,
} from "react-native";
import Icon from "../../Components/Style/Icon";
import { Resources } from "../../Resources/Resources";
import { auth } from "../../Components/Functional/Firebase";
import { Brim } from "../../State/Control";

export default function Login({ navigation }) {
	const [control, setcontrol] = useContext(Brim);

	const [user, setuser] = useState({
		name: "Russell",
		email: "",
		password: "",
		remember: true,
	});

	useEffect(() => {
		// navigation.navigate("Pages");
	});

	function toggleCheckbox() {
		setuser({ ...user, remember: !user.remember });
	}

	function login() {
		auth
			.signInWithEmailAndPassword(user.email, user.password)
			.then(() => {
				setuser({ ...user, email: "", password: "" });

				setcontrol({ ...control, username: user.name });

				navigation.navigate("Pages");
			})
			.catch((error) => {
				console.error(error);
			});
	}

	function register() {
		auth
			.createUserWithEmailAndPassword(user.email, user.password)
			.then(() => {
				setuser({ ...user, email: "", password: "" });
			})
			.catch((error) => {
				if (error.code === "auth/email-already-in-use") {
					console.log("That email address is already in use!");
				}
				if (error.code === "auth/invalid-email") {
					console.log("That email address is invalid!");
				}
				console.error(error);
			});
	}

	function quickLogin() {
		navigation.navigate("Pages");
	}

	return (
		<TouchableOpacity
			style={x.login}
			onPress={() => {
				Keyboard.dismiss();
			}}
			activeOpacity={1}
		>
			<View style={x.panel}>
				<View>
					<TextInput
						value={user.email}
						onChangeText={(text) => setuser({ ...user, email: text })}
						placeholder="email"
						style={x.input}
					/>

					<TextInput
						value={user.password}
						onChangeText={(text) => setuser({ ...user, password: text })}
						placeholder="password"
						style={x.input}
						secureTextEntry={true}
					/>
				</View>

				<View style={x.remember}>
					<TouchableNativeFeedback
						background={TouchableNativeFeedback.Ripple("black")}
						onPress={toggleCheckbox}
					>
						<View style={x.check}>
							<View style={x.tick}>
								{user.remember === true && <Icon name="check" />}
							</View>
						</View>
					</TouchableNativeFeedback>

					<Text style={x.rem_txt}>Remember me!</Text>
				</View>

				<View style={x.btns}>
					<TouchableOpacity style={x.button} onPress={login}>
						<Text style={x.b_txt}>Login</Text>
					</TouchableOpacity>

					<TouchableOpacity style={x.button} onPress={register}>
						<Text style={x.b_txt}>Register</Text>
					</TouchableOpacity>
				</View>

				<View style={x.logs}>
					<TouchableOpacity style={x.logs_btn} onPress={quickLogin}>
						<Icon name="google" />
					</TouchableOpacity>

					<TouchableOpacity style={x.logs_btn} onPress={quickLogin}>
						<Icon name="facebook" />
					</TouchableOpacity>
				</View>
			</View>

			<>
				<Image source={Resources.logo} style={x.logo} resizeMode="contain" />

				<Image
					source={Resources.shoe1}
					style={[x.shoe, [x.one]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe2}
					style={[x.shoe, [x.two]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe3}
					style={[x.shoe, [x.three]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe4}
					style={[x.shoe, [x.four]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe5}
					style={[x.shoe, [x.five]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe6}
					style={[x.shoe, [x.six]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe7}
					style={[x.shoe, [x.seven]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe8}
					style={[x.shoe, [x.eight]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe8}
					style={[x.shoe, [x.nine]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe1}
					style={[x.shoe, [x.ten]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe2}
					style={[x.shoe, [x.eleven]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe4}
					style={[x.shoe, [x.twelve]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe2}
					style={[x.shoe, [x.thirteen]]}
					resizeMode="contain"
				/>
				<Image
					source={Resources.shoe7}
					style={[x.shoe, [x.fourteen]]}
					resizeMode="contain"
				/>
			</>
		</TouchableOpacity>
	);
}

const x = StyleSheet.create({
	login: {
		flex: 1,
		backgroundColor: "#8293ee",
		justifyContent: "center",
		alignItems: "center",
	},

	panel: {
		height: 420,
		width: "70%",
		elevation: 8,
		backgroundColor: "rgba(231, 238, 241, 1.938)",
		zIndex: 3,
		justifyContent: "center",
		borderRadius: 20,
		paddingBottom: 30,
	},

	input: {
		backgroundColor: "white",
		borderRadius: 20,
		marginLeft: 25,
		marginRight: 25,
		marginBottom: 30,
		height: 40,
		paddingLeft: 30,
		paddingRight: 30,
		elevation: 2,
	},

	remember: {
		alignItems: "center",
		flexDirection: "row",
	},

	check: {
		height: 23,
		width: 23,
		margin: 10,
		marginTop: 10,
		borderWidth: 0.3,
		borderRadius: 2,
		position: "relative",
		marginLeft: 30,
		marginRight: 20,
	},

	tick: {
		position: "absolute",
		right: 2,
	},

	rem_txt: {
		fontWeight: "bold",
	},

	btns: {
		flexDirection: "row",
		justifyContent: "space-evenly",
		width: "100%",
		marginTop: 30,
	},

	button: {
		backgroundColor: "#8293ee",
		elevation: 2,
		padding: 8,
		width: 100,
		alignItems: "center",
		borderRadius: 20,
	},

	b_txt: {
		fontSize: 12,
		color: "white",
	},

	logs: {
		height: 20,
		flexDirection: "row",
		marginTop: 40,
		justifyContent: "center",
	},

	logs_btn: {
		height: 50,
		width: 50,
		borderRadius: 50 / 2,
		backgroundColor: "white",
		marginRight: 30,
		marginLeft: 30,
		elevation: 3,
		justifyContent: "center",
		alignItems: "center",
	},

	//
	//
	//
	//
	//
	//
	//
	//

	logo: {
		position: "absolute",
		top: 80,
		left: 140,
		height: 50,
	},

	shoe: {
		position: "absolute",
		height: 100,
		width: 150,
	},

	one: {
		left: 0,
		top: 50,
	},
	two: {
		right: 100,
		bottom: 30,
	},
	three: {
		left: 0,
		bottom: 30,
	},
	four: {
		right: -10,
		bottom: 200,
	},
	five: {
		right: -10,
		top: 130,
	},
	six: {
		left: 0,
		top: 230,
	},
	seven: {
		right: 0,
		bottom: 10,
	},
	eight: {
		right: 20,
		top: 30,
	},
	nine: {
		left: 0,
		bottom: 130,
	},
	ten: {
		right: 100,
		bottom: 150,
	},
	eleven: {
		right: 0,
		top: 250,
	},
	twelve: {
		left: 0,
		bottom: 330,
	},
	thirteen: {
		right: 150,
		bottom: 320,
	},
	fourteen: {
		right: 150,
		top: 150,
	},
});
