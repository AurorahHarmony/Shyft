require('dotenv').config();

//Global Constants
const serverPort = process.env.PORT || 3001;

//Require Express Packages
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const cors = require('cors');

//Connect to MongoDB
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGO_DB, { useNewUrlParser: true });

//Express configuration
const app = express();

// app.set('view engine', 'ejs');
// app.use('/src', express.static('public/src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//Passport Configuration
const passport = require('passport');
const session = require('express-session');

app.use(session({ secret: process.env.SESSION_SECRET, resave: false, saveUninitialized: false }));
app.use(passport.initialize());
app.use(passport.session());

//Initalize flasher so that it can be stored in session data
// const flash = require('connect-flash');
// app.use(flash());

//Initialize Passport
const initPassport = require('../passport/init');
initPassport(passport);

//Load Routes
const fs = require('fs');
const path = require('path');

function findInDir(dir, filter, fileList = []) {
	const files = fs.readdirSync(dir);

	files.forEach(file => {
		const filePath = path.join(dir, file);
		const fileStat = fs.lstatSync(filePath);

		if (fileStat.isDirectory()) {
			findInDir(filePath, filter, fileList);
		} else if (filter.test(filePath)) {
			fileList.push(filePath.replace(__dirname, ''));
		}
	});

	return fileList;
}

const routes = findInDir(__dirname + '/routes', /\.js$/);
routes.forEach(file => {
	let newRoute = require('.' + file);
	app.use(newRoute.route, newRoute.methods(passport));
});

//Server Error Handling
app.use((req, res, next) => {
	return res.status(404).send('Could not find the specified url. 404');
});

app.use((err, req, res, next) => {
	return res.status(500).send('Server Error. 500');
});

//Open listening port for server requests
app.listen(serverPort, err => {
	console.log(`Server has started on port ${serverPort}`);
});
