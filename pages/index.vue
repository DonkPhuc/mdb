<script lang="ts" setup>
const { data, pending, error, refresh } = await useFetch("/api/dashboard", {
  method: "get",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <USkeleton v-if="pending" class="h-8 w-40" />
    <p v-else-if="error">{{ error.message }}</p>
    <p v-else-if="data">{{ data }}</p>
    <div>
      <UButton color="gray" @click="refresh">Button</UButton>
    </div>
  </div>
</template>
