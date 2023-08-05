<template>
  <div class="flex relative justify-center w-full px-12">
    <div class="grid grid-cols-[1fr_200px_1fr] grid-rows-[100px] gap-6 w-full">
      <div class="flex items-center">Olá</div>
      <div class="flex items-center">
        <NuxtLink to="/">
          <icons-haunted-logo />
        </NuxtLink>
      </div>
      <div class="flex items-center justify-end">
        <SearchInput />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SearchInput from './SearchInput.vue'
</script>

<style scoped></style>
