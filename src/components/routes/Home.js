import React from 'react';
import { Link } from 'react-router-dom';

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
			<h2>Bachelor</h2>
			<h3>Software Development</h3>
		</div>
	);
};

const Subjects = () => {
	return (
		<div className="subjects">
			<Subject title="Tetsing" description="" image="" direct="/testing" />
			<Subject title="Artificial Intelligence" description="" image="" direct="/artificial-intelligence" />
			<Subject title="Databases" description="" image="" direct="/databases" />
		</div>
	);
};

const Subject = ({ title, description, image, direct }) => {
	return (
		<Link to={direct} className="subject">
			<span>{title}</span>
			<img src={image} alt="img" height="20" />
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
			<a href="https://www.cphbusiness.dk/media/78342/pba_soft_cba_curriculum_2017.pdf">
				Software Development Curriculum
			</a>
		</div>
	);
};
