import React from 'react';
import { Link } from 'react-router-dom';

import DatabasesIcon from '../../assets/databases-icon.png';
import AIIcon from '../../assets/ai-icon.png';
import TestingIcon from '../../assets/testing-icon.png';
import { Testing, Databases } from './RoutesBundle';

export default () => {
	return (
		<div className="main-content home-content">
			<Header />
			<Subjects />
			<Description />
		</div>
	);
};

const Header = () => {
	return (
		<div className="header">
			<h2>Software Development</h2>
			<h3>Bachelor</h3>
		</div>
	);
};

const Subjects = () => {
	return (
		<div className="subjects">
			<Subject title="Tetsing" description="" image={TestingIcon} direct="/testing" />
			<Subject title="Artificial Intelligence" description="" image={AIIcon} direct="/artificial-intelligence" />
			<Subject title="Databases" description="" image={DatabasesIcon} direct="/databases" />
		</div>
	);
};

const Subject = ({ title, description, image, direct }) => {
	return (
		<Link to={direct} className="subject">
			<span>{title}</span>
			<img src={image} alt="img" />
		</Link>
	);
};

const Description = () => {
	return (
		<div className="description">
			<p>
				This curriculum, covering the study programme for the bachelor’s degree programme in software
				development, hereinafter referred to as the study programme or the programme, is composed in compliance
				with ministerial order no. 247 of 15 March 2017: ‘Bekendtgørelse om tekniske og merkantile
				erhvervsakademiuddannelser og professionsbacheloruddannelser’ by the Danish institutions of higher
				education approved to offer the particular programme.
			</p>
			<a href="https://www.cphbusiness.dk/media/78342/pba_soft_cba_curriculum_2017.pdf">Show Document</a>
		</div>
	);
};
