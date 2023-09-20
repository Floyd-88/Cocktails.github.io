<script setup>
const props= defineProps({
    cocktails: {
        type: Array,
        required: true
    }
})

</script>

<template>
    <div 
        class="card-cocktails" 
        v-for="elem in cocktails" 
        :key="elem.idDrink">
        <router-link :to="`/cocktail/${elem.idDrink}`">
            <img class="img" :src="elem.strDrinkThumb" :alt="elem.strDrink">
        </router-link>
        <div class="name-cocktail">{{elem.strDrink}}</div>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.card-cocktails
    widtch: calc((100% - 76px)/3)
    padding-right: 38px
    padding-bottom: 40px

    &::nth-child(3n + 3)
        padding-right: 0

.img
    width: 120px
    height: 120px
    cursor: pointer
        
.name-cocktail
    padding-top: 15px
    letter-spacing: .1em
</style>