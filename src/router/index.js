import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/pages/Home'
import Cart from '@/pages/Cart'

import Index from '@/pages/admin/Index'
import Edit from '@/pages/admin/Edit'
import New from '@/pages/admin/New'
import Products from '@/pages/admin/Products'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/admin',
            name: 'Admin',
            component: Index,
            children: [{
                    path: 'new',
                    name: 'New',
                    component: New
                },
                {
                    path: 'edit/:id',
                    name: 'Edit',
                    component: Edit
                },
                {
                    path: 'products',
                    name: 'Products',
                    component: Products
                }
            ]
        },
        {
            path: '/cart',
            name: 'Cart',
            component: Cart
        }
    ]
})