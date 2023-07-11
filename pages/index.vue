<template>
    <div>
        Home page
    </div>
</template>

<script setup lang="ts">
const { data } = await useFetch('/api/movies/discover');
console.log('Movies', data.value)
</script>

<style scoped>

</style>