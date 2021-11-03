import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileWord, faFilePdf } from "@fortawesome/pro-light-svg-icons";
export default function ResumeMain(props) {
	return (
		<div>
			<div className="px-4 py-5 my-5 text-center">
				<h1 className="display-5 fw-bold">{props.title}</h1>
				<div className="col-lg-6 mx-auto">
					<p className="lead">Thank you for viewing my portfolio.</p>

					<p className="text-muted">
						Download a printable copy of my resume
					</p>
					<div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
						<a
							href="assets/andrew-keiser-resume.docx"
							download="andrew-keiser-resume.docx"
						>
							<button
								type="button"
								className="btn btn-outline-secondary px-4 gap-3 download-btn"
							>
								<FontAwesomeIcon
									icon={faFileWord}
								></FontAwesomeIcon>
							</button>
						</a>
						<a
							href="assets/andrew-keiser-resume.pdf"
							download="andrew-keiser-resume.pdf"
						>
							<button
								type="button"
								className="btn btn-outline-secondary px-4 download-btn"
							>
								<FontAwesomeIcon
									icon={faFilePdf}
								></FontAwesomeIcon>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
