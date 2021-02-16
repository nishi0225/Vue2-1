<template>
  <div>
    <div class="container">
      <h2>ご相談内容をご記入ください</h2>
      <p>-ご相談内容-</p>
      <div class="textContainer">
        <textarea name="name" id="counseling" cols="90" rows="10" v-model="textAreaData"></textarea>
      </div>
    </div>
    <div class="btn">
      <router-link to="/secondForm"><button>前へ戻る ▶︎</button></router-link>
      <router-link to="/fourthForm"><button>次へ進む ▶︎</button></router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    textAreaData: {
      get() {
        return this.$store.getters.gettextAreaData;
      },
      set(value) {
        this.$store.commit('upDataText', value);
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
.textContainer {
  text-align: center;
}
p {
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
</style>