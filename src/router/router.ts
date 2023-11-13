import { createRouter, createWebHashHistory } from "vue-router";

import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Articles from "@/views/articles/Articles.vue";
import Games from "@/views/games/Games.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            component: Home,
        },

        {
            path: "/contact",
            component: Contact,
        },

        { 
            path: '/articles/:articleName',
            component: Articles,
        },

        { 
            path: '/games/:gamesName',
            component: Games,
        },
    ],
});

export default router;