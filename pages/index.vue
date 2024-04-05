<script lang="ts" setup>
const selected = ref(new Date().getDate())
const token = ref(
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE3MTE5NDY5OTcsImV4cCI6MTcxMjU1MTc5N30.wCfjh9MauyAFFKlOKN4SaSh3peNuQPJ4FNRXKE0N-5I',
)

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
    <div class="flex flex-col gap-4">
      <div class="w-full">
        <UInput
          v-model="token"
          color="primary"
          variant="outline"
          placeholder="Key"
        />
      </div>
      <div class="flex gap-4">
        {{ selected }}
        <USelectMenu v-model="selected" class="w-48" :options="daysInMonth" />
        <UButton label="Check" @click="refresh" />
      </div>
    </div>
  </div>
</template>
