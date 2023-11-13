<template>
    <div class="absolute overflow-auto overflow-x-hidden w-full h-full">
        <TopMenu class="mt-[1px] border-b-2 border-100" />
        <MobileMenu />

        <div class="relative mt-24 md:mt-40 element-height">
            <GamesIst v-if="$route.params.gamesName == 'ist'" />
            <GamesVss v-if="$route.params.gamesName == 'vss'" />
            <GamesPub v-if="$route.params.gamesName == 'pub'" />
            <GamesLGB v-if="$route.params.gamesName == 'lgb'" />
        </div>

        <WebsiteFooter class="border-t-2 border-100 mt-10" />
    </div>
</template>

<script setup lang="ts">
    import WebsiteFooter from '@/components/WebsiteFooter.vue';
    import TopMenu from '@/components/top-menu/TopMenu.vue';
    import MobileMenu from '@/components/top-menu/MobileMenu.vue';
    
    import GamesIst from './GamesIst.vue';
    import GamesVss from './GamesVss.vue';
    import GamesPub from './GamesPub.vue';
    import GamesLGB from './GamesLGB.vue';
</script>

<style scoped>
    @media screen and (min-width: 1024px) { 
        .element-height {
            height: 950px;
        }
    }
</style>