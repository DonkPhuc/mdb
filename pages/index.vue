<script lang="ts" setup>
const { user } = useAuth();
</script>

<template>
  <div class="flex flex-col gap-4">
    {{ user }}
  </div>
</template>
