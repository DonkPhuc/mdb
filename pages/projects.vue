<script lang="ts" setup>
const { data, error, pending } = await useFetch('/api/dashboard', {
  method: 'post',
  lazy: true,
  body: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE3MTE5NDY5OTcsImV4cCI6MTcxMjU1MTc5N30.wCfjh9MauyAFFKlOKN4SaSh3peNuQPJ4FNRXKE0N-5I',
  },
})
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <UNotification
        v-if="!pending && data"
        :timeout="60000"
        :title="error ? 'Failed' : 'Successfully'"
        :description="error ? 'Failed' : 'Successfully'"
      />
    </div>
    <div v-for="(item, index) in data" :key="index">
      <p>{{ item }}</p>
    </div>
  </div>
</template>
