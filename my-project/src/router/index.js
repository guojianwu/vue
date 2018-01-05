import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// const HelloWorld = () => import('../components/HelloWorld.vue')
import Foo from '../components/foo'
// const Foo = () => import('../components/foo.vue')
import Bar from '../components/bar'
// const Bar = () => import('../components/Bar.vue')
import NotFound from '../components/notFound'
// const NotFound = () => import('../components/NotFound.vue')
import Foo1 from '../components/foo/foo1'
import Foo2 from '../components/foo/foo2'
import Foo3 from '../components/foo/foo3'


Vue.use(Router)

const routers= new Router({
	base:'/dist/',
	// mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { index: 1 },
		  beforeRouteUpdate (to,from,next){
		    // console.log(to,from,next)
		    next();
		  }
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo,
      children:[
        {path:'',component:Foo1},
        {
          path:'foo2',
          component:Foo2,
          meta:{login:true},
          beforeEnter:function (to,from ,next) {
            if(to.meta.login){
            	// console.log(to,from,next)
              // next('/');
            }
            next();
          }
        },
        {path:'foo3',component:Foo3,name:'foo3'}
      ],
      meta: { index: 2 }
    },
    {
      path: "/bar/:id?",
      name: 'bar',
      component: Bar,
      meta: { index: 3 }
      // redirect:'/foo'
      // redirect:{name:'foo'}
      // redirect(to){
      // 	return {
      // 			name:'foo'

      // 	}
      // }
    },
    {
      path: '*',
      name: 'notFound',
      component: NotFound,
      meta: { index: 4 }
    }
  ],
    scrollBehavior (to, from, savedPosition){
    if(savedPosition){
      return savedPosition;
    }else{
      return {x:0,y:0}
    }
  }

})


routers.beforeEach(function(to,from,next){
	// console.log(to);
	 if(to.meta.login){
   // console.log(to,from,next)
    next('/');
  }		
	next();

})

export default routers;