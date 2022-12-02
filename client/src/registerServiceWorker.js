import { register } from 'register-service-worker';

if(!window.location.href.includes("localhost")) {
    register(`/sw.js`, {
        ready () {},
        registered () {},
        cached () {},

        updatefound () {
            useServerStore().newUpdate = true;
        },

        updated (registration) {
            let worker = registration.waiting;
            worker.postMessage({action: 'skipWaiting'});

            let serverStore = useServerStore();
            serverStore.updateInstalled = true;
            serverStore.newUpdate = false;
        },

        offline () {},
        error (error) {}
    });
}