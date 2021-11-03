import React from "react";

export default function ResumeExperience() {
	return (
		<div>
			<h1 className="display-5 fw-bold">Experience</h1>

			<div className="row g-4 py-5 row-cols-1 row-cols-lg-4">
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/godaddy.png"
							className="university-logo"
							alt="GoDaddy Logo"
						/>
						<h2 className="mt-3">GoDaddy</h2>
						<p>Hosting Sales & Support</p>
					</div>
				</div>
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/dhs.png"
							className="university-logo"
							alt="DHS Logo"
						/>
						<h2 className="mt-3">
							Department of Homeland Security
						</h2>
						<p>Technical Support</p>
					</div>
				</div>
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/ticketmaster.png"
							className="university-logo"
							alt="Ticketmaster Logo"
						/>
						<h2 className="mt-3">Ticketmaster</h2>
						<p>Product Support</p>
					</div>
				</div>
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/apple.png"
							className="university-logo"
							alt="Apple Logo"
						/>
						<h2 className="mt-3">Apple</h2>
						<p>AppleCare Advisor</p>
					</div>
				</div>
			</div>
		</div>
	);
}
