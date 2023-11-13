<template>
  <div class="absolute w-full h-full">
      <!-- Page viewer start -->
      <router-view v-slot="{ Component, route }" class="absolute w-full h-full bg-900">
          <transition :name=route.meta.transitionName>
                  <component :is=Component :key=route.path />
          </transition>
      </router-view>
      <!-- Page viewer end -->
  </div>
</template>

<script setup lang="ts">
  import { RouterView } from "vue-router";

  window.addEventListener('beforeinstallprompt', (event) => {
      // Prevent the app from being downloadable
      // Juste use pwa for caching
      event.preventDefault();
  });
</script>