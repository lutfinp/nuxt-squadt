<script setup>
const props = defineProps(["page", "profileName", "profileRole"]);
</script>

<template>
  <div class="w-full sticky top-0 bg-white font-serif">
    <div
      class="flex flex-row justify-between h-16 items-center px-4 py-8 border-b"
    >
      <div class="text-2xl font-serif font-extrabold">{{ props.page }}</div>
      <div class="flex flex-row gap-3 items-center">
        <Icon name="material-symbols:account-circle" class="w-[28px] h-[28px]" />
        <div class="text-xs font-bold">{{ props.profileName }}</div>
        <div
          class="bg-green-lime p-2 flex items-center justify-center rounded-md text-xs text-green-700 font-bold"
        >
          {{ profileRole }}
        </div>
        <Icon name="material-symbols:keyboard-arrow-down-rounded" class="w-[18px] h-[18px] text-gray-500" />
      </div>
    </div>
  </div>
</template>
