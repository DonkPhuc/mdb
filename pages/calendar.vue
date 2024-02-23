<script lang="ts" setup>
const router = useRouter();
</script>

<template>
  <section>
    <p>{{ router.currentRoute.value.fullPath }}</p>
  </section>
</template>
