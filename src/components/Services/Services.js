import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import {
	faCode,
	faDesktop,
	faMagnifyingGlass,
	faRocket,
	faScrewdriverWrench,
} from '@fortawesome/free-solid-svg-icons';
import './Services.scss';

const serviceList = [
	{
		title: 'Website Development',
		icon: faCode,
	},
	{
		title: 'WordPress Themes & Plugins',
		icon: faWordpress,
	},
	{
		title: 'UX / UI Design',
		icon: faDesktop,
	},
	{
		title: 'Search Engine Optimization',
		icon: faMagnifyingGlass,
	},
	{
		title: 'Page Speed Optimization',
		icon: faRocket,
	},
	{
		title: 'Website Maintenance',
		icon: faScrewdriverWrench,
	},
];

const Services = () => {
	return (
		<div className="services">
			{serviceList.map((item) => {
				return (
					<div key={item.title} className="service">
						<div className="service-icon">
							<FontAwesomeIcon icon={item.icon} />
						</div>
						<h4 className="service-title">{item.title}</h4>
					</div>
				);
			})}
		</div>
	);
};

export default Services;
