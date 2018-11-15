import Vue from 'vue'
/* global Vue */
import Router from 'vue-router'
import Player from '@/components/Player'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'Player',
      component: Player
    }
  ]
})
