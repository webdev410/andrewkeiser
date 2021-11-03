import React from "react";

export default function ResumeEducation() {
	return (
		<div>
			<h1 className="display-5 fw-bold">Education</h1>

			<div className="row g-4 py-5 row-cols-1 row-cols-lg-2">
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/jhu.png"
							className="university-logo"
							alt=""
						/>
						<h2 className="mt-2">Johns Hopkins University</h2>
						<p>
							An intensive 24-week bootcamp covering both
							front-end and back-end development.
						</p>
						<code>Academic Average: A+</code>
					</div>
				</div>
				<div className="feature col">
					<div className="feature-icon bg-gradient">
						<img
							src="img/asu.png"
							className="university-logo"
							alt=""
						/>
						<h2 className="mt-2">Arizona State University</h2>
						<p>Bachelor of Arts: English (Creative Writing)</p>
						<code>Graduation: 2014</code>
					</div>
				</div>
			</div>
		</div>
	);
}
