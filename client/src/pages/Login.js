import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = ({ title, currentPage, handlePageChange }) => {
	useEffect(() => {
		document.title = `${title} | React Portfolio`;
	});
	const [formState, setFormState] = useState({ email: "", password: "" });
	const [login, { error, data }] = useMutation(LOGIN_USER);

	// update state based on form input changes
	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormState({
			...formState,
			[name]: value,
		});
	};

	// submit form
	const handleFormSubmit = async (event) => {
		event.preventDefault();
		console.log(formState);
		try {
			const { data } = await login({
				variables: { ...formState },
			});

			Auth.login(data.login.token);
		} catch (e) {
			console.error(e);
		}

		// clear form values
		setFormState({
			email: "",
			password: "",
		});
	};

	return (
		<main className="d-flex justify-content-center mb-4">
			<div className="col-12 col-lg-6">
				<div className="card">
					<h4 className="card-header p-2">Login</h4>
					<div className="card-body">
						{data ? (
							<p>
								Success! You may now head{" "}
								<Link to="/">back to the homepage.</Link>
							</p>
						) : (
							<form onSubmit={handleFormSubmit}>
								<input
									className="form-control mb-2"
									placeholder="Your email"
									name="email"
									type="email"
									value={formState.email}
									onChange={handleChange}
								/>
								<input
									className="form-control mb-2"
									placeholder="******"
									name="password"
									type="password"
									value={formState.password}
									onChange={handleChange}
								/>
								<button
									className="btn btn-sm m-2 btn-primary"
									style={{ cursor: "pointer" }}
									type="submit"
								>
									Submit
								</button>
							</form>
						)}
						{error && (
							<div className="my-3 p-3 bg-danger text-white">
								{error.message}
							</div>
						)}
						Not yet a member?
						<a
							className={
								currentPage === "Signup"
									? "signupLogin my-3 nav-link active"
									: "signupLogin my-3 nav-link"
							}
							href="#signup"
							onClick={() => handlePageChange("Signup")}
						>
							Signup
						</a>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Login;
