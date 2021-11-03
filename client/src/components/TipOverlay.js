import React from "react";
import { Tooltip } from "react-bootstrap";
import { OverlayTrigger } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faGithub,
	faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/pro-regular-svg-icons";

export default function TipOverlay() {
	const sites = [
		{
			name: "Github",
			url: "https://github.com/webdev410",
		},
		{
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/andrew-keiser-1/",
		},
		{
			name: "Instagram",
			url: "https://www.instagram.com/andrewkeiser_/",
		},
		{
			name: "Facebook",
			url: "https://www.facebook.com/akeiser0",
		},
		{
			name: "Email",
			url: "mailto:info@andrewkeiser.me",
		},
	];

	const renderIcon = (sites) => {
		if (sites.name === "Github") {
			return <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>;
		}
		if (sites.name === "LinkedIn") {
			return <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>;
		}
		if (sites.name === "Facebook") {
			return <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>;
		}
		if (sites.name === "Instagram") {
			return <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>;
		}
		if (sites.name === "Email") {
			return <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>;
		}
	};
	return (
		<div className="d-flex flex-row">
			{sites.map((site) => (
				<li className="ms-3">
					<OverlayTrigger
						key={site.name}
						placement="top"
						overlay={
							<Tooltip id={`tooltip-${site.name}`}>
								{site.name}
							</Tooltip>
						}
					>
						<button className="footer-icon">
							<a
								className="text-muted"
								target="blank"
								href={site.url}
							>
								{renderIcon(site)}
							</a>
						</button>
					</OverlayTrigger>
				</li>
			))}
		</div>
	);
}
