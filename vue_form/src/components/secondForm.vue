<template>
  <div>
    <div class="container">
      <h2>以下にお答えください</h2>
      <!-- 1つ目の質問 -->
      <div @click="secondDisplay=true">
        <p>-現在、生命保険に加入していますか？-</p>
          <label><input type="radio" name="first_question" v-model="answerData.firstAnswer" value="Yes">はい</label>
          <label><input type="radio" name="first_question" v-model="answerData.firstAnswer" value="No">いいえ</label>
      </div>
      <!-- 2つ目の質問 -->
      <transition>
      <div v-if="secondDisplay" @click="thirdDisplay=true">
        <p>-現在入院中ですか。または、、最近3ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？-</p>
          <label><input type="radio" name="second_question" v-model="answerData.secondAnswer" value="Yes">はい</label>
          <label><input type="radio" name="second_question" v-model="answerData.secondAnswer" value="No">いいえ</label>
      </div>
      </transition>
      <!-- 3つ目の質問 -->
      <transition>
      <div v-if="thirdDisplay">
        <p>-過去5年以内に、病気や怪我で、手術をうけたことまたは継続して7日以上の入院をしたことはありますか？-</p>
          <label><input type="radio" name="third_question" v-model="answerData.thirdAnswer" value="Yes">はい</label>
          <label><input type="radio" name="third_question" v-model="answerData.thirdAnswer" value="No">いいえ</label>
      </div>
      </transition>
    </div>
    <div class="btn">
      <!-- Buttonを作成 -->
      <router-link to="/"><button>前へ戻る ▶︎</button></router-link>
      <router-link to="/thirdForm"><button>次へ進む ▶︎</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //選択された値を格納
      answerData: {
        firstAnswer:'',
        secondAnswer: '',
        thirdAnswer: '',
      },
      secondDisplay: false,
      thirdDisplay: false
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
.btn {
  text-align: center;
}
button {
  width: 200px;
  border-radius: 5px;
  margin: 3em auto;
}
.v-enter {
  opacity: 0;
}
.v-enter-active {
  transition: 1s;
}
</style>