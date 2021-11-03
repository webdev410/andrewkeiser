import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faHtml5,
	faReact,
	faJs,
	faBootstrap,
	faNodeJs,
	faNpm,
	faGithub,
	faCss3,
	faMarkdown,
} from "@fortawesome/free-brands-svg-icons";

export default function Technologies() {
	return (
		<div>
			<div className="container col-xxl-8 px-4 py-5">
				<div className="row flex-lg-row-reverse align-items-center g-5 py-5">
					<div className="col-12 col-sm-8 col-lg-6">
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faHtml5}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faCss3}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faGithub}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faMarkdown}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faReact}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faJs}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faBootstrap}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faNodeJs}
						></FontAwesomeIcon>
						<FontAwesomeIcon
							className="techIcon m-3"
							icon={faNpm}
						></FontAwesomeIcon>
					</div>
					<div className="col-lg-6">
						<h1 className="display-5 fw-bold lh-1 mb-3">
							Technologies
						</h1>
						<p className="lead">
							HTML, HTML5, CSS, Git, JavaScript, jQuery,
							Bootstrap, AJAX, Web APIs, Third-Party APIs,
							Server-Side APIs, Node.js, Object-Oriented
							Programming, Media Queries, JSON, React
						</p>
						<div className="d-grid gap-2 d-md-flex justify-content-center">
							<a
								href="assets/andrew-keiser-technical-skills.docx"
								download="andrew-keiser-technical-skills.docx"
							>
								<button
									type="button"
									className="btn btn-outline-secondary btn-lg px-4"
								>
									Download Technologies
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
