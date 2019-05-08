import Vue from 'vue'
import Router from 'vue-router'

import coco         from '@/page/test/test'
import home         from '@/components/home/home'
import subgroup     from '@/components/subgroup/subgroup'
import echarts      from '@/components/echarts/echarts'
import table        from '@/components/table/table'
import test         from '@/components/test/test'
import slider       from '@/components/slider/slider'
import infoModify   from '@/components/infoModify/infoModify'

import amap     from '@/page/map/index'
 
// const amap = r => require.ensure( [], () => r (require('@/page/map/index')))//页面按需加载的引入

// import test     from '@/components/test/test'
// const test = r => require.ensure( [], () => r (require('@/components/test/test')))//页面按需加载的引入



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'coco',
      component: coco
    },
    {
      path: '/subgroup',
      name: 'subgroup',
      component: subgroup
    },
    {
      path: '/echarts',
      name: 'echarts',
      component: echarts
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/slider',
      name: 'slider',
      component: slider
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/infoModify',
      name: 'infoModify',
      component: infoModify
    },
    {
      path: '/amap',
      name: 'amap',
      component: amap
    },
  ]
})
