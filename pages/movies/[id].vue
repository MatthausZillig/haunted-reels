<template>
    <div>
        {{ `Movie ${movieId}` }}
    </div>
</template>

<script setup lang="ts">
import { Movie } from '~/types/Movie';
const route = useRoute();
const movieId =  computed(() => route.params.id)

const { data } = await useFetch<Movie>(`/api/movies/${movieId.value}`);
console.log('Movie', data.value)
</script>