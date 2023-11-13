<template>
    <div class="absolute overflow-auto overflow-x-hidden w-full h-full">
        <TopMenu class="mt-[1px] border-b-2 border-100" />
        <MobileMenu />

        <div class="relative mt-24 md:mt-40 flex justify-center">
            <div class="w-full max-w-[1200px] p-10">
                <ArticleIst v-if="$route.params.articleName == 'ist'" />
                <ArticlesVss v-if="$route.params.articleName == 'vss'" />
                <ArticlesPub v-if="$route.params.articleName == 'pub'" />
                <ArticlesLGB v-if="$route.params.articleName == 'lgb'" />
            </div>
        </div>

        <WebsiteFooter class="border-t-2 border-100 mt-10" />
    </div>
</template>

<script setup lang="ts">
    import WebsiteFooter from '@/components/WebsiteFooter.vue';
    import TopMenu from '@/components/top-menu/TopMenu.vue';
    import MobileMenu from '@/components/top-menu/MobileMenu.vue';

    import ArticleIst from '@/views/articles/ArticleIst.vue';
    import ArticlesVss from '@/views/articles/ArticlesVss.vue';
    import ArticlesPub from '@/views/articles/ArticlesPub.vue';
    import ArticlesLGB from '@/views/articles/ArticlesLGB.vue';

</script>

<style scoped>

</style>