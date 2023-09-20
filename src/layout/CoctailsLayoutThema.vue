<script setup>
import {Back} from '@element-plus/icons-vue'
import {useRoute, useRouter} from 'vue-router'
import {computed} from 'vue'
import {PATH} from '@/constants'

const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },

    goBack: {
        type: Function,
    },

    isGoBack: {
        type: Boolean,
        default: true
    }

})

let route = useRoute()
let router = useRouter()

let nameRoute = computed(() => route.name)

function goRandomCocktail() {
    if(nameRoute.value !== PATH.COCTAIL_RANDOM) {
        router.push(PATH.COCTAIL_RANDOM)
    } else {
        router.go()
    }
}

function backFunc() {
    props.goBack ? props.goBack() : router.go(-1);
}

</script>

<template>
    <div class="wrapper">
        <div class="img" :style="`background-image: url(${imgUrl})`"></div>
        <div class="main">
            <el-button v-if="isGoBack" type="success" :icon="Back" circle  class="back" @click="backFunc"/>
            <el-button class="btn-random-cocktail" @click="goRandomCocktail">Get random cocktail</el-button>
            <slot></slot>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../assets/styles/main'

.wrapper
    display: flex
    min-height: 100vh
    background-color: $background

.img
    width: 50%
    background-repeat: no-repeat
    background-position: 50% 50%
    background-size: cover

.main
    width:50% 
    position: relative
    padding-left: 40px

.btn-random-cocktail
    position: absolute
    top: 32px
    right: 40px
    width: 182px
    height: 32px
    font-family: $font-family
    font-size: 16px
    background-color: $accent
    border-color: $accent
    color: $text 

    &:hover,
    &:active
        background-color: darken($accent, 10%)
        border-color: darken($accent, 10%)

.back
    margin: 36px 0
    background: transparent
    border-color: $text

    &:hover
        border-color: $accent 

</style>
