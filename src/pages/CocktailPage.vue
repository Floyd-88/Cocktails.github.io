<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router'; //useRoute используется для получения url, useRouter - для перехода на другую страницу
import { storeToRefs } from 'pinia'; //подключаем pinia
import { useCounterStore } from '@/stores/root' //импортируем методы и свойства из Store
import CoctailsLayoutThema from '../layout/CoctailsLayoutThema.vue' //подключаем шаблон с общей разменткой

const route = useRoute();
const cocktailID = computed(() => route.fullPath.split('/').pop())

const rootStore = useCounterStore();
const { cocktail } = storeToRefs(rootStore)
rootStore.getCocktail(cocktailID.value)


const cocktailIngredients = computed(() => {
    const arrayIngredient = []

    for (let i = 1; i <= 15; i++) {
        if (cocktail.value[`strIngredient${i}`]) {
            let objCocktail = {}
            objCocktail.name = cocktail.value[`strIngredient${i}`]
            objCocktail.amount = cocktail.value[`strMeasure${i}`]

            arrayIngredient.push(objCocktail)
        }
    }
    return arrayIngredient
})

</script>

<template>
    <template v-if="cocktail">
        <CoctailsLayoutThema :imgUrl="cocktail.strDrinkThumb">
            <div class="wrapper">
                <div class="block-info">
                    <div class="title">{{ cocktail.strDrink }}</div>
                    <div class="line"></div>
                </div>
            </div>
            <div class="list">
                <div class="list-item" v-for="elem, index in cocktailIngredients" :key="index">
                    {{ elem.name }}
                    <template v-if="elem.amount">
                        |
                        {{ elem.amount }}
                    </template>

                </div>
            </div>
            <div class="instruction">
                {{ cocktail.strInstructions }}
            </div>
        </CoctailsLayoutThema>
    </template>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.instruction
    margin: 0 100px 100px 100px
    font-size: 20px
    line-height: 30px
</style>
