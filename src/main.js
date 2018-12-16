import Vue from 'vue'
import App from './App.vue'
import {store} from './store'
import {routes} from './routes/routes'
import VueRouter from 'vue-router'
import axios from 'axios'



console.log('store---------------->',store);

function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}
console.log(makeid());

//axios
axios.defaults.baseURL='http://localhost:3000';
 axios.defaults.headers.common['ticket']=store.state.user.ticket;

axios.interceptors.request.use(function(config) {
  
  let reqId = makeid();
  config.headers['reqId'] = reqId;
  config.headers['Access-Control-Allow-Origin']='*';
  console.log('OUT GOING HEADER ------>')
  console.log('config',config);
  
  
  store.dispatch('startLoading',reqId);
  console.log('after lodaing');
  
  return config;

}, function(err) {
 // dispatch('setResMessages',{error:'network connection error!'});
  err.response.data.error='network connection error!'
  return Promise.reject(err);
});

axios.interceptors.response.use(function(res){

  //store.state.loading.endRequest=true;

  console.log("------------------------------------------>",res)
  console.log(res)
  store.dispatch('endLoading',res.config.headers);
  console.log('response',res);
  
  return res;
},function(err) {

  return Promise.reject(err);
});

//router
Vue.use(VueRouter);
export const router =new VueRouter({routes,mode:'history'})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})