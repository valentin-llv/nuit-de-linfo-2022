<template>
    <div class="absolute overflow-auto overflow-x-hidden w-full h-full">
        <TopMenu />
        <MobileMenu />

        <div class="flex flex-col lg:flex-row mt-32 md:mt-40">
            <h2 class="font-bold text-5xl md:text-6xl ml-20"> Nous contacter </h2>
        </div>

        <p class="text-2xl md:text-3xl mt-8 md:mt-14 ml-20">
            Adresse email&nbsp;: valentin-lelievre@etu.univ-tours.fr <br />
            Téléphone: 07&nbsp;66&nbsp;14&nbsp;00&nbsp;66
        </p>

        <WebsiteFooter />
    </div>
</template>

<script setup lang="ts">
    import WebsiteFooter from '@/components/WebsiteFooter.vue';
    import TopMenu from '@/components/top-menu/TopMenu.vue';
    import MobileMenu from '@/components/top-menu/MobileMenu.vue';
</script>

<style scoped>

</style>