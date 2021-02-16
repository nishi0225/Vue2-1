<template>
  <div>
    <div class="container">
      <h2>お客様情報を入力してください</h2>
      <p>-性別-</p>
      <label>
        <input type="radio" v-model="genderData" name="genderData" value="男性">男性
        <input type="radio" v-model="genderData" name="genderData" value="女性">女性
      </label>
      <!-- 生年月日を作成 -->
      <p>-生年月日-</p>
      <select v-model="yearData">
        <option v-for="year in years" :key="year">{{ year }}</option>
      </select>年
      <!-- 月を作成 -->
      <select v-model="monthData">
        <option v-for="mon in months" :key="mon">{{ mon }}</option>
      </select>月
      <!--日を作成-->
      <select v-model="dayData">
        <option v-for="day in days" :key="day">{{ day }}</option>
      </select>日
    </div>
    <div class="btn">
      <router-link to="/secondForm"><button>次へ進む ▶︎</button></router-link>
    </div>
  </div>
  
</template>

<script>
import yearsData from '../helpers/definition.js';

export default {
  data() {
    return {
      //外部jsファイルから生年月日を作成する関数を取得
      years: yearsData.getYearData(),
      months: yearsData.getMonthData(),
      days: yearsData.getDayData(),
    }
  },
  computed: {
    genderData: {
      get() {
        return this.$store.getters.getGenderData;
      },
      set(value) {
        this.$store.commit('upDataGender', value);
      }
    },
    yearData: {
      get() {
        return this.$store.getters.getyearData;
      },
      set(value) {
        this.$store.commit('upDataYear', value);
      }
    },
    monthData: {
      get() {
        return this.$store.getters.getmonthData;
      },
      set(value) {
        this.$store.commit('upDataMonth', value);
      }
    },
    dayData: {
      get() {
        return this.$store.getters.getdayData;
      },
      set(value) {
        this.$store.commit('upDataDay', value);
      }
    }
  }
}
</script>

<style scoped>
.container {
  width: 70%;
  margin: 5em auto 0;
  padding-bottom: 20px;
  border: 1px solid #000;
}
h2 {
  font-size: 20px;
  margin: 0;
  border-bottom: 1px solid #000;
  text-align: center;
}
p,label {
  padding-left: 20px;
}
select {
  margin-left: 20px;
}
.btn {
  text-align: center;
}
button {
  width: 200px;
  border-radius: 5px;
  margin: 3em auto;
}
</style>