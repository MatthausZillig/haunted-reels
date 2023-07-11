<template>
    <div>
        <p class="text-5xl text-gray-500">Home page</p>
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/movies/discover');
console.log('Movies', data.value)
</script>

<style scoped>

</style>