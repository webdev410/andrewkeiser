import React, { useState, useEffect } from "react";

import "../css/Resume.css";

import Technologies from "../components/Resume/ResumeTechnologies";
import ResumeMain from "../components/Resume";
import ResumeNav from "../components/Resume/ResumeNav";
import ResumeExperience from "../components/Resume/ResumeExperience";
import ResumeEducation from "../components/Resume/ResumeEducation";

export default function Resume(props) {
	const [currentModule, setModule] = useState("title");

	const renderModule = () => {
		if (currentModule === "technologies") {
			return <Technologies></Technologies>;
		}
		if (currentModule === "education") {
			return <ResumeEducation></ResumeEducation>;
		}
		if (currentModule === "experience") {
			return <ResumeExperience></ResumeExperience>;
		} else {
			return <ResumeMain title="Resume"></ResumeMain>;
		}
	};
	const handleModuleChange = (module) => setModule(module);
	useEffect(() => {
		document.title = `${props.title} | React Portfolio`;
	});
	return (
		<div className="fadeIn">
			<div className="d-flex flex-column justify-content-between">
				<div>{renderModule()}</div>

				<ResumeNav
					currentModule={currentModule}
					handleModuleChange={handleModuleChange}
				></ResumeNav>
			</div>
		</div>
	);
}
