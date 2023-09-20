import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import CocktailPage from '../pages/CocktailPage.vue'
import CocktailRandomPage from '../pages/CocktailRandomPage.vue'

import { PATH } from '../constants'

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: PATH.HOME,
            name: PATH.HOME,
            component: HomePage
        },
        {
            path: PATH.COCKTAIL,
            name: PATH.COCKTAIL,
            component: CocktailPage
        },
        {
            path: PATH.COCTAIL_RANDOM,
            name: PATH.COCTAIL_RANDOM,
            component: CocktailRandomPage
        },
    ]
})

export default router