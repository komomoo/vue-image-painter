/*!
 * vue-image-painter v0.1.2
 * Copyright (c) 2018-present, momoko <ko.momo@qq.com>
 * Released under the MIT License.
 */

'use strict';

var name = "vue-image-painter";
var version = "0.1.2";
var description = "图像动态绘制效果";
var author = "momoko <ko.momo@qq.com>";
var license = "MIT";
var repository = {
	type: "git",
	url: "https://github.com/wannaxiao/vue-image-painter"
};
var keywords = [
	"vue",
	"image-drawer",
	"image-painter",
	"img-paint"
];
var main = "dist/vue-image-painter.min.js";
var module$1 = "dist/vue-image-painter.esm.min.js";
var scripts = {
	dev: "parcel demo/index.html -p 8080 --out-dir demo/dev",
	"build:demo": "rm -rf demo/dist/ && parcel build demo/index.html --out-dir demo/dist --public-url ./",
	build: "dio",
	lint: "eslint --fix --ext .js,.ts,.vue .",
	release: "sh scripts/release.sh"
};
var eslintConfig = {
	"extends": [
		"@momoko/vue"
	]
};
var eslintIgnore = [
	"dist"
];
var babel = {
	presets: [
		"@momoko/vue"
	]
};
var browserslist = [
	"iOS >= 9",
	"Android >= 4.4",
	"IE >= 9"
];
var dependencies = {
};
var devDependencies = {
	"@babel/core": "^7.3.3",
	"@momoko/babel-preset-vue": "^0.2.0",
	"@momoko/eslint-config-vue": "^1.0.2",
	"dio-bundler": "^0.5.2",
	eslint: "^5.16.0",
	"parcel-bundler": "^1.12.3",
	"standard-version": "^4.4.0",
	vue: "^2.6.10",
	"vue-hot-reload-api": "^2.3.2",
	"vue-template-compiler": "^2.6.10"
};
var pkg = {
	name: name,
	version: version,
	description: description,
	author: author,
	license: license,
	"private": false,
	repository: repository,
	keywords: keywords,
	main: main,
	module: module$1,
	scripts: scripts,
	eslintConfig: eslintConfig,
	eslintIgnore: eslintIgnore,
	babel: babel,
	browserslist: browserslist,
	dependencies: dependencies,
	devDependencies: devDependencies
};

var pre = pkg.name;
var mixin = {
  methods: {
    // 生成 css class
    c: function c(className) {
      return className ? "".concat(pre).concat(className) : "".concat(pre);
    }
  }
};

//
var script = {
  name: 'ImagePainter',
  mixins: [mixin],
  props: {
    src: {
      // 图片链接
      type: String,
      default: undefined
    },
    alt: {
      // 图片描述
      type: String,
      default: undefined
    },
    animation: {
      // 动画效果，可选：'draw'，'blur'
      type: String,
      default: 'draw'
    },
    duration: {
      // 动画持续时间
      type: Number,
      default: 4000
    },
    immediate: {
      // 立即显示图片和动画，而不等图片加载完
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      show: false,
      imgClass: undefined // 图片样式类

    };
  },
  watch: {
    src: function src() {
      this.init();
    }
  },
  mounted: function mounted() {
    this.init();
  },
  methods: {
    init: function init() {
      this.$emit('loadStart');
      this.immediate ? this.draw() : this.wait();
    },
    wait: function wait() {
      this.show = false;
      this.imgClass = undefined;
    },
    draw: function draw() {
      this.show = true;
      this.imgClass = this.animation;
    },
    loadEnd: function loadEnd() {
      this.$emit('loadEnd');
      if (!this.immediate) this.draw();
    }
  }
};

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase());
function createInjector(context) {
  return function (id, style) {
    return addStyle(id, style);
  };
}
var HEAD = document.head || document.getElementsByTagName('head')[0];
var styles = {};

function addStyle(id, css) {
  var group = isOldIE ? css.media || 'default' : id;
  var style = styles[group] || (styles[group] = {
    ids: new Set(),
    styles: []
  });

  if (!style.ids.has(id)) {
    style.ids.add(id);
    var code = css.source;

    if (css.map) {
      // https://developer.chrome.com/devtools/docs/javascript-debugging
      // this makes source maps inside style tags work properly in Chrome
      code += '\n/*# sourceURL=' + css.map.sources[0] + ' */'; // http://stackoverflow.com/a/26603875

      code += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(css.map)))) + ' */';
    }

    if (!style.element) {
      style.element = document.createElement('style');
      style.element.type = 'text/css';
      if (css.media) style.element.setAttribute('media', css.media);
      HEAD.appendChild(style.element);
    }

    if ('styleSheet' in style.element) {
      style.styles.push(code);
      style.element.styleSheet.cssText = style.styles.filter(Boolean).join('\n');
    } else {
      var index = style.ids.size - 1;
      var textNode = document.createTextNode(code);
      var nodes = style.element.childNodes;
      if (nodes[index]) style.element.removeChild(nodes[index]);
      if (nodes.length) style.element.insertBefore(textNode, nodes[index]);else style.element.appendChild(textNode);
    }
  }
}

