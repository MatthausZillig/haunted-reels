<template>
  <nav
    class="flex relative justify-center w-full px-12 text-zinc-700"
  >
    <div
      class="grid grid-cols-[1fr_200px_1fr] grid-rows-[100px] gap-6 w-full"
    >
      <div
        class="flex items-center font-medium uppercase"
      >
        <NuxtLink
          to="/about"
          class="no-underline hover:text-zinc-500"
          >About</NuxtLink
        >
      </div>
      <div class="flex items-center">
        <NuxtLink to="/">
          <icons-haunted-logo />
        </NuxtLink>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>

<style scoped></style>
