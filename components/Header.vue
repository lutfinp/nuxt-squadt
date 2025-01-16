<script setup>
import { PhUserCircle, PhCaretDown } from "@phosphor-icons/vue";

const props = defineProps(["page", "profileName", "profileRole"]);
</script>

<template>
  <div class="font-lora w-screen">
    <div
      class="flex flex-row justify-between h-16 items-center px-4 py-8 border border-b-gray-200"
    >
      <div class="text-2xl font-bold">{{ props.page }}</div>
      <div class="flex flex-row gap-3 items-center">
        <PhUserCircle :size="30" weight="fill" />
        <div class="text-sm font-bold">{{ props.profileName }}</div>
        <div
          class="bg-green-200 p-2 flex items-center justify-center rounded-md text-xs text-green-600 font-bold"
        >
          {{ profileRole }}
        </div>
        <PhCaretDown :size="10" weight="bold" class="cursor-pointer"/>
      </div>
    </div>
  </div>
</template>
