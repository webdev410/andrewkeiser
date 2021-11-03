import React, { useEffect, useState } from "react";
import ReadMoreContent from "../components/About/ReadMoreContent";
import "../css/About.css";

export default function About(props) {
	useEffect(() => {
		document.title = `${props.title} | React Portfolio`;
	});
	const [showReadMore, setShowReadMore] = useState(false);
	const toggleReadMore = (event) => {
		event.preventDefault();
		if (showReadMore === true) {
			setShowReadMore(false);
		} else {
			setShowReadMore(true);
		}
	};

	return (
		<div className="fadeIn">
			<div className="px-4 py-5 my-5 text-center">
				<img
					className="profile-pic d-block mx-auto mb-4"
					src="img/andrew.png"
					alt=""
				/>
				<h1 className="display-5 fw-bold">About</h1>

				<div className="col-lg-7 mx-auto">
					<p>
						I recently obtained a certificate in Full-Stack
						Development from Johns Hopkins University and am
						currently seeking full-time employment as a software
						developer. I have a background in IT working as Network
						Operations and Technical Support amongst other roles.
						I’ve always had a knack for technology but I feel I’ve
						finally found my calling with software development. I
						feel confident with the front and backend technologies
						that were covered in this course and I worked very hard
						to maintain an A+ academic average and to develop my
						skills beyond the typical boot camp graduate.
					</p>
					<div className="d-flex justify-content-center">
						{showReadMore ? <ReadMoreContent /> : null}
					</div>
					<div className="d-flex justify-content-center">
						<button
							className="readMoreBtn nav-link"
							onClick={toggleReadMore}
						>
							{!showReadMore ? "Read More..." : "Show Less..."}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
