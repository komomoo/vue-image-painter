/**
 * vue-image-painter
 * @Author komo
 * @Date 2019/06
 */

<template>
  <div :class="c()">
    <img
      v-show="show"
      :src="src"
      :alt="alt"
      :style="{'animationDuration': duration/ 1000 + 's'}"
      :class="[c('_img'), imgClass]"
      @load="loadEnd">
    <slot v-if="!show"></slot>
  </div>
</template>

<script>
import mixin from './mixins'

export default {
  name: 'ImagePainter',
  mixins: [mixin],
  props: {
    src: {
      // 图片链接
      type: String,
      default: undefined,
    },
    alt: {
      // 图片描述
      type: String,
      default: undefined,
    },
    animation: {
      // 动画效果，可选：'draw'，'blur'
      type: String,
      default: 'draw',
    },
    duration: {
      // 动画持续时间
      type: Number,
      default: 4000,
    },
    immediate: {
      // 立即显示图片和动画，而不等图片加载完
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      show: false,
      imgClass: undefined, // 图片样式类
    }
  },
  watch: {
    src () {
      this.init()
    },
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.$emit('loadStart')
      this.immediate ? this.draw() : this.wait()
    },
    wait () {
      this.show = false
      this.imgClass = undefined
    },
    draw () {
      this.show = true
      this.imgClass = this.animation
    },
    loadEnd () {
      this.$emit('loadEnd')
      if (!this.immediate) this.draw()
    },
  },
}
</script>

<style lang="stylus">
@import './style/animation.styl';

$ = vue-image-painter;
.{$} {
  width: 100%;
  overflow: hidden;

  &_img {
    width: 100%;
  }
}
</style>
