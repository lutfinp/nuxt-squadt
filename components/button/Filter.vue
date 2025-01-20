<script setup>
const props = defineProps(["desk", "isActive"]);
</script>

<template>
  <div>
    <button
      class="border-2 px-4 font-sans py-2 text-xs font-bold rounded-full min-w-12"
      :class="[
        isActive
          ? 'bg-blue-100 border-blue-400 text-blue-800'
          : 'bg-gray-50 border-gray-200',
      ]"
    >
      {{ props.desk }}
    </button>
  </div>
</template>
