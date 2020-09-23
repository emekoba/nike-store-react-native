// @refresh reset
import { YellowBox } from "react-native";
import * as firebase from "firebase";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyAaFEIKGkIRPf4zFMdsXZhg2_vFM-fw8jQ",
	authDomain: "nikestore.firebaseapp.com",
	databaseURL: "https://nikestore.firebaseio.com",
	projectId: "nikestore",
	storageBucket: "nikestore.appspot.com",
	messagingSenderId: "393384369267",
	appId: "1:393384369267:web:7e505781722b52d77c5e06",
};

if (!firebase.apps.length) {
	firebase.initializeApp(config);
}

YellowBox.ignoreWarnings(["Setting a timer for a long period of time"]);

export const auth = firebase.auth();
export const fs = firebase.firestore();
export const rdb = firebase.database();
