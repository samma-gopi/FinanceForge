const mongoose = require('mongoose');

const userSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: [true, 'Please add a name'],
		},
		email: {
			type: String,
			required: [true, 'Please add an email'],
			unique: true,
		},
		password: {
			type: String,
			required: [true, 'Please add a password'],
		},
		preferences: {
			darkMode: Boolean,
			currency: {
				name: { type: String, default: 'rupee' },
				value: { type: String, default: 'inr' },
				label: { type: String, default: '₹' },
				locale: { type: String, default: 'en-inr' },
			},
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('User', userSchema);
