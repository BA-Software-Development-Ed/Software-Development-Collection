import React, { useState } from 'react';
import '../sass/App.scss';

import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { Home, Databases, ArtificialIntelligence, Testing } from './routes/RoutesBundle';
import { NavigationBar, Footer } from './statics/StaticBundle';

export default () => {
	const [location, setLocation] = useState('');

	return (
		<div className="App">
			<Router>
				<NavigationBar />
				<Routes setLocation={setLocation} />
				<Footer />
			</Router>
		</div>
	);
};

const Routes = ({ setLocation }) => {
	const location = useLocation();
	setLocation(location);

	return (
		<TransitionGroup className="main">
			<CSSTransition key={location.key} className="fade" timeout={500}>
				<Switch location={location}>
					<Route exact path="/" component={Home} />
					<Route exact path="/databases" component={Databases} />
					<Route exact path="/artificial-intelligence" component={ArtificialIntelligence} />
					<Route exact path="/Testing" component={Testing} />
				</Switch>
			</CSSTransition>
		</TransitionGroup>
	);
};
