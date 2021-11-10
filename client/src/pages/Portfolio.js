import React, { useEffect } from "react";
import "../css/Portfolio.css";

import PortfolioCard from "../components/PortfolioCard";

const portfolioItems = [
	{
		title: "HTML Portfolio",
		repo: "https://github.com/webdev410/andrewkeiser-portfolio",
		deployed: "https://www.andrewkeiser.me/",
	},
	{
		title: "Video Streaming Application",
		repo: "https://github.com/Demo-Day/team-stream",
		deployed: "https://team-stream-demo.herokuapp.com/",
	},
	{
		title: "Invoicing System",
		repo: "https://github.com/webdev410/invoice-system",
		deployed: "https://invoice-tech.herokuapp.com/",
	},
	{
		title: "Note Taker Application",
		repo: "https://github.com/webdev410/notes-app",
		deployed: "https://salty-fortress-76405.herokuapp.com/",
	},
	{
		title: "CMS Blog",
		repo: "https://www.github.com/webdev410/blog",
		deployed: "https://secure-spire-42375.herokuapp.com/",
	},
	{
		title: "Workout Tracker",
		repo: "https://github.com/webdev410/workout-tracker-app",
		deployed: "https://mongoose-workout-plan.herokuapp.com/",
	},
	{
		title: "Budget Tracker",
		repo: "https://github.com/webdev410/budget-tracker",
		deployed: "https://budget-trx.herokuapp.com/",
	},
	{
		title: "Team Profile Generator",
		repo: "https://github.com/webdev410/team-profile-generator",
		deployed: "#",
	},
	{
		title: "Employee Tracker",
		repo: "https://github.com/webdev410/employee-tracker",
		deployed: "#",
	},
	{
		title: "eCommerce Backend",
		repo: "https://github.com/webdev410/ecommerce-backend",
		deployed: "#",
	},
];

export default function Portfolio(props) {
	useEffect(() => {
		document.title = `${props.title} | React Portfolio`;
	});
	return (
		<div className="fadeIn ">
			<h1 className="display-5 fw-bold">{props.title}</h1>
			<div className="container">
				<p>Thank you for viewing my portfolio. </p>
				<p>
					For questions, please fill out the form on the contact page
					or email me at{" "}
					<a href="mailto:info@andrewkeiser.me">
						info@andrewkeiser.me
					</a>
					.
				</p>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
					{portfolioItems.map((site) => (
						<PortfolioCard
							key={site.title}
							title={site.title}
							repo={site.repo}
							deployed={site.deployed}
						></PortfolioCard>
					))}
				</div>
			</div>
		</div>
	);
}
