exports.ids = [7];
exports.modules = {

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=template&id=4fca99d1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<nav class=\"navbar navbar-light\" data-v-4fca99d1>","</nav>",[_vm._ssrNode("<div class=\"container\" data-v-4fca99d1>","</div>",[_c('nuxt-link',{staticClass:"navbar-brand",attrs:{"to":"/","exact":""}},[_vm._v("lwenl")]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"nav navbar-nav pull-xs-right\" data-v-4fca99d1>","</ul>",[_vm._ssrNode("<li class=\"nav-item\" data-v-4fca99d1>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/","exact":""}},[_vm._v("Home")])],1),_vm._ssrNode(" "),(_vm.user)?[_vm._ssrNode("<li class=\"nav-item\" data-v-4fca99d1>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/editor"}},[_c('i',{staticClass:"ion-compose"}),_vm._v(" New Post\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-4fca99d1>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/settings"}},[_c('i',{staticClass:"ion-gear-a"}),_vm._v(" Settings\n            ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-4fca99d1>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":{
              name:'profile',
              params:{username:_vm.user.username}
            }}},[_c('img',{staticClass:"user-pic",attrs:{"src":_vm.user.image}}),_vm._v("\n              "+_vm._s(_vm.user.username)+"\n            ")])],1),_vm._ssrNode(" <li class=\"nav-item\" data-v-4fca99d1><a href=\"javascript:;\" class=\"nav-link\" data-v-4fca99d1>退出</a></li>")]:[_vm._ssrNode("<li class=\"nav-item\" data-v-4fca99d1>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/login"}},[_vm._v("Sign in")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"nav-item\" data-v-4fca99d1>","</li>",[_c('nuxt-link',{staticClass:"nav-link",attrs:{"to":"/register"}},[_vm._v("Sign up")])],1)]],2)],2)]),_vm._ssrNode(" "),_c('nuxt-child'),_vm._ssrNode(" "),_vm._ssrNode("<footer data-v-4fca99d1>","</footer>",[_vm._ssrNode("<div class=\"container\" data-v-4fca99d1>","</div>",[_c('nuxt-link',{staticClass:"logo-font",attrs:{"to":"/"}},[_vm._v("lwenl")]),_vm._ssrNode(" <span class=\"attribution\" data-v-4fca99d1>\n        An interactive learning project from\n        <a href=\"https://thinkster.io\" data-v-4fca99d1>Thinkster</a>. Code &amp; design licensed under MIT.\n      </span>")],2)])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=template&id=4fca99d1&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/layout/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const Cookie =  false ? undefined : "";
/* harmony default export */ var layoutvue_type_script_lang_js_ = ({
  name: "LayoutIndex",
  computed: { ...Object(external_vuex_["mapState"])(["user"])
  },
  methods: {
    logout() {
      // 删除客户端缓存数据
      this.$store.commit("setUser", null); // 删除服务端数据持久化

      Cookie.set("user", null);
      this.$router.push("/");
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/layout/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_layoutvue_type_script_lang_js_ = (layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/layout/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4fca99d1",
  "7915c238"
  
)

/* harmony default export */ var layout = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=7.js.map