const express = require('express');
const router = express.Router();

const thisRoute = '/';

//Routes
module.exports = {
	route: thisRoute,
	methods: passport => {
		router.get('/', async (req, res) => {
			console.log('beep');

			res.send('Neigh');
		});

		return router;
	}
};
