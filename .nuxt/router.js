import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _00fdb939 = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _fc8c2aa4 = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _9488990c = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0ec38d7a = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _5aee3272 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _15a24108 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _14e45e72 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

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
    component: _00fdb939,
    children: [{
      path: "/",
      component: _fc8c2aa4,
      name: "home"
    }, {
      path: "/login",
      component: _9488990c,
      name: "login"
    }, {
      path: "/register",
      component: _9488990c,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0ec38d7a,
      name: "profile"
    }, {
      path: "/settings",
      component: _5aee3272,
      name: "settings"
    }, {
      path: "/editor/:slug?",
      component: _15a24108,
      name: "editor"
    }, {
      path: "/article/:slug?",
      component: _14e45e72,
      name: "article"
    }]
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
