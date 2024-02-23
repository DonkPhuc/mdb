<script lang="ts" setup>
const { data, error, status, pending, refresh } = await useFetch(
  "/api/projects",
  { method: "get" }
);
</script>

<template>
  <div class="flex flex-col gap-4">
    <p>data : {{ data }}</p>
    <p>error : {{ error }}</p>
    <p>status : {{ status }}</p>
    <p>pending : {{ pending }}</p>
    <div>
      <UButton color="gray" @click="refresh">Button</UButton>
    </div>
  </div>
</template>
