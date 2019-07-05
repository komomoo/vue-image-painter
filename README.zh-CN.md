# vue-image-painter

[English](./README.md) | 简体中文

## 🌰 示例

<img src="./demo/assets/demo.gif" width="320" style="margin-top: 20px;">

[Demo](https://wannaxiao.github.io/vue-image-painter/demo/dist/)

[Demo 源码](https://github.com/wannaxiao/vue-image-painter/blob/master/demo/App.vue)

## 🚀 快速开始

1.  安装

```bash
yarn add vue-image-painter # 或 npm i -S vue-image-painter
```

2.  引入

```js
// main.js 入口中
import ImagePainter from 'vue-image-painter'
Vue.use(ImagePainter)
```

3.  使用，请参考[Demo 源码](https://github.com/wannaxiao/vue-image-painter/blob/master/demo/App.vue)

```html
<ImagePainter :src="https://www.images.com/a.jpg"></ImagePainter>
```

## 🔌 API

### Props

| 选项      | 说明                                    | 类型    | 默认值    |
| --------- | --------------------------------------- | ------- | --------- |
| src       | 图片链接。本地图片须用 require('') 引入 | String  | undefined |
| alt       | 图片描述                                | String  | undefined |
| animation | 动画效果，可选：'draw'，'blur'          | String  | 'draw'    |
| duration  | 动画持续时间，单位 ms                   | Number  | 4000      |
| immediate | 立即显示图片和动画，而不等图片加载完    | Boolean | false     |

### Events

| 事件名    | 说明         | 回调参数 |
| --------- | ------------ | -------- |
| loadStart | 图片加载开始 | null     |
| loadEnd   | 图片加载结束 | null     |

### Slots

| 名称    | 说明                                        |
| ------- | ------------------------------------------- |
| default | 图片未加载完成前，ImagePainter 内显示的内容 |

---

😉😘 如果它对你有所帮助，可以点一下 <b>⭐️<a href="#">Star</a></b> ~

## 参考

- [ImageDrawer.js](https://github.com/UstymUkhman/ImageDrawer.js)

## [更新日志](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
