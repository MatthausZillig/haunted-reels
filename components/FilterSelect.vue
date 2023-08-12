<template>
  <div
    v-if="!term"
    class="flex justify-start mb-10 z-[999] xs:w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1280px] xxl:w-[1600px]"
  >
    <select-root
      v-model="filter"
      class="cursor-pointer"
    >
      <select-trigger
        aria-label="Filter opitions"
        class="z-[1000] w-[200px] inline-flex items-center justify-between rounded px-2 text-xs text-zinc-600 font-semibold leading-none h-[35px] gap-[5px] bg-transparent hover:bg-mauve3outline-none border-1 border-zinc-500 cursor-pointer"
      >
        {{
          filter
            ? filter
            : 'Sort results by'
        }}
        <Icon
          icon="radix-icons:chevron-down"
          class="h-3.5 w-3.5"
        />
      </select-trigger>
      <select-portal class="z-[999]">
        <select-content
          :side-offset="5"
          class="z-[999] w-[200px] bg-white rounded px-2 py-4 data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        >
          <select-group>
            <select-item
              v-for="(
                option, index
              ) in options"
              :key="index"
              class="cursor-pointer py-2 text-xs"
              :value="option.name"
            >
              {{ option.name }}
            </select-item>
          </select-group>
        </select-content>
      </select-portal>
    </select-root>
  </div>
</template>

<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectPortal,
  SelectRoot,
  SelectTrigger
} from 'radix-vue'

import { Icon } from '@iconify/vue'
import { storeToRefs } from 'pinia'
import { options } from '~/constants/Enums'
import { useMoviesStore } from '~/stores/MoviesStore'
const { term, page } = storeToRefs(
  useMoviesStore()
)
const moviesStore = useMoviesStore()

const filter = ref()

watch(filter, () => {
  moviesStore.updatePage(1)
  moviesStore.getMovies(
    page?.value,
    '',
    getFilterValue(
      filter.value,
      options
    )?.value
  )
})
</script>

<style scoped></style>
