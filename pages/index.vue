<script lang="ts" setup>
const selected = ref(new Date().getDate())
const token = ref('')

onMounted(() => {
  token.value = localStorage.getItem('token') || ''
})

const daysInMonth = computed(() => {
  const currentDate = new Date()
  const currentMonth = currentDate.getMonth() + 1
  const currentYear = currentDate.getFullYear()
  const days = new Date(currentYear, currentMonth, 0).getDate()
  return Array.from({ length: days }, (_, i) => {
    const day = i + 1
    return day
  })
})

const { data, refresh } = await useFetch('/api/dashboard', {
  method: 'post',
  immediate: false,
  onRequest({ options }) {
    localStorage.setItem('token', token.value)
    options.body = {
      token: token.value,
      day: Number(selected.value),
    }
  },
  body: {
    token: token.value,
    day: Number(selected.value),
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div v-for="(item, index) in data" :key="index">
      <p>{{ item }}</p>
    </div>
    <div class="flex flex-col gap-4 w-72">
      <UInput
        v-model="token"
        color="primary"
        variant="outline"
        placeholder="Key"
      />
      <div class="flex gap-4 justify-between">
        <USelectMenu v-model="selected" :options="daysInMonth" />
        <UButton label="Check" @click="refresh" />
      </div>
    </div>
  </div>
</template>
