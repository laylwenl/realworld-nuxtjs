import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1e914e01 = () => interopDefault(import('../pages/layout' /* webpackChunkName: "" */))
const _1187dd14 = () => interopDefault(import('../pages/home' /* webpackChunkName: "" */))
const _1f03349c = () => interopDefault(import('../pages/login' /* webpackChunkName: "" */))
const _b8badc9c = () => interopDefault(import('../pages/profile' /* webpackChunkName: "" */))
const _61efb53a = () => interopDefault(import('../pages/settings' /* webpackChunkName: "" */))
const _12c27444 = () => interopDefault(import('../pages/editor' /* webpackChunkName: "" */))
const _eb265602 = () => interopDefault(import('../pages/article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _1e914e01,
    children: [{
      path: "",
      component: _1187dd14,
      name: "home"
    }, {
      path: "/login",
      component: _1f03349c,
      name: "login"
    }, {
      path: "/register",
      component: _1f03349c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _b8badc9c,
      name: "profile"
    }, {
      path: "/settings",
      component: _61efb53a,
      name: "settings"
    }, {
      path: "/editor",
      component: _12c27444,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _eb265602,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
