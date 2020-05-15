import Vue from 'vue'
import Router from 'vue-router'
import AuthLayout from '../components/auth/AuthLayout'
import AppLayout from '../components/admin/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

const demoRoutes = []

export default new Router({
  mode: 'hash',
  routes: [
    ...demoRoutes,
    {
      path: '*',
      redirect: { name: 'charts' },
    },
    {
      path: '/auth',
      component: AuthLayout,
      children: [
        {
          name: 'login',
          path: 'login',
          component: () => import('../components/auth/login/Login.vue'),
        },
        {
          name: 'signup',
          path: 'signup',
          component: () => import('../components/auth/signup/Signup.vue'),
        },
        {
          name: 'recover-password',
          path: 'recover-password',
          component: () =>
            import('../components/auth/recover-password/RecoverPassword.vue'),
        },
        {
          path: '',
          redirect: { name: 'login' },
        },
      ],
    },
    {
      name: 'Admin',
      path: '/admin',
      component: AppLayout,
      children: [
        {
          name: 'statistics',
          path: 'statistics',
          component: EmptyParentComponent,
          children: [
            {
              name: 'charts',
              path: 'charts',
              component: () =>
                import('../components/statistics/charts/Charts.vue'),
              meta: {
                wikiLink:
                  'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
            {
              name: 'realTimeCharts',
              path: 'realTimeCharts',
              component: () =>
                import('../components/statistics/charts/realTimeCharts.vue'),
              meta: {
                wikiLink:
                  'https://github.com/epicmaxco/vuestic-admin/wiki/Charts',
              },
            },
          ],
        },
      ],
    },
  ],
})
