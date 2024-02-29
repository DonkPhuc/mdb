<script setup lang="ts">
const { user } = useAuth();
const router = useRouter();
</script>

<template>
  <slot />
</template>
