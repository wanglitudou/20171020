import '../css/reset.css';
import Vue from 'vue';
import axios from './axios';
import app from './app.vue';
import router from '../routes/route1';
import store from './store';



// var abc={
// 	install:function(vue){
// 		console.log(vue);
// 		vue.test=function(){
// 			console.log('test');
// 		};
// 		vue.prototype.$http=function(){
// 			console.log('here is data');
// 		}
// 	}
// }
// Vue.use(abc);

// Vue.prototype.$http=function(){
// 	console.log('$http');
// }
new Vue({
	el:'.box',
	router:router,
	store:store,
	render:function(createElement){
		return createElement(app)
	},
	mounted:function(){
		// this.$http.get('data/range.json').then(function(res){
		// 	console.log(res.data.list);
		// })
		//Vue.test();
		//this.$http();
	}
})
if(module.hot){
	module.hot.accept();
}