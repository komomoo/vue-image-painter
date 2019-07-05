<template>
  <div id="app">
    <h1>Image Draw</h1>

    <!-- 本地图片 -->
    <ImagePainter
      class="image-painter"
      :src="require('./assets/Crested_Ibis.jpg')">
      <p class="loading-text">图片加载中...</p>
    </ImagePainter>

    <!-- 网络图片 -->
    <!-- <ImagePainter
      class="image-painter"
      src="https://images3.alphacoders.com/825/825213.png">
      <p class="loading-text">图片加载中...</p>
    </ImagePainter> -->
  </div>
</template>

<script>
require('./assets/Crested_Ibis.jpg')

export default {
  name: 'App',
  data () {
    return {
      loading: false,
    }
  },
  methods: {
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
    // color: #6D7A80;
    color: rgba(250, 140, 135, 1);
  }

  .image-painter {
    min-height: 300px;
  }

  .loading-text {
    font-size: 12px;
    color: #6D7A80;
    text-align: center;
    margin: 160px 0;
  }
}
</style>
