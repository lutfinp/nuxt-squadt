<script setup>
const { data } = await useFetch(
  "https://cdn-content.kompas.id/icm/sidebar/icm-sidebar.json"
);

const pick = reactive({
  choosen: "post",
});

const handleClick = (id) => {
  pick.choosen = id;
};
</script>

<template>
  <div class="w-72 h-screen flex flex-col border border-r-gray-200">
    <div class="p-8">ICM</div>
    <FontAwesomeIcon :icon="faHouse" />
    <div class="flex flex-col gap-5">
      <div v-for="value in data" :key="value.id">
        <NuxtLink @click="handleClick(value.id)" to="#">
          <div
            v-if="value.id == pick.choosen"
            class="flex flex-row items-center gap-7"
          >
            <div class="h-5 w-1 bg-blue-600 rounded-e-sm"></div>
            <div class="bg-blue-200 text-blue-600 p-1 rounded-md w-full mr-7">{{ value.label }}</div>
            
          </div>
          <div class="text-gray-700 ml-9" v-else>{{ value.label }}</div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
