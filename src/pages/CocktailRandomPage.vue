<script setup>
import { computed, ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'; //импортируем слайдер установленный через npm install swiper
import { Navigation } from 'swiper/modules';
import 'swiper/css'; //стили для слайдера
import 'swiper/css/navigation';

import { storeToRefs } from 'pinia'; //подключаем pinia
import { useCounterStore } from '@/stores/root'
import { INGREDIENT_IMG_SMALL } from '../constants'

import CoctailsLayoutThema from '../layout/CoctailsLayoutThema.vue' //подключаем шаблон с общей разменткой

const rootStore = useCounterStore();
const { cocktail } = storeToRefs(rootStore)
rootStore.getRandomCocktail()

const cocktailIngredients = computed(() => {
    const arrayIngredient = []

    for (let i = 1; i <= 15; i++) {
        if (cocktail.value[`strIngredient${i}`]) {
            arrayIngredient.push(cocktail.value[`strIngredient${i}`])
        }
    }
    return arrayIngredient
})

const modules = ref([Navigation])

</script>

<template>
    <template v-if="cocktail">
        <CoctailsLayoutThema :imgUrl="cocktail.strDrinkThumb">
            <div class="wrapper">
                <div class="block-info">
                    <div class="title">{{ cocktail.strDrink }}</div>
                </div>
            </div>
            <div class="list">
                <swiper :modules="modules" :slides-per-view="3" :space-between="40" navigation :pagination="{ clickable: true }"
                    :scrollbar="{ draggable: true }">
                    <swiper-slide v-for="(elem, key) in cocktailIngredients" :key="key">
                        <img class="img" :src="`${INGREDIENT_IMG_SMALL}${elem}-Small.png`" :alt="elem">
                        <div class="name">
                            {{ elem }}
                        </div>
                    </swiper-slide>
                </swiper>
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

.swiper
    margin: 50px 40px 0
    padding: 0 40px
    text-align: center

.name
    padding-top: 20px
</style>
