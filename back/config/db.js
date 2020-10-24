const mongoose = require('mongoose');

const connectDB = async () => {

	let uri;

	if (process.env.NODE_ENV.trim() == 'dev') {
		uri = process.env.MONGODB_URI_DEV;		// change to _DEV
	} else if (process.env.NODE_ENV.trim() === 'test') {
		uri = process.env.MONGODB_URI_TEST;
	}
	if (process.env.NODE_ENV.trim() === 'pro') {
		uri = process.env.MONGODB_URI_DEV;
	}

	const conn = await mongoose.connect(uri, {
		useNewUrlParser: true,
		useCreateIndex: true,
		useFindAndModify: false,
		useUnifiedTopology: true,
	});

	console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;