<template>
    <div class="flex-1 lg:flex-none lg:w-[50%] flex p-0 lg:p-20 duration-300" :class="[bgClass]">
        <div class="m-auto p-12 lg:p-0 lg:max-w-[90%] flex flex-col">
            <h2 class="lg:text-center font-bold text-5xl md:text-6xl color-900-fix">
                {{ title }}
            </h2>

            <p class="text-2xl md:text-3xl mt-8 max-w-7xl color-900-fix">
                {{ content }}
            </p>

            <component :is=icon class="m-auto mt-20 h-[200px] w-full" />

            <div class="mt-20 flex flex-row flex-wrap">
                <div class="m-auto">
                    <router-link :to=link>
                        <div class="mb-6 rounded-full duration-100 hover:scale-105 p-7 flex flex-row" :class="[buttonClass]">
                            <p class="text-2xl md:text-3xl color-100-fix">{{ buttonText }}</p>
                            <ArrowRight class="m-auto ml-5 h-8 w-8" />
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import ArrowRight from '@/icons/ArrowRight.vue';

    defineProps({
        title: String,
        content: String,
        buttonText: String,

        icon: Object,

        bgClass: String,
        buttonClass: String,
        
        link: {
            type: String,
            required: true,
        },
    });
</script>

<style scoped>

</style>