<script setup>
const { data } = await useFetch(
  "https://cdn-content.kompas.id/icm/sidebar/icm-sidebar.json"
);

const choose = ref("post");

const handleClick = (id) => {
  choose.value = id;
};
</script>

<template>
  <div class="w-72 h-screen flex flex-col border border-r-gray-200">
    <img
      src="/img/logo.png"
      alt="logo-kompas"
      class="w-[32px] h-[32px] mx-10 my-8"
    />
    <div class="flex flex-col gap-5">
      <div v-for="menuSidebar in data" :key="menuSidebar.id">
        <NuxtLink @click="handleClick(menuSidebar.id)" to="#">
          <div
            :class="[
              menuSidebar.id == choose
                ? 'flex flex-row items-center gap-7'
                : 'text-gray-700',
            ]"
          >
            <div
              :class="[
                menuSidebar.id == choose ? 'h-5 w-1 bg-blue-600 rounded-e-sm' : '',
              ]"
            ></div>
            <div
              :class="[
                menuSidebar.id == choose
                  ? 'bg-blue-200 text-blue-600 p-1 rounded-md w-full mr-7'
                  : 'text-gray-700 ml-9',
              ]"
            >
              <div class="flex flex-row items-center gap-2">
                <img
                  :src="[
                    menuSidebar.id == choose
                      ? `https://cdn-content.kompas.id/icm/${menuSidebar.icon[1]}`
                      : `https://cdn-content.kompas.id/icm/${menuSidebar.icon[0]}`,
                  ]"
                  alt="icon"
                  class="w-[20px] h-[20px]"
                />
                {{ menuSidebar.label }}
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
