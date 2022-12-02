<template>
    <div class="p-5 border-4 border-100 rounded-xl flex flex-row duration-300">
        <div>
            <input @input=sendMessage :id="('radio' + radioIndex)" type="radio" class="hidden" name="radio" :checked="radioIndex == '1'" />

            <label class="m-auto radio-label" :for="('radio' + radioIndex)">
                <div class="relative h-12 w-12 rounded-full border-4 border-100 bg-transparent">
                    <div class="point absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-5 w-5 rounded-full bg-100"></div>
                </div>
            </label>
        </div>

        <p class="ml-6 text-2xl md:text-3xl m-auto">
            {{ text }}
        </p>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps({
        text: String,

        radioIndex: {
            type: String,
            required: true,
        }
    });

    const emit = defineEmits(['message']);

    function sendMessage() {
        emit("message", props.radioIndex);
    }
</script>

<style scoped>
    /* Mobile hamburger */

    .radio-label .point {
        opacity: 0;
    }

    :checked + .radio-label .point {
        opacity: 1;
    }
</style>