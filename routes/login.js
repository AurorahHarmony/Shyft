const express = require('express');
const router = express.Router();

const thisRoute = '/login';

//Routes
module.exports = {
	route: thisRoute,
	methods: passport => {
		router.get('/', (req, res) => {
			res.send('this is a login page');
		});

		return router;
	}
};
