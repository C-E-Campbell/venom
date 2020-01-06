import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Biography from "./pages/Biography";
import Power from "./pages/Power";
import Images from "./pages/Images";
export default class App extends Component {
	render() {
		return (
			<Switch>
				<Route path='/' exact component={Hero} />
				<Route path='/bio' component={Biography} />
				<Route path='/power' component={Power} />
				<Route path='/images' component={Images} />
			</Switch>
		);
	}
}
