import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import '@fortawesome/fontawesome-free/css/all.min.css'
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import {Species} from "./component/species/species";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Characters } from "./component/characters/characters";
import { Films } from "./component/films/films";
import { Planets } from "./component/planets/planets";
import { Starships } from "./component/starships/starships";
import {Vehicles} from "./component/vehicles/vehicles";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
					<Route exact path={"/"} component={Home} />
					<Route exact path={"/Characters"} component={Characters} />
					<Route exact path={"/species"} component={Species} />
					<Route exact path={"/films"} component={Films} />
					<Route exact path={"/Planets"} component={Planets} />
					<Route exact path={"/starships"} component={Starships} />
					<Route exact path={"/vehicles"} component={Vehicles} />
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
