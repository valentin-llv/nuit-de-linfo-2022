<template>
    <div class="z-20 fixed top-0 h-full w-full bg-900 flex flex-col pt-40 left-full lg:hidden duration-200 overflow-hidden" :class="{ 'left-0': mobileMenuState }">
        <div class="relative w-full h-full">
            <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2/3 flex flex-col justify-around -mt-44">
                <div class="text-center text-5xl font-medium cursor-pointer">
                    <MenuLink title="Les ISTs" lien="/articles/ist" />
                </div>

                <div class="text-center text-5xl font-medium cursor-pointer">
                    <MenuLink title="Les VSS" lien="/articles/vss" />
                </div>

                <div class="text-center text-5xl font-medium cursor-pointer">
                    <MenuLink title="La puberté" lien="/articles/pub" />
                </div>

                <div class="text-center text-5xl font-medium cursor-pointer">
                    <MenuLink title="LGBTQIA+" lien="/articles/lgb" />
                </div>
            </div>

            <!-- <div class="absolute top-full -translate-y-full -mt-40 left-1/2 -translate-x-1/2 w-1/2 flex flex-row">
                <SocialIcons />
            </div> -->

            <!-- Theme mode -->
            <div class="absolute top-full -translate-y-full left-1/2 -translate-x-1/2 -mt-12">
                <Sun v-if="darkMode" @click=toogleDarkMode class="cursor-pointer duration-100 hover:scale-105 m-auto h-14 w-14" />
                <Moon v-if="!darkMode" @click=toogleDarkMode class="cursor-pointer duration-100 hover:scale-105 m-auto h-14 w-14" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useNaviguationStore } from '@/stores/navigation';
    import { storeToRefs } from 'pinia';

    import MenuLink from '@/components/top-menu/MenuLink.vue';
    import Sun from '@/icons/Sun.vue';
    import Moon from '@/icons/Moon.vue';

    import SocialIcons from '@/components/top-menu/SocialIcons.vue';

    const { mobileMenuState, darkMode } = storeToRefs(useNaviguationStore());

    function toogleDarkMode() {
        darkMode.value = !darkMode.value;

        let shades = [900, 100];
        for(let i = 0; i < shades.length; i++) {
            document.documentElement.style.setProperty('--color-' + shades[i], 'var(--color-' + shades[i] + "-" + (darkMode.value ? "dark": "light") + ')');
        }
    }
</script>

<style scoped>

</style>