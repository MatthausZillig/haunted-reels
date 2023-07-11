<template>
    <div>
        {{ `Movie ${movieId}` }}
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
const movieId =  computed(() => route.params.id)
</script>