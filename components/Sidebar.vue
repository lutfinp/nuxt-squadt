<script setup>
import {
  PhNewspaper,
  PhHouse,
  PhTag,
  PhBookBookmark,
  PhImage,
  PhMonitorPlay,
  PhUsers,
  PhBroadcast,
  PhMagnifyingGlass,
} from "@phosphor-icons/vue";

const { data } = await useFetch(
  "https://cdn-content.kompas.id/icm/sidebar/icm-sidebar.json"
);

const choose = ref("post");

const handleClick = (id) => {
  choose.value = id;
};

const symbol = [
  {
    id: "post",
    icon: '<PhNewspaper :size="32" />',
  },
  {
    id: "frontpage",
    icon: '<PhHouse :size="32" weight="bold" />',
  },
  {
    id: "tags",
    icon: '<PhTag :size="32" weight="fill" />',
  },
  {
    id: "wires",
    icon: '<PhBroadcast :size="32" weight="fill"',
  },
  {
    id: "user-management",
    icon: '<PhUsers :size="32" weight="bold" />',
  },
  {
    id: "repola-kompas-id",
    icon: '<PhMonitorPlay :size="32" weight="bold" />',
  },
  {
    id: "dam-kompas-id",
    icon: '<PhImage :size="32" weight="fill" />',
  },
  {
    id: "selaras-kompas-id",
    icon: '<PhBookBookmark :size="32" weight="fill" />',
  },
  {
    id: "ai-search-kompas-id",
    icon: '<PhMagnifyingGlass :size="32" weight="fill" />',
  },
];
</script>

<template>
  <div class="w-72 h-screen flex flex-col border border-r-gray-200">
    <img
      src="/img/logo.png"
      alt="logo-kompas"
      class="w-[32px] h-[32px] mx-10 my-8"
    />
    <div class="flex flex-col gap-5">
      <div v-for="value in data" :key="value.id">
        <NuxtLink @click="handleClick(value.id)" to="#">
          <div
            v-if="value.id == choose"
            class="flex flex-row items-center gap-7"
          >
            <div class="h-5 w-1 bg-blue-600 rounded-e-sm"></div>
            <div class="bg-blue-200 text-blue-600 p-1 rounded-md w-full mr-7">
              <div class="flex flex-row items-center gap-2">
                <img
                  :src="`https://cdn-content.kompas.id/icm/${value.icon[1]}`"
                  alt=""
                  class="w-[20px] h-[20px]"
                />
                {{ value.label }}
              </div>
            </div>
          </div>

          <div class="text-gray-700 ml-9" v-else>
            <div class="flex flex-row items-center gap-2">
              <img
                :src="`https://cdn-content.kompas.id/icm/${value.icon[0]}`"
                alt=""
                class="w-[20px] h-[20px]"
              />
              {{ value.label }}
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
