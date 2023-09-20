import axios from 'axios'
import { defineStore } from 'pinia'
import { INGREDIENTS_URL, COCKTAILS_URL, COCKTAIL_BY_ID, COCKTAIL_RANDOM } from '../constants'

export const useCounterStore = defineStore('root', {
    state: () => ({
        ingredients: [],
        ingredient: null,
        cocktails: [],
        cocktail: null,
    }),

    actions: {
        //получаем набор игредиентов
        async getIngredients() {
            const data = await axios.get(INGREDIENTS_URL)
            this.ingredients = data.data.drinks
        },

        // набор коктейлей
        async getCocktails(ingredient) {
            const data = await axios.get(`${COCKTAILS_URL}${ingredient}`)
            this.cocktails = data.data.drinks
        },

        // выбранный коктейль
        async getCocktail(cocktailID) {
            const data = await axios.get(`${COCKTAIL_BY_ID}${cocktailID}`)
            this.cocktail = data.data.drinks[0]
        },

        //рандомный коктейль
        async getRandomCocktail() {
            const data = await axios.get(`${COCKTAIL_RANDOM}`)
            this.cocktail = data.data.drinks[0]
        }
    }

})