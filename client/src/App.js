import React, { useState } from "react";
import {
	ApolloClient,
	InMemoryCache,
	ApolloProvider,
	createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Footer from "./components/Footer";

import "./css/App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
	fab,
	faLinkedin,
	faGit,
	faFirefoxBrowser,
} from "@fortawesome/free-brands-svg-icons";
library.add(fab, faLinkedin, faGit, faFirefoxBrowser);

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
	uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
	// get the authentication token from local storage if it exists
	const token = localStorage.getItem("id_token");
	// return the headers to the context so httpLink can read them
	return {
		headers: {
			...headers,
			authorization: token ? `Bearer ${token}` : "",
		},
	};
});

const client = new ApolloClient({
	// Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
	link: authLink.concat(httpLink),
	cache: new InMemoryCache(),
});
function App() {
	const [currentPage, setCurrentPage] = useState("About");

	const renderPage = () => {
		if (currentPage === "About") {
			return <About title="About"></About>;
		}
		if (currentPage === "Portfolio") {
			return <Portfolio title="Portfolio"></Portfolio>;
		}
		if (currentPage === "Resume") {
			return <Resume title="Resume"></Resume>;
		}
		if (currentPage === "Contact") {
			return <Contact title="Contact"></Contact>;
		}
		if (currentPage === "Signup") {
			return (
				<Signup
					title="Contact"
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				></Signup>
			);
		}
		if (currentPage === "Login") {
			return (
				<Login
					title="Login"
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				></Login>
			);
		}
	};

	// create handlePageChange method to set the state
	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="App d-flex flex-column justify-content-between">
					{/* Pass Variables through to navbar */}
					<Navbar
						currentPage={currentPage}
						handlePageChange={handlePageChange}
					></Navbar>

					{/* Render component based off currentPage state */}
					{renderPage()}

					<div className="">
						<Footer className=""></Footer>
					</div>
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
