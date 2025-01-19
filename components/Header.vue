<script setup>
const props = defineProps(["page", "profileName", "profileRole"]);
</script>

<template>
  <div class="font-lora w-full">
    <div
      class="flex flex-row justify-between h-16 items-center px-4 py-8 border border-b-gray-200"
    >
      <div class="text-2xl font-bold">{{ props.page }}</div>
      <div class="flex flex-row gap-3 items-center">
        <Icon name="material-symbols:account-circle" class="w-[28px] h-[28px]" />
        <div class="text-sm font-bold">{{ props.profileName }}</div>
        <div
          class="bg-green-200 p-2 flex items-center justify-center rounded-md text-xs text-green-600 font-bold"
        >
          {{ profileRole }}
        </div>
        <Icon name="material-symbols:keyboard-arrow-down-rounded" class="w-[18px] h-[18px] text-gray-500" />
      </div>
    </div>
  </div>
</template>
