const express = require('express');
const router = express.Router();

const thisRoute = '/api/products';

//Routes
module.exports = {
	route: thisRoute,
	methods: passport => {
		router.get('/', (req, res) => {
			res.send('yeet');
		});

		return router;
	}
};
