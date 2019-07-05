import ImagePainter from './ImagePainter'

ImagePainter.install = function (Vue) {
  Vue.component(ImagePainter.name, ImagePainter)
}

export default ImagePainter
