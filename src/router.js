import Vue from 'vue'
import Router from 'vue-router'
// =====================================================  异步加载路由
const loadAsync = name => () => import('@pages/'+ name).then(m => m.default)
// =====================================================  路由分配
const routes = [
    { path: '/', 		component: loadAsync('index') },
	{ path: '/login', 		component: loadAsync('login') },
	/* 重定向 */
	{ path: '', 	redirect: '/index' },
	/* 404 */
	{ path: '*',	component: loadAsync('404') }
]
// =====================================================  路由配置
Vue.use(Router)
const router =  new Router({
	mode: 'hash',
	hash: '?',
  	routes
})
// =====================================================  路由监听
// 进入路由之前
router.beforeEach((to, from, next) => {
	next()
})
// 进入路由之前后
//router.afterEach((to, from, next) => { })

export default router
