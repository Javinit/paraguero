import { route } from 'quasar/wrappers'
import { createRouter, createMemoryHistory, createWebHistory, createWebHashHistory } from 'vue-router'
import routes from './routes'
import { authUser } from 'src/utils'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach(async (to, from) => {
    await authUser.value.verifyToken()
    console.log('tooo', to);
    if (authUser.value.isAuth && (to.fullPath == '/' || to.fullPath == '/login' || to.fullPath == '/register')) {
      console.log('ACA 111');
      return { name: 'Client' }
    }

    if (!authUser.value.isAuth && to.fullPath !== '/' && to.fullPath !== '/login' && to.fullPath !== '/register') {
      console.log('ACA 222');
      return { fullPath: '/login' }
    }
  })

  return Router
})
