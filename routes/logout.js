const express = require('express');
const router = express.Router();

const thisRoute = '/logout';

//Routes
module.exports = {
	route: thisRoute,
	methods: passport => {
		router.get('/', (req, res) => {
			res.send("you're logging out");
		});

		return router;
	}
};
