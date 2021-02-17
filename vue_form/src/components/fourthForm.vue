<template>
  <div>
    <div class="container">
      <h2>以下の内容をご確認ください</h2>
      <p>-性別-</p>
      <p class="answerData">{{ $store.getters.getGenderData }}</p>
      <p>-生年月日-</p>
      <p class="answerData">{{ $store.getters.getYearData }}年{{ $store.getters.getMonthData }}月{{ $store.getters.getDayData }}日</p>
      <p>-現在、生命保険に加入していますか？-</p>
      <p class="answerData">{{ $store.getters.getFirstQuestionData }}</p>
      <p>-現在入院中ですか。または、、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
      <p class="answerData">{{ $store.getters.getSecondQuestionData }}</p>
      <p>-過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことはありますか？-</p>
      <p class="answerData">{{ $store.getters.getThirdQuestionData }}</p>
      <p>-ご相談内容</p>
      <p class="answerData">{{ $store.getters.getTextAreaData }}</p>
    </div>
    <div class="btn">
      <router-link to="./thirdForm"><button>前へ戻る ▶︎</button></router-link>
      <router-link to=""><button> 送 信 ▶︎</button></router-link>
    </div>
  </div>
</template>

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
p {
  padding-left: 20px;
}
.answerData {
  padding-left: 40px;
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