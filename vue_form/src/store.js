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
  mutations: {
    upDataGender(state, value) {
      state.genderData = value;
    },
    upDataYear(state, value) {
      state.yearData = value;
    },
    upDataMonth(state, value) {
      state.monthData = value;
    },
    upDataDay(state, value) {
      state.dayData = value;
    },
    upDataFirst(state, value) {
      state.firstData = value;
    },
    upDataSecond(state, value) {
      state.secondData = value;
    },
    upDataThird(state, value) {
      state.thirdData = value;
    },
    upDataText(state, value) {
      state.textAreaData = value;
    }
  }
});