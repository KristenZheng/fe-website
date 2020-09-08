import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/pages/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/pages/home/index.vue'),
        meta: { name: 'home' }
      },
      {
        path: '/contract',
        name: 'Contract',
        component: () => import('@/pages/contract/index.vue'),
        meta: { name: 'contract' }
      },
      {
        path: '/aboutUs',
        name: 'AboutUs',
        component: () => import('@/pages/aboutUs/index.vue')
      },
      {
        path: '/privacy',
        name: 'Privacy',
        component: () => import('@/pages/privacy/index.vue')
      },
      {
        path: '/userAgreement',
        name: 'UserAgreement',
        component: () => import('@/pages/userAgreement/index.vue')
      },
    ]
  }
]

const router = new VueRouter({ routes });

export default router;