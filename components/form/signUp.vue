<script setup lang="ts">
import { object, string, type InferType } from "yup";
import type { FormSubmitEvent, FormError } from "#ui/types";

const { signUp, errorBag } = useAuth();

const state = reactive({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

const schema = object({
  email: string().email("Invalid email").required("Required"),
  username: string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
  password: string()
    .min(6, "Must be at least 6 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .required("Required"),
  confirmPassword: string()
    .min(6, "Must be at least 6 characters")
    .matches(/[a-z]/, "Must contain at least one lowercase letter")
    .required("Required"),
});

async function onSubmit(event: FormSubmitEvent<any>) {
  const result = await signUp(event.data);
  console.log("🚀 ~ onSubmit ~ result:", result);
}
</script>

<template>
  <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
    <UFormGroup label="Email" name="email" :error="errorBag.email">
      <UInput v-model="state.email" />
    </UFormGroup>

    <UFormGroup label="Username" name="username">
      <UInput v-model="state.username" />
    </UFormGroup>

    <UFormGroup label="Password" name="password" :error="errorBag.password">
      <UInput v-model="state.password" type="password" />
    </UFormGroup>

    <UFormGroup label="Confirm Password" name="confirmPassword">
      <UInput v-model="state.confirmPassword" type="password" />
    </UFormGroup>

    <button
      type="submit"
      class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      Sign Up
    </button>
  </UForm>
</template>
