import React from "react";

export default function ResumeNav({ currentModule, handleModuleChange }) {
	return (
		<div className="fixed-top mt-5 ">
			<div class="container-fluid">
				<header class="d-flex justify-content-center py-3">
					<ul class="nav nav-pills">
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "title"
										? "nav-link active"
										: "nav-link"
								}
								href="#title"
								onClick={() => handleModuleChange("title")}
							>
								Resume
							</a>
						</li>
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "education"
										? "nav-link active"
										: "nav-link"
								}
								href="#education"
								onClick={() => handleModuleChange("education")}
							>
								Education
							</a>
						</li>
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "experience"
										? "nav-link active"
										: "nav-link"
								}
								href="#experience"
								onClick={() => handleModuleChange("experience")}
							>
								Experience
							</a>
						</li>
						<li class="nav-item">
							<a
								// if this is the current page, set to active link otherwise just be a nav-link
								className={
									currentModule === "technologies"
										? "nav-link active"
										: "nav-link"
								}
								href="#technologies"
								onClick={() =>
									handleModuleChange("technologies")
								}
							>
								Technologies
							</a>
						</li>
					</ul>
				</header>
			</div>
		</div>
	);
}
