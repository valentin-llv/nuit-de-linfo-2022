<template>
    <div class="flex flex-col lg:flex-row p-14">
        <component :is=icon class="w-36 h-36 m-auto mb-10 lgmb-0 lg:ml-8" />

        <div class="flex-1 flex flex-col lg:ml-20">
            <p class="text-2xl md:text-3xl text-justify">
                {{ content }}
            </p>

            <p class="text-3xl md:text-4xl text-right mt-5">
                {{ name }}, {{ age }}ans
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
    defineProps({
        name: String,
        age: String,
        content: String,
        icon: Object,
    });
</script>

<style scoped>

</style>