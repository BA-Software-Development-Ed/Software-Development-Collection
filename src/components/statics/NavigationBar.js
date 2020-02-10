import React from 'react';
import { Link } from 'react-router-dom';

export default ({ location }) => {
	const setClass = (path) => location.pathname === path && 'target';

	return (
		<div className="navigation-bar">
			<Link to="/" className={setClass('/')}>
				home
			</Link>
			<Link to="/databases" className={setClass('/databases')}>
				databases
			</Link>
			<Link to="/artificial-intelligence" className={setClass('/artificial-intelligence')}>
				artificial intelligence
			</Link>
			<Link to="/tetsing" className={setClass('/tetsing')}>
				tetsing
			</Link>
			<Indicator />
		</div>
	);
};

const Indicator = () => <div className="indicator" />;
