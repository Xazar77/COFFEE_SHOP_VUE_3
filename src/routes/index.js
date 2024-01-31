import { createRouter, createWebHistory } from 'vue-router'

import HeroPageView from '../views/HeroPageView.vue'
import OurCoffeeView from '../views/OurCoffeeView.vue'
import ForYourPleasureView from '../views/ForYourPleasureView.vue'
import ContactsUsView from '../views/ContactsUsView.vue'
import ThanksYouView from '@/views/ThanksYouView.vue'
import GoodsItemView from '@/views/GoodsItemView.vue'


export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Hero',
            component: HeroPageView
        },
        {
            path: '/our-coffee',
            name: 'OurCoffee',
            component: OurCoffeeView
        },
        {
            path: '/for-your-pleasure',
            name: 'ForYourPleasure',
            component: ForYourPleasureView
        },
        {
            path: '/contacts-us',
            name: 'ContactUs',
            component: ContactsUsView
        },
        {
            path: '/thanks-you',
            name: 'ThanksYouView',
            component: ThanksYouView
        },
        { name: "coffee", path: '/our-coffee/:id', component: GoodsItemView},
        { name: "goods", path: '/for-your-pleasure/:id', component: GoodsItemView}  
        
    ]
})