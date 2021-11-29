import VueRouter from 'vue-router'
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router = new VueRouter({
  mode:'history',// # hash模式，history没有#
  // mode:'hash',// # hash模式，history没有#
  routes: [
    {
      path: '/about',
      component: About,
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter')
        next()
      },
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'news',
          component: News,
        },
        {
          path: 'message',
          component: Message,
          children: [
            {
              path: 'detail',
              component: Detail,
              props($router) {
                return $router.query
              },
            },
          ],
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next)=>{
  console.log('beforeEach')
  next()
})
router.afterEach(()=>{
  console.log('afterEach')
})
export default router