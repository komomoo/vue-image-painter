# vue-image-painter

English | [简体中文](./README.zh-CN.md)

## 🌰 Example

<img src="./demo/assets/demo.gif" width="320" style="margin-top: 20px;">

[Demo](https://wannaxiao.github.io/vue-image-painter/demo/dist/)

[Demo Source Code](https://github.com/wannaxiao/vue-image-painter/blob/master/demo/App.vue)

## 🚀 QuickStart

1.  Install

```bash
yarn add vue-image-painter # OR npm i -S vue-image-painter
```

2.  Import

```js
// main.js
import ImagePainter from 'vue-image-painter'
Vue.use(ImagePainter)
```

3.  Usage. Please refer to the [Demo Source Code](https://github.com/wannaxiao/vue-image-painter/blob/master/demo/App.vue)

```html
<ImagePainter :src="https://www.images.com/a.jpg"></ImagePainter>
```

## 🔌 API

### Props

| Name      | Description                                                                 | Type    | Default   |
| --------- | --------------------------------------------------------------------------- | ------- | --------- |
| src       | image URL. local images must be used `require('')`                          | String  | undefined |
| alt       | image alt                                                                   | String  | undefined |
| animation | animation effect. optional key: 'draw'，'blur'                              | String  | 'draw'    |
| duration  | animation duration. unit: ms                                                | Number  | 4000      |
| immediate | display images and animations immediately, don't wait for the image to load | Boolean | false     |

### Events

| Name      | Description      | Parameters |
| --------- | ---------------- | ---------- |
| loadStart | image load start | null       |
| loadEnd   | image load end   | null       |

### Slots

| Name    | Description                                                   |
| ------- | ------------------------------------------------------------- |
| default | The content ImagePainter displays, before the image is loaded |

---

😉😘 If it is helpful to you，please encourage me with a <b>⭐️<a href="#">Star</a></b> ~

## Inspiration

- [ImageDrawer.js](https://github.com/UstymUkhman/ImageDrawer.js)

## [Changelog](./CHANGELOG.md)

## License

[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2018-present, momoko
