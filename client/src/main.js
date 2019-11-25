import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

//Import Frameworks
import './../node_modules/bulma/css/bulma.css';
import '@/assets/global-styles.css';

//Import Components
import Index from '@/pages/Home.vue';
import Test from '@/pages/Test.vue';

//Define a route for a component
const routes = [
	{
		path: '/',
		component: Index,
		meta: {
			title: 'Home'
		}
	},
	{ path: '/test', component: Test }
];

//Instantiate Router
const router = new VueRouter({
	mode: 'history',
	routes
});

//Run code before each route update
router.beforeEach((to, from, next) => {
	document.title = to.meta.title ? `Shyft: ${to.meta.title}` : 'Shyft';
	next();
});

//Instantiate app
import App from './App.vue';

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router
}).$mount('#app');
