import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/profils/Home.vue'
import Createprofils from '../views/profils/Createprofils.vue'
import Editprofils from '../views/profils/Editprofils.vue'
import pengalamans from '../views/pengalamans/pengalamans.vue'
import Createpengalamans from '../views/pengalamans/Createpengalamans.vue'
import Editpengalamans from '../views/pengalamans/Editpengalamans.vue'
import historys from '../views/historys/historys.vue'
import Createhistorys from '../views/historys/Createhistorys.vue'
import Edithistorys from '../views/historys/Edithistorys.vue'
import hubungis from '../views/hubungis/hubungis.vue'
import Createhubungis from '../views/hubungis/Createhubungis.vue'
import Edithubungis from '../views/hubungis/Edithubungis.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/createprofils',
    name: 'Createprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createprofils
  },
  {
    path: '/editprofils/:id',
    name: 'Editprofils',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editprofils
  },
  {
    path:'/historys',
    name: 'historys',
    component: historys
  },
  {
    path: '/createhistorys',
    name: 'Createhistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createhistorys
  },
  {
    path: '/edithistorys/:id',
    name: 'Edithistorys',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edithistorys
  },
  {
    path: '/pengalamans',
    name: 'pengalamans',
    component: pengalamans
  },
  {
    path: '/createpengalamans',
    name: 'Createpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createpengalamans
  },
  {
    path: '/editpengalamans/:id',
    name: 'Editpengalamans',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Editpengalamans
  },
  {
    path: '/hubungis',
    name: 'hubungis',
    component: hubungis
  },
  {
    path: '/createhubungis',
    name: 'Createhubungis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Createhubungis
  },
  {
    path: '/edithubungis/:id',
    name: 'Edithubungis',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Edithubungis
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
