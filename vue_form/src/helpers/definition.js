'use strict'

const yearsData = {
  //西暦を作成
getYearData: function() {
  const year= [];
  for (let i = 1968; i <= 2000; i++) {
    year.push(i);
  }
  return year;
},
//年を作成
getMonthData: function() {
  const month = [];
  for (let i = 1; i <= 12; i++) {
    month.push(i);
  }
  return month;
},
//日を作成
getDayData: function() {
  const day = [];
  for (let i= 1; i <= 31; i++) {
    day.push(i);
  }
  return day;
}
}

export default yearsData;