var browser = createInjector;

/* script */
var __vue_script__ = script;
/* template */

var __vue_render__ = function __vue_render__() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('div', {
    class: _vm.c()
  }, [_c('img', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.show,
      expression: "show"
    }],
    class: [_vm.c('_img'), _vm.imgClass],
    style: {
      'animationDuration': _vm.duration / 1000 + 's'
    },
    attrs: {
      "src": _vm.src,
      "alt": _vm.alt
    },
    on: {
      "load": _vm.loadEnd
    }
  }), _vm._v(" "), !_vm.show ? _vm._t("default") : _vm._e()], 2);
};

var __vue_staticRenderFns__ = [];
/* style */

var __vue_inject_styles__ = function __vue_inject_styles__(inject) {
  if (!inject) return;
  inject("data-v-684a6a03_0", {
    source: ".vue-image-painter .draw{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:draw;animation-name:draw}.vue-image-painter .blur{-webkit-animation-timing-function:linear;animation-timing-function:linear;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-name:blur;animation-name:blur}@-webkit-keyframes draw{0%{-webkit-filter:brightness(10) contrast(10) grayscale(1);filter:brightness(10) contrast(10) grayscale(1);opacity:0}5%{-webkit-filter:brightness(5) contrast(10) grayscale(1);filter:brightness(5) contrast(10) grayscale(1);opacity:.5}30%{-webkit-filter:brightness(3) contrast(10) grayscale(1);filter:brightness(3) contrast(10) grayscale(1);opacity:1}50%{-webkit-filter:brightness(2) contrast(2) grayscale(1);filter:brightness(2) contrast(2) grayscale(1)}75%{-webkit-filter:brightness(1.5) contrast(1) grayscale(.4) saturate(.8);filter:brightness(1.5) contrast(1) grayscale(.4) saturate(.8)}100%{-webkit-filter:brightness(1.05) contrast(1) grayscale(0) saturate(1.05);filter:brightness(1.05) contrast(1) grayscale(0) saturate(1.05)}}@keyframes draw{0%{-webkit-filter:brightness(10) contrast(10) grayscale(1);filter:brightness(10) contrast(10) grayscale(1);opacity:0}5%{-webkit-filter:brightness(5) contrast(10) grayscale(1);filter:brightness(5) contrast(10) grayscale(1);opacity:.5}30%{-webkit-filter:brightness(3) contrast(10) grayscale(1);filter:brightness(3) contrast(10) grayscale(1);opacity:1}50%{-webkit-filter:brightness(2) contrast(2) grayscale(1);filter:brightness(2) contrast(2) grayscale(1)}75%{-webkit-filter:brightness(1.5) contrast(1) grayscale(.4) saturate(.8);filter:brightness(1.5) contrast(1) grayscale(.4) saturate(.8)}100%{-webkit-filter:brightness(1.05) contrast(1) grayscale(0) saturate(1.05);filter:brightness(1.05) contrast(1) grayscale(0) saturate(1.05)}}@-webkit-keyframes blur{0%{-webkit-filter:blur(50px);filter:blur(50px);opacity:0}10%{-webkit-filter:blur(30px);filter:blur(30px);opacity:.6}100%{-webkit-filter:blur(0);filter:blur(0);opacity:1}}@keyframes blur{0%{-webkit-filter:blur(50px);filter:blur(50px);opacity:0}10%{-webkit-filter:blur(30px);filter:blur(30px);opacity:.6}100%{-webkit-filter:blur(0);filter:blur(0);opacity:1}}.vue-image-painter{width:100%;overflow:hidden}.vue-image-painter_img{width:100%}",
    map: undefined,
    media: undefined
  });
};
/* scoped */


var __vue_scope_id__ = undefined;
/* module identifier */

var __vue_module_identifier__ = undefined;
/* functional template */

var __vue_is_functional_template__ = false;
/* style inject SSR */

var ImagePainter = normalizeComponent_1({
  render: __vue_render__,
  staticRenderFns: __vue_staticRenderFns__
}, __vue_inject_styles__, __vue_script__, __vue_scope_id__, __vue_is_functional_template__, __vue_module_identifier__, browser, undefined);

ImagePainter.install = function (Vue) {
  Vue.component(ImagePainter.name, ImagePainter);
};

module.exports = ImagePainter;
