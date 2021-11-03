const { AuthenticationError } = require("apollo-server-express");
const { User, Message } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
	Query: {
		users: async () => {
			return User.find().populate("messages");
		},
		user: async (parent, { username }) => {
			return User.findOne({ username }).populate("messages");
		},
		messages: async (parent, { username }) => {
			const params = username ? { username } : {};
			return Message.find(params).sort({ createdAt: -1 });
		},
		message: async (parent, { messageId }) => {
			return Message.findOne({ _id: messageId });
		},
		me: async (parent, args, context) => {
			if (context.user) {
				return User.findOne({ _id: context.user._id }).populate(
					"messages"
				);
			}
			throw new AuthenticationError("You need to be logged in!");
		},
	},

	Mutation: {
		addUser: async (parent, { name, username, email, password }) => {
			const user = await User.create({ name, username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });

			if (!user) {
				throw new AuthenticationError(
					"No user found with this email address"
				);
			}

			const correctPw = await user.isCorrectPassword(password);

			if (!correctPw) {
				throw new AuthenticationError("Incorrect credentials");
			}

			const token = signToken(user);

			return { token, user };
		},
		addMessage: async (parent, { name, email, message }) => {
			const newMessage = await Message.create({
				name,
				email,
				message,
			});

			return message;
		},
	},
};

module.exports = resolvers;
