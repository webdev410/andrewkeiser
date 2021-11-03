const { Schema, model } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const messageSchema = new Schema({
	name: {
		type: String,
		required: "Name cannot be left blank.",
		trim: true,
	},
	email: {
		type: String,
		required: "Email cannot be left blank.",
		trim: true,
	},
	message: {
		type: String,
		required: "Message cannot be left blank.",
		minlength: 1,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: (timestamp) => dateFormat(timestamp),
	},
});

const Message = model("Message", messageSchema);

module.exports = Message;
