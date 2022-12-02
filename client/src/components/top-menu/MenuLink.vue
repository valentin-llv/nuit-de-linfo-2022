<template>
    <router-link @click="(mobileMenuState = false)" link :to=lien><p class="text-3xl font-bold">{{ title }} <span class="text-5xl font-medium">.</span></p></router-link>
</template>

<script setup lang="ts">
    import { useNaviguationStore } from '@/stores/navigation';
    import { storeToRefs } from 'pinia';
    import { RouterLink } from 'vue-router';

    defineProps({
        title: String,
        
        lien: {
            type: String,
            required: true,
        },
    });

    const { mobileMenuState } = storeToRefs(useNaviguationStore());
</script>

<style scoped>
    @import "tailwindcss/components";

    @layer components {
        [link] {
            @apply m-auto cursor-pointer duration-100 hover:-translate-y-1;
        }
    }
</style>