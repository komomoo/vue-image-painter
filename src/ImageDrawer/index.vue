/**
 * vue-image-drawer
 * @Author momoko
 * @Date 2019/06
 */

<template>
  <div :class="c()">
    <img
      v-show="show"
      :src="src"
      :alt="alt"
      :style="{'animationDuration': duration/ 1000 + 's'}"
      :class="imgClass"
      @load="loadEnd">
    <slot v-if="!show"></slot>
  </div>
</template>

<script>
import mixin from './mixins'

export default {
  name: 'ImageDrawer',
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
      this.imgClass = 'drawer'
    },
    loadEnd () {
      this.$emit('loadEnd')
      if (!this.immediate) this.draw()
    },
  },
}
</script>

<style lang="stylus">
$ = vue-image-drawer;
$color = #409EFF;
.{$} {
  width: 100%;
  overflow: hidden;

  > img {
    width: 100%;
  }

  @keyframes drawer {
    // 1st step: drawing borders with a pencil
    0% {
      filter: brightness(10) contrast(10) grayscale(1);
      opacity: 0;
    }

    5% {
      filter: brightness(5) contrast(10) grayscale(1);
      opacity: 0.5;
    }

    30% {
      filter: brightness(3) contrast(10) grayscale(1);
      opacity: 1;
    }

    // 2nd step: define better outlines and shades with a pencil
    50% {
      filter: brightness(2) contrast(2) grayscale(1);
    }

    // 3nd step: give it some basic, very vanish colors
    75% {
      filter: brightness(1.5) contrast(1) grayscale(0.4) saturate(0.8);
    }

    // 4nd step: complete the picture with all its colors (a bit more bright and alive)
    100% {
      filter: brightness(1.05) contrast(1) grayscale(0) saturate(1.05);
    }
  }

  .drawer {
    animation-timing-function: linear;
    animation-fill-mode: both;
    animation-name: drawer;
  }
}
</style>
