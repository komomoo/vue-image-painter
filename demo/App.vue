<template>
  <div id="app">
    <h1>基础使用</h1>

    <section v-loading="show">
      瀑布的水逆流而上<br>
      蒲公英的种子从远处飘回，聚成伞的模样<br>
      太阳从西边升起 落向东方<br>
      <br>
      子弹退回枪膛<br>
      运动员回到起跑线上<br>
      我交回录取通知书 忘了十年寒窗<br>
      <br>
      厨房里飘来饭菜的香<br>
      你把我的卷子签好名字<br>
      关掉电视 帮我把书包背上<br>
      <br>
      你还在我身旁
    </section>

    <div class="btn-box">
      <button @click="show = !show">{{ show ? '隐藏' : '显示' }}</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      show: true,
    }
  },
}
</script>

<style lang="stylus">
$headerHeight = 44px;
$baseColor = #6A9FB5;
$bgColor = #FAFAFA;
* {
  padding: 0;
  margin: 0;
  border: none;
}
html, body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  box-sizing: border-box;

  > h1 {
    font-size: 24px;
    padding: 0 15px;
    padding-top: 40px;
    padding-bottom: 20px;
    color: #6D7A80;
  }

  > section {
    width: 90%;
    border-radius: 16px;
    text-align: center;
    background: #fff;
    margin: 20px auto;
    color: #303133;
  }

  .btn-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    >button {
      display: block;
      width: 40%;
      height: 60px;
      margin: 15px auto;
      font-size: 20px;
      color: $baseColor;
      background-color: $bgColor;
    }
  }
}
</style>
