<template>
    <!-- Top menu -->
    <div class="z-30 absolute w-full flex flex-row h-24 md:h-32">
        <!-- Site name / Logo -->
        <div class="h-full justify-center flex flex-col flex-1 cursor-pointer">
            <router-link to="/" aria-label="Retour à la page d'accueil"><Favicon class=" h-60 md:h-80 ml-10" /></router-link>
        </div>

        <!-- Desktop menu -->
        <div class="flex-row h-full ml-10 hidden lg:flex gap-12">
            <MenuLink title="Les ISTs" lien="/articles/ist" />
            <MenuLink title="Les VSS" lien="/articles/vss" />
            <MenuLink title="La puberté" lien="/articles/pub"  />
            <MenuLink title="LGBTQIA+" lien="/articles/lgb" />
        </div>

        <!-- Desktop socials -->
        <!-- <div class="flex-row hidden lg:flex lg:mr-10 gap-6 ml-10">
            <SocialIcons />
        </div> -->

        <!-- Theme mode -->
        <div class="flex-row hidden lg:flex lg:mr-10 gap-6 ml-10">
            <Sun v-if="darkMode" @click=toogleDarkMode class="cursor-pointer duration-100 hover:scale-105 m-auto h-14 w-14" />
            <Moon v-if="!darkMode" @click=toogleDarkMode class="cursor-pointer duration-100 hover:scale-105 m-auto h-14 w-14" />
        </div>

        <!-- Mobile menu - Hamburger -->
        <div class="block lg:hidden mr-4 ml-4 mt-8 md:mr-8 md:ml-8 md:mt-7">
            <input @input=openMenu id="top-menu-hamburger" type="checkbox" class="hidden" />

            <label for="top-menu-hamburger" id="menu-label">
                <div class="h-1.5 w-12 bg-100 rounded-full"></div>
                <div class="h-1.5 w-12 bg-100 rounded-full mt-2"></div>
                <div class="h-1.5 w-12 bg-100 rounded-full mt-2"></div>
            </label>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useNaviguationStore } from '@/stores/navigation';
    import { storeToRefs } from 'pinia';

    import SocialIcons from '@/components/top-menu/SocialIcons.vue';
    import MenuLink from '@/components/top-menu/MenuLink.vue';

    import Favicon from '@/icons/Favicon.vue';
    import Sun from '@/icons/Sun.vue';
    import Moon from '@/icons/Moon.vue';

    const { mobileMenuState, darkMode } = storeToRefs(useNaviguationStore());

    function openMenu() {
        mobileMenuState.value = !mobileMenuState.value;
    }

    function toogleDarkMode() {
        darkMode.value = !darkMode.value;

        let shades = [900, 100];
        for(let i = 0; i < shades.length; i++) {
            document.documentElement.style.setProperty('--color-' + shades[i], 'var(--color-' + shades[i] + "-" + (darkMode.value ? "dark": "light") + ')');
        }
    }
</script>

<style scoped>
    /* Mobile hamburger */

    #menu-label div {
        transition: transform 0.2s, margin-top 0.2s linear 0.2s, opacity 0.2s linear 0.2s;
    }

    :checked + #menu-label div {
        transition: transform 0.2s linear 0.2s, margin-top 0.2s, opacity 0.2s;
    }

    :checked + #menu-label div:nth-child(1) {
        transform: rotate(-45deg);
        margin-top: 10px;
    }

    :checked + #menu-label div:nth-child(2) {
        opacity: 0;
        margin-top: -10px;
    }

    :checked + #menu-label div:nth-child(3) {
        transform: rotate(45deg);
        margin-top: 1.5px;
    }
</style>