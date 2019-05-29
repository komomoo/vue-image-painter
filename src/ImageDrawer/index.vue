/**
 * vue-image-drawer
 * @Author momoko
 * @Date 2019/06
 */

<template>
  <div :class="c()">
  </div>
</template>

<script>
import mixin from './mixins'

export default {
  name: 'ImageDrawer',
  components: {
  },
  mixins: [mixin],
  props: {
    show: {
      // .sync 是否显示
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="stylus">
$ = vue-image-drawer;
$color = #409EFF;
.{$} {

}
</style>
