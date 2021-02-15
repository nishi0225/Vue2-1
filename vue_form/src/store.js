import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genderData: '',
    yearData: '',
    monthData: '',
    dayData: '',
    firstData: '',
    secondData: '',
    thirdData: '',
    textAreaData: '',
  },
});