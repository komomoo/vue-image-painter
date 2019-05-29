# vue-image-drawer

> 开箱即用的 vue 加载组件，改造于 ElementUI/Loading

## ✨ 特性

- 开箱即用/极简使用
- 体积：6k

## 🐠 示例&文档

[Demo](https://wannaxiao.github.io/vue-image-drawer/demo/dist/)

[Demo 源码](https://github.com/wannaxiao/vue-image-drawer/blob/master/demo/App.vue)

## 🚀 快速开始

1.  安装

```bash
yarn add vue-image-drawer # 或 npm i -S vue-image-drawer
```

2.  引入

```js
// main.js 入口中
import Loading from 'vue-image-drawer'
Vue.use(Loading)
```

3.  使用，请参考[Demo 源码](https://github.com/wannaxiao/vue-image-drawer/blob/master/demo/App.vue)

```html
<!-- 任意元素中使用指令 v-loading -->
<section v-loading="true">瀑布的水逆流而上</section>
```

## 🔌 API

### Directive

| 指令      | 说明     | 类型    | 默认值 |
| --------- | -------- | ------- | ------ |
| v-loading | 是否显示 | Boolean | false  |

### Option

| 选项         | 说明       | 类型   | 默认值    |
| ------------ | ---------- | ------ | --------- |
| text         | 文本显示   | String | null      |
| color        | 颜色       | String | '#409EFF' |
| maskClass    | 遮罩样式类 | Array  | null      |
| spinnerClass | 加载样式类 | Array  | null      |

```js
// main.js 入口中
import Loading from 'vue-image-drawer'
Vue.use(Loading, { text: '加载中', color: 'green' })
```

### Attribute

> Attribute 将会覆盖 Option

| 属性          | 说明     | 类型   | 默认值    |
| ------------- | -------- | ------ | --------- |
| loading-text  | 文本显示 | String | null      |
| loading-color | 颜色     | String | '#409EFF' |

```html
<section v-loading="true" loading-text="加载中">瀑布的水逆流而上</section>
```

<br>
<br>
😉😘 如果它对你有所帮助，可以点一下 <b>⭐️<a href="#">Star</a></b> ~

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
