<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent, FormError } from "#ui/types";
const router = useRouter();

const { login, signUp, errorBag } = useAuth();

const state = reactive({
  email: "",
  password: "",
});

const schema = object({
  email: string().email("Invalid email").required("Required"),
  password: string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

async function onSubmit(event: FormSubmitEvent<any>) {
  await login(event.data);
  console.log(errorBag.value);
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

    <div>
      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Sign in
      </button>
    </div>
  </UForm>
</template>
