import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
	path: '/',
	redirect: '/dashboard',
	// 是否数据缓存
	meta: {
		keepAlive: true
	}
},
{
	path: '/dashboard',
	name: 'dashboard',
	component: () => import('../views/dashboard/Dashboard.vue'),
	children: [{
		path: '/dashboard',
		redirect: '/dashboard/home',
		// 是否数据缓存
		meta: {
			keepAlive: true
		},
	}, {
		// 主页
		path: 'home',
		name: 'home',
		component: () => import('../views/Home/Home.vue'),
		// 是否数据缓存
		meta: {
			keepAlive: true
		},
	}, {
		path: 'map',
		name: 'map',
		component: () => import('../views/Home/component/map/map.vue'),
	}, {
		path: 'search',
		name: 'search',
		component: () => import('../views/Home/component/search/search.vue'),
	}, {
		path: 'category',
		name: 'category',
		component: () => import('../views/category/category.vue'),
	}, {
		path: 'eat',
		name: 'eat',
		component: () => import('../views/eat/eat.vue'),
	}, {
		path: 'cart',
		name: 'cart',
		component: () => import('../views/cart/cart.vue'),
	}, {
		path: 'mine',
		name: 'mine',
		component: () => import('../views/mine/mine.vue'),
		children: [{
			path: 'userCenter',
			name: 'userCenter',
			component: () => import('../views/mine/components/userCenter.vue'),
			children: [{
				path: 'ChangeNickName',
				name: 'ChangeNickName',
				component: () => import('../views/mine/components/ChangeNickName.vue'),
			}],
		}, {
			path: 'MyOrder',
			name: 'MyOrder',
			component: () => import('../views/mine/components/MyOrder.vue')
		}, {
			path: 'couponList',
			name: 'couponList',
			component: () => import('../views/mine/components/CouponList.vue')
		}
		]
	}, {
		path: 'order',
		name: 'order',
		component: () => import('../views/order/order.vue'),
		children: [{
			// 我的地址
			path: 'myAddress',
			name: 'myAddress',
			component: () => import('../views/order/components/MyAddress.vue'),
			meta: {
				requireAuth: true
			},
			children: [{
				path: 'addAddress',
				name: 'addAddress',
				component: () => import('../views/order/components/children/AddAddress.vue'),
			},
			{
				path: 'editAddress',
				name: 'editAddress',
				component: () => import('../views/order/components/children/EditAddress.vue'),
			}
			]
		}]
	}
	]
},
{
	path: '/about',
	name: 'about',
	component: () => import('../views/About.vue')
}, {
	path: '/login',
	name: 'login',
	component: () => import('../views/login/login.vue')
}, {
	path: '/register',
	name: 'register',
	component: () => import('../views/register/register.vue')
}
]
const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
