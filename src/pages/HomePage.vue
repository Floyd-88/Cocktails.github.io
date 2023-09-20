<script setup>
import { storeToRefs } from 'pinia';
import { useCounterStore } from '@/stores/root'

import CoctailsLayoutThema from '../layout/CoctailsLayoutThema.vue'
import CocktailsIngredient from '../components/CocktailsIngredient.vue'

const rootStore = useCounterStore();
const { ingredients, ingredient, cocktails } = storeToRefs(rootStore)
rootStore.getIngredients();

function removeIngredient() {
    ingredient.value = null
}
</script>

<template>
    <CoctailsLayoutThema :imgUrl="'/bg.jpg'" :goBack="removeIngredient" :isGoBack="!!ingredient">
        <div class="wrapper">
            <div class="block-info" v-if="!ingredient">
                <div class="title">Choose your drink</div>
                <div class="line"></div>

                <div class="select-wrapper">
                    <el-select class="select"
                    filterable
                    allow-create 
                    v-model="rootStore.ingredient" 
                    placeholder="Choose main ingredient"
                    @change="rootStore.getCocktails(rootStore.ingredient)">
                        <el-option v-for="item in ingredients" 
                        :key="item.strIngredient1" 
                        :label="item.strIngredient1" 
                        :value="item.strIngredient1"
                        :disabled="item.disabled" />
                    </el-select>
                </div>

                <div class="text">
                    Try our delicious cocktail recipes for every occasion. Find delicious cocktail recipes by ingredient through our cocktail generator.
                </div>

                <img class="img" src="../assets/img/cocktails.png" alt="cocktails">
            </div>
            <div v-else class="block-info">
                <div class="title">COCKTAILS WITH Midori {{ ingredient }}</div>
                <div class="line"></div>
                <div class="cocktails">
                    <CocktailsIngredient :cocktails="cocktails"/>
                </div>
            </div>
        </div>
    </CoctailsLayoutThema>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'



.select-wrapper
    padding-top: 82px
.select
    width: 220px

.text
    max-width: 516px
    margin: 0 auto
    padding-top: 50px
    font-weight: 400
    font-size: 16px
    line-height: 36px
    letter-spacing: .1em

.img
    padding-top: 60px
    
.cocktails
    display: flex
    flex-wrap: wrap
    justify-content: center
    max-height: 400px
    overflow-y: auto
</style>
