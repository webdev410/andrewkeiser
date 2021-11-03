import React, { useState, useEffect } from "react";
import "../css/Contact.css";
import { validateEmail } from "../utils/helpers";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_MESSAGE } from "../utils/mutations";

export default function Contact(props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const [addMessage, { error }] = useMutation(ADD_MESSAGE);

	useEffect(() => {
		document.title = `${props.title} | React Portfolio`;
	});

	const handleInputChange = (e) => {
		// Getting the value and name of the input which triggered the change
		const { target } = e;
		const inputType = target.name;
		const inputValue = target.value;

		// Based on the input type, we set the state of either email, username, and password
		if (inputType === "email") {
			setEmail(inputValue);
		} else if (inputType === "name") {
			setName(inputValue);
		} else {
			setMessage(inputValue);
		}
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		// make sure inputs are not empty
		if (name.length === 0) {
			alert("You must enter a name");
			return;
		}
		if (email.length === 0) {
			alert("You must enter a email");
			return;
		}
		if (message.length === 0) {
			alert("You must enter a message");
			return;
		}
		// check if it's a valid email
		if (!validateEmail(email)) {
			alert("Please enter a valid email");
			return;
		}

		try {
			const { data } = await addMessage({
				variables: {
					name,
					email,
					message,
				},
			});
		} catch (err) {
			console.error(err);
		}
		alert(`Thank you for your message, ${name}!`);

		// If everything goes according to plan, we want to clear out the input after a successful registration.
		setName("");
		setEmail("");
		setMessage("");
	};

	return (
		<div className="fadeIn">
			<div className="container col-xl-10 col-xxl-8 px-4 py-5">
				<div className="row align-items-center g-lg-5 py-5">
					<div className="col-lg-7 text-center text-lg-start">
						<h1 className="display-4 fw-bold lh-1 mb-3">
							Send a message
						</h1>
						<p className="col-lg-10 fs-4">
							Please allow 1-2 business days for a reply. You can
							also email me at:
						</p>
						<a href="mailto:info@andrewkeiser.me">
							info@andrewkeiser.me
						</a>
					</div>
					<div className="col-md-10 mx-auto col-lg-5">
						<form className="p-4 p-md-5 border rounded-3 bg-light">
							<div className="checkbox mb-3">
								<input
									className={
										name
											? "form-control m-1 valid"
											: "form-control m-1 invalid"
									}
									name="name"
									onChange={handleInputChange}
									placeholder="Name"
									value={name}
									required="true"
									type="text"
								/>
							</div>
							<div className="checkbox mb-3">
								<input
									className={
										email
											? "form-control m-1 valid"
											: "form-control m-1 invalid"
									}
									name="email"
									placeholder="Email"
									value={email}
									onChange={handleInputChange}
									type="text"
									required="true"
								/>
							</div>
							<div className="checkbox mb-3">
								<textarea
									className={
										message
											? "form-control m-1 valid"
											: "form-control m-1 invalid"
									}
									name="message"
									placeholder="Message"
									value={message}
									onChange={handleInputChange}
									type="text"
									required="true"
								/>
							</div>
							<button
								type="button"
								className="m-2 btn btn-primary"
								onClick={handleFormSubmit}
							>
								Submit
							</button>
						</form>
					</div>
				</div>
			</div>
			<div className="form-signin">
				<div className="d-flex justify-content-center">
					<form className="needs-validation" action="POST"></form>
				</div>
			</div>
		</div>
	);
}
