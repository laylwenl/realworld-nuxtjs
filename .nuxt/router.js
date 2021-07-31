import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _753e8e8a = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _0a3b47ec = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _6c73227b = () => interopDefault(import('..\\pages\\article\\_slug.vue' /* webpackChunkName: "pages/article/_slug" */))
const _436787d6 = () => interopDefault(import('..\\pages\\editor\\_id.vue' /* webpackChunkName: "pages/editor/_id" */))
const _3ec67e13 = () => interopDefault(import('..\\pages\\profile\\_username.vue' /* webpackChunkName: "pages/profile/_username" */))
const _77d075fb = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/register",
    component: _753e8e8a,
    name: "register"
  }, {
    path: "/settings",
    component: _0a3b47ec,
    name: "settings"
  }, {
    path: "/article/:slug?",
    component: _6c73227b,
    name: "article-slug"
  }, {
    path: "/editor/:id?",
    component: _436787d6,
    name: "editor-id"
  }, {
    path: "/profile/:username?",
    component: _3ec67e13,
    name: "profile-username"
  }, {
    path: "/",
    component: _77d075fb,
    name: "index"
  }, {
    path: "/login",
    component: _753e8e8a,
    name: "login"
  }, {
    path: "/create/article",
    component: _436787d6,
    name: "create-article"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
