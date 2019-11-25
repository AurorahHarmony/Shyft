import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

Vue.config.productionTip = false;

const Foo = { template: '<div>foo</div>' };
const Bar = { template: '<div>bar</div>' };

const routes = [
	{ path: '/foo', component: Foo },
	{ path: '/bar', component: Bar }
];

const router = new VueRouter({
	mode: 'history',
	routes // short for `routes: routes`
});

import App from './App.vue';

new Vue({
	el: '#app',
	template: '<App/>',
	components: { App },
	router
}).$mount('#app');
