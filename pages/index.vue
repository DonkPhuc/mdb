<script lang="ts" setup>
const toast = useToast()
const { data, pending, execute } = await useFetch('/api/dashboard', {
  method: 'post',
  body: {
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJpYXQiOjE3MTE5NDY5OTcsImV4cCI6MTcxMjU1MTc5N30.wCfjh9MauyAFFKlOKN4SaSh3peNuQPJ4FNRXKE0N-5I',
  },
})

watchEffect(() => {
  console.log(data.value)
})

const handleCheckIn = async () => {
  await execute()
  toast.add({
    title:
      data.value?.code === 200
        ? 'Successfully'
        : 'Failed, plese check the token',
  })
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <div>
      <UButton color="gray" :loading="pending" @click="handleCheckIn"
        >CheckIn</UButton
      >
    </div>
    <p v-if="data">{{ data }}</p>
  </div>
</template>
