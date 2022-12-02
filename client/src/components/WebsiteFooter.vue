<template>
    <div class="w-full flex flex-col lg:flex-row pb-10 lg:pb-0">
        <a href="/" class="m-auto"><Favicon class="w-60 md:w-80 ml-10" /></a>

        <div class="flex-1 flex flex-row-reverse">
            <div class="m-auto lg:mr-28 text-3xl">
                <p class="font-medium text-4xl"> Liens utiles: </p>

                <div class="ml-5 mt-2">
                    <router-link class="hover:underline" to="/">- Accueil</router-link>
                </div>

                <div class="ml-5 mt-2">
                    <router-link class="hover:underline" to="/articles/ist">- Les ISTs</router-link>
                </div>

                <div class="ml-5 mt-1">
                    <router-link class="hover:underline" to="/articles/vss">- Les VSS</router-link>
                </div>

                <div class="ml-5 mt-1">
                    <router-link class="hover:underline" to="/articles/pub">- La puberté</router-link>
                </div>

                <div class="ml-5 mt-1">
                    <router-link class="hover:underline" to="/articles/lgb">- LGBTQIA+</router-link>
                </div>

                <div class="ml-5 mt-2">
                    <router-link class="hover:underline" to="/contact">- Contact</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Favicon from '@/icons/Favicon.vue';
</script>

<style scoped>

</style>