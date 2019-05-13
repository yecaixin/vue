import Vue from 'vue'
import Router from 'vue-router'
// 写法1
import home         from '@/page/home/home'
// import home         from '@/components/home/home'
import subgroup     from '@/components/subgroup/subgroup'
import echarts      from '@/components/echarts/echarts'
import table        from '@/components/table/table'
import test         from '@/components/test/test'
import slider       from '@/components/slider/slider'
import infoModify   from '@/components/infoModify/infoModify'
import amap         from '@/page/map/index'
// 写法2
const examples = () => import('@/page/examples/index')
// 写法3  按需加载
// const test = r => require.ensure( [], () => r (require('@/components/test/test')))//页面按需加载的引入

//pc端自己封装的组件
const DemoPaginate=()=>import('@/components/paginate/ComPaginate')


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'coco',
      component: home,
      meta: {
        title: '首页'
      }
    },
    {
      path: '/subgroup',
      name: 'subgroup',
      component: subgroup,
      meta: {
        title: '组件'
      }
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts,
      meta: {
        title: '表格'
      }
    },
    {
      path: '/table',
      name: 'table',
      component: table,
      meta: {
        title: 'table'
      }
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider,
      meta: {
        title: 'slider'
      }
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {
        title: '测试页面'
      }
    },
    {
      path: '/infoModify',
      name: 'infoModify',
      component: infoModify,
      meta: {
        title: '修改信息'
      }
    },
    {
      path: '/amap',
      name: 'amap',
      component: amap,
      meta: {
        title: '高德地图'
      }
    },
    {
      path: '/examples',
      name: 'examples',
      component: examples,
      meta: {
        title: '组件demo'
      }
    },
    {
      path: '/demoPaginate',
      name: 'DemoPaginate',
      component: DemoPaginate,
      meta: {
        title: '分页插件'
      }
    },
  ]
})
