import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

//Import Frameworks
import './../node_modules/bulma/css/bulma.css';

//Import Components
import Index from '@/pages/Home.vue';
import Test from '@/pages/Test.vue'

//Define a route for a component
const routes = [{ path: '/', component: Index },
{path: '/test', component: Test}];

//Instantiate Router
const router = new VueRouter({
	mode: 'history',
	routes
});

//Instantiate app
import App from './App.vue';

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router
}).$mount('#app');
