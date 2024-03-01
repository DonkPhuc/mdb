<script lang="ts" setup>
const { user } = useAuth();
const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    // @ts-ignore
    if (user && user.value?.uid) {
      router.push("/");
    }
  }, 500);
});
</script>

<template>
  <div class="flex flex-col h-screen">
    <slot class="h-full" />
  </div>
</template>
