import { defineStore } from "pinia";
import { ref} from "vue";

export const useNaviguationStore = defineStore('naviguation', () => {
    const mobileMenuState = ref(false);

    const darkMode = ref(false);

    return {
        mobileMenuState,
        darkMode,
    }
});