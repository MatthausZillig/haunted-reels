<template>
  <div class="max-w-fit border flex flex-col text-center">
    <NuxtLink
      :to="`movies/${movie.id}`"
      class="flex justify-center h-[300px] w-[200px] rounded-md shadow-xl hover:shadow-2xl opacity-[.87]"
    >
      <img class="inline-block rounded-md" :src="imgURL" alt="Movie Poster" />
    </NuxtLink>
    <div class="flex justify-between text-xs mt-2 uppercase whitespace-nowrap">
      <p class="text-ellipsis overflow-hidden max-w-[120px] font-semibold">
        {{ movie.title }}
      </p>
      <p class="text-ellipsis overflow-hidden text-zinc-600 font-ligh">
        {{ movie.vote_average }}
      </p>
    </div>
    <div class="flex justify-initial text-xs font-light mt-1 whitespace-nowrap">
      <p class="text-ellipsis overflow-hidden">
        {{ formatDate(movie.release_date) }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { PropType } from 'vue'
import { Movie } from '../types/Movie'
import { formatDate } from '~/utils/index'

const props = defineProps({
  movie: {
    type: Object as PropType<Movie>,
    required: true
  }
})

const config = useRuntimeConfig()
const imgURL = computed(() =>
  props.movie.poster_path != null
    ? `${config.public.imgBaseUrl}/${props.movie.poster_path}`
    : 'https://via.placeholder.com/300x500'
)
</script>
