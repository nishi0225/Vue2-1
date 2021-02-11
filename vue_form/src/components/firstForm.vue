<template>
  <div>
    <div class="container">
      <h2>お客様情報を入力してください</h2>
      <p>-性別-</p>
      <label>
        <input type="radio" v-model="radio" name="gender" value="男性">男性
        <input type="radio" v-model="radio" name="gender" value="女性">女性
      </label>
      <!-- 生年月日を作成 -->
      <p>-生年月日-</p>
      <select v-model="birthdayData.year">
        <option v-for="year in datas.years" :key="year">{{ year }}</option>
      </select>年
      <!-- 月を作成 -->
      <select v-model="birthdayData.month">
        <option v-for="mon in datas.month" :key="mon">{{ mon }}</option>
      </select>月
      <!--日を作成-->
      <select v-model="birthdayData.days">
        <option v-for="day in datas.days" :key="day">{{ day }}</option>
      </select>日
    </div>
    <div class="btn">
      <router-link to="/secondForm"><button>次へ進む ▶︎</button></router-link>
    </div>
  </div>
  
</template>

<script>
export default {
  data() {
    return {
      datas: {
        years: [],
        month: [],
        days: [],
      },
      birthdayData: {
        year: '',
        month: '',
        days: '',
      }
    }
  },
  created() {
    //西暦を作成
    for(let i = 1968; i <= 2000; i++) {
      this.datas.years.push(i);
    }
    //月を作成
    for(let i = 1; i <= 12; i++) {
      this.datas.month.push(i);
    }
    //日を作成
    for(let i = 1; i <= 31; i++) {
      this.datas.days.push(i);
    }
  },
  methods: {
    //
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