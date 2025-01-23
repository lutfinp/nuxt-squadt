<script setup>
const props = defineProps(["desk", "isActive", "rounded", "solid"]);
</script>

<template>
  <div>
    <button
      v-if="rounded"
      class="border-2 px-4 font-sans py-2 text-xs font-bold rounded-full min-w-12 max-sm:min-w-16"
      :class="[
        isActive
          ? 'bg-blue-100 border-blue-400 text-blue-800'
          : 'bg-gray-50 border-gray-200',
      ]"
    >
      {{ props.desk }}
    </button>
    <div v-else-if="solid">
      <button
        class="bg-blue-800 text-white py-2 pr-2 pl-6 rounded-md text-sm font-sans font-bold max-sm:w-full max-sm:p-2"
      >
        {{ props.desk }}
      </button>
    </div>
  </div>
</template>
