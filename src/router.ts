import { createRouter, createWebHistory } from 'vue-router'
import { URLS } from '@/constants';

import { MyForm  } from '@/pages/my-form'
import { ExampleForm  } from '@/pages/example-form'

const routes = [
  { path: URLS.MY, component: MyForm },
  { path: URLS.EXAMPLE, component: ExampleForm },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
