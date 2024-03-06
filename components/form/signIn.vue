<script setup lang="ts">
import { object, string } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

const { login, errorBag } = useAuth()

const state = reactive({
  email: '',
  password: '',
})

const schema = object({
  email: string().email('Invalid email').required('Required'),
  password: string()
    .min(6, 'Must be at least 6 characters')
    .required('Required'),
})

async function onSubmit(event: FormSubmitEvent<any>) {
  await login(event.data)
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email" :error="errorBag.email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" :error="errorBag.password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <div class="flex items-center justify-between">
      <UCheckbox label="Remember me" />

      <div class="text-sm leading-6">
        <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500"
          >Forgot password?</a
        >
      </div>
    </div>
    <button
      type="submit"
      class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Sign in
    </button>
  </UForm>
</template>
