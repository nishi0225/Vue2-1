import Vue from 'vue';
import Router from 'vue-router';
import firstForm from './components/firstForm.vue';
import secondForm from './components/secondForm.vue';
import thirdForm from './components/thirdForm.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {path: '/', component: firstForm},
    {path: '/secondForm', component: secondForm},
    {path: '/thirdForm', component: thirdForm}
  ],
  
})