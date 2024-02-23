<script setup lang="ts">
const monthlyIncome = [
  { month: "January", income: 10000000, expenses: 5000000 },
  { month: "February", income: 12000000, expenses: 2000000 },
];

const isCreateNewModalOpen = ref(false);
</script>

<template>
  <div class="relative">
    <div class="absolute hidden lg:block lg:right-4 lg:top-4">
      <UButton @click="isCreateNewModalOpen = true">
        Create New
      </UButton>
    </div>
    <UDashboardCard
      title="Monthly expenditure statistics"
      description="Monthly expenditure statistics provide a comprehensive overview of spending habits"
      icon="i-heroicons-chart-bar-20-solid"
    >
      <NuxtLink
        v-for="(item, index) in monthlyIncome"
        :key="index"
        class="px-3 py-2 -mx-2 last:-mb-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800/50 cursor-pointer flex items-center gap-3 relative"
      >
        <div class="text-sm flex-1">
          <div>
            <p class="text-gray-900 dark:text-white font-medium">
              {{ item.month }}
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Income: {{ formatNumber(item.income) }}
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Expenses: {{ formatNumber(item.expenses) }}
            </p>
          </div>
        </div>

        <p class="text-gray-900 dark:text-white font-medium text-lg">
          {{ formatNumber(item.income - item.expenses) }}
        </p>
      </NuxtLink>
    </UDashboardCard>
  </div>

  <UModal v-model="isCreateNewModalOpen">
    <UCard
      :ui="{
        ring: '',
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
      }"
    >
      <template #header>
        <div class="flex items-center justify-between">
          <h3
            class="text-base font-semibold leading-6 text-gray-900 dark:text-white"
          >
            Create New
          </h3>
          <UButton
            color="gray"
            variant="ghost"
            icon="i-heroicons-x-mark-20-solid"
            class="-my-1"
            @click="isCreateNewModalOpen = false"
          />
        </div>
      </template>

      <FormCreateMonthIncome />
    </UCard>
  </UModal>
</template>
