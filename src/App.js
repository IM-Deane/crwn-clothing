import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-sign-up/sign-in-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends Component {
	constructor() {
		super();

		this.state = {
			currentUser: null,
		};
	}

	// **** SUBSCRIPTION to user authentication state changes ****

	unsubscribeFromAuth = null;

	componentDidMount() {
		// user subscription
		this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
			if (userAuth) {
				const userRef = await createUserProfileDocument(userAuth);

				userRef.onSnapshot((snapshot) => {
					this.setState({
						currentUser: {
							id: snapshot.id,
							...snapshot.data(),
						},
					});
					console.log(this.state);
				});
			}
			// Set user to null
			else {
				this.setState({ currentUser: userAuth });
			}
		});
	}

	componentWillUnmount() {
		// End subscription after component unmounted
		this.unsubscribeFromAuth();
	}

	// **** End of SUBSCRIPTION ****

	render() {
		return (
			<div>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route path="/shop" component={ShopPage} />
					<Route path="/signin" component={SignInAndSignUp} />
				</Switch>
			</div>
		);
	}
}

export default App;
