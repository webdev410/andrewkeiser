const { gql } = require("apollo-server-express");

const typeDefs = gql`
	type User {
		_id: ID!
		name: String!
		username: String!
		email: String!
		password: String!
	}

	type Message {
		_id: ID!
		name: String!
		email: String!
		message: String!
		createdAt: String
	}

	type Auth {
		token: ID!
		user: User
	}

	type Query {
		users: [User]
		user(username: String!): User
		messages(username: String): [Message]
		message(thoughtId: ID!): Message
		me: User
	}

	type Mutation {
		addUser(
			name: String!
			username: String!
			email: String!
			password: String!
		): Auth
		login(email: String!, password: String!): Auth
		addMessage(name: String!, email: String!, message: String!): Message
	}
`;

module.exports = typeDefs;
