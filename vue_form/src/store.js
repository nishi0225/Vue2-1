import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    genderData: '',
    yearData: '',
    monthData: '',
    dayData: '',
    firstQuestionData: '',
    secondQuestionData: '',
    thirdQuestionData: '',
    textAreaData: '',
  },
  getters: {
    getGenderData : state => state.genderData,
    getYearData : state => state.yearData,
    getMonthData : state => state.monthData,
    getDayData : state => state.dayData,
    getFirstQuestionData : state => state.firstQuestionData,
    getSecondQuestionData : state => state.secondQuestionData,
    getThirdQuestionData : state => state.thirdQuestionData,
    getTextAreaData : state => state.textAreaData
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
      state.firstQuestionData = value;
    },
    upDataSecond(state, value) {
      state.secondQuestionData = value;
    },
    upDataThird(state, value) {
      state.thirdQuestionData = value;
    },
    upDataText(state, value) {
      state.textAreaData = value;
    }
  }
});