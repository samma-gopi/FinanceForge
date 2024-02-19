import React from 'react';
import { FaGithub, FaLinkedin, FaCode, FaEnvelope } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import Link from './Link';
import Icon from './Icon';
import logo_dark from '../../assets/images/logo_dark.png';
import logo_light from '../../assets/images/logo_light.png';
import './styles.css';

const year = new Date(Date.now()).getFullYear();

const Footer = () => {
	const { darkMode } = useSelector((state) => state.theme);

	return (
		<div className="footer">
			<div className="footer-top">
				<div className="footer-brand-section">
					<div className="brand">
						<img
							className="footer-logo"
							src={darkMode ? logo_dark : logo_light}
							alt="logo"
						/>
						<h2>
							<span>F</span>inance<span>F</span>orge
						</h2>
					</div>
				</div>
				<div className="footer-links-container">
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Technologies</h2>
						</div>
						<ul>
							<Link url="https://www.mongodb.com/" text="MongoDB" />
							<Link url="https://expressjs.com/" text="Express.js" />
							<Link url="https://reactjs.org/" text="React.js" />
							<Link url="https://nodejs.org/" text="Node.js" />
							<Link url="https://redux-toolkit.js.org/" text="Redux-Toolkit.js" />
						</ul>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Resources</h2>
						</div>
						<ul>
							<Link
								url="https://github.com/reactchartjs/react-chartjs-2"
								text="React Chartjs 2"
							/>
							
							<Link
								url="https://fkhadra.github.io/react-toastify/introduction"
								text="React-toastify"
							/>
							<Link url="https://react-select.com/home" text="React Select" />
						</ul>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Developer</h2>
						</div>
						<ul>
							<Link
								// url="https://www.omarkraidie.com/"
								text="Sammagopi"
							/>
						
							
						</ul>
					</div>
					<div className="footer-link-section">
						<div className="link-header">
							<h2>Other</h2>
						</div>
						<ul>
							
						
							<Link
								url="https://www.moneycontrol.com/"
								text="Money control"
							/>
							<Link
								url="https://economictimes.indiatimes.com/topic/google-finance"
								text="The Economic Times"
							/>
								<Link url="https://www.investopedia.com/" text="Investopedia" />
							<Link
								url="https://www.livemint.com/"
								text="Mint"
							/>
						</ul>
					</div>
				</div>
			</div>
			<div className="footer-bottom">
				<div className="footer-icons">
					<Icon
						url="https://github.com/samma-gopi"
						icon={<FaGithub />}
						ariaLabel="faGithub"
					/>
					<Icon
						url="https://www.linkedin.com/in/kamadula-sammagopi-1a359b1b8/"
						icon={<FaLinkedin />}
						ariaLabel="Linkedin"
					/>
					<Icon
						url="ksammagopi@gmail.com"
						icon={<FaEnvelope />}
						ariaLabel="Email"
					/>
					
				</div>

				<p>
					Developed by{' '}
					<a
						href=""
						target="_blank"
						rel="noopener noreferrer"
					>
						Samma Gopi
					</a>
				</p>

				<p>
					Copyright <span className="copyright">{year}&copy;</span>Hyderabad, India. All 
					Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
