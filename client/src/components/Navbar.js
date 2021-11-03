import React from "react";
import Auth from "../utils/auth";

export default function Navbar({ currentPage, handlePageChange }) {
	const logout = (event) => {
		event.preventDefault();
		Auth.logout();
	};
	return (
		<div>
			{/* Links when logged in */}
			<div className=" ">
				{Auth.loggedIn() ? (
					<div className="nav nav-pills nav-fill">
						<a
							className={
								currentPage === "About"
									? "nav-link active"
									: "nav-link"
							}
							href="#about"
							onClick={() => handlePageChange("About")}
						>
							About
						</a>
						<a
							className={
								currentPage === "Portfolio"
									? "nav-link active"
									: "nav-link"
							}
							href="#portfolio"
							onClick={() => handlePageChange("Portfolio")}
						>
							Portfolio
						</a>
						<a
							className={
								currentPage === "Resume"
									? "nav-link active"
									: "nav-link"
							}
							href="#resume"
							onClick={() => handlePageChange("Resume")}
						>
							Resume
						</a>
						<a
							className={
								currentPage === "Contact"
									? "nav-link active"
									: "nav-link"
							}
							href="#contact"
							onClick={() => handlePageChange("Contact")}
						>
							Contact
						</a>
						<a
							className={
								currentPage === "Logout"
									? "nav-link active"
									: "nav-link"
							}
							href="#logout"
							onClick={logout}
						>
							Logout
						</a>
					</div>
				) : (
					<div className="nav nav-pills nav-fill">
						<a
							className={
								currentPage === "About"
									? "nav-link active"
									: "nav-link"
							}
							href="#about"
							onClick={() => handlePageChange("About")}
						>
							About
						</a>
						<a
							className={
								currentPage === "Portfolio"
									? "nav-link active"
									: "nav-link"
							}
							href="#portfolio"
							onClick={() => handlePageChange("Portfolio")}
						>
							Portfolio
						</a>
						<a
							className={
								currentPage === "Resume"
									? "nav-link active"
									: "nav-link"
							}
							href="#resume"
							onClick={() => handlePageChange("Resume")}
						>
							Resume
						</a>
						<a
							className={
								currentPage === "Contact"
									? "nav-link active"
									: "nav-link"
							}
							href="#contact"
							onClick={() => handlePageChange("Contact")}
						>
							Contact
						</a>
						<a
							className={
								currentPage === "Signup" || "Login"
									? "nav-link active"
									: "nav-link"
							}
							href="#signup"
							onClick={() => handlePageChange("Signup")}
						>
							Login/Signup
						</a>
					</div>
				)}
			</div>
		</div>
	);
}
