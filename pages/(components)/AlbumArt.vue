<script setup lang="ts">
defineProps({
    title: String,
    image: String,
    tags: Array<String>
})
</script>

<template>
    <article
        class="max-w-sm max-h-sm rounded rounded-lg shadow-lg text-[#0e020c] bg-[#f1eae4]"
    >
        <img
            v-bind:src="image"
            alt="Card focus-hero portrait"
            class="w-xs h-xs rounded rounded-sm"
        />

        <section class="px-4 py-2">
            <h1>{{ title }}</h1>
        </section>

        <div class="px-6 pt-4 pb-2">
            <span
                class="inline-block bg-[#446a4b] rounded-full px-2 py-1 text-sm text-[#f1eae4] mr-2 mb-2"
                v-for="tag in tags"
            >
                {{ tag }}
            </span>
        </div>
    </article>
</template>
