<script setup lang="ts">
const { user } = useAuth();
const router = useRouter();

watchEffect(() => {
  // @ts-ignore
  if (user?.value?.accessToken) {
    router.push("/");
  }
});
</script>

<template>
  <slot />
</template>
