<script setup>
const props = defineProps(["page", "profileName", "profileRole"]);

const activeBurgerMenu = ref(false);

const burgerMenuSidebar = () => {
  activeBurgerMenu.value = !activeBurgerMenu.value;
};

const sidebarRef = ref(null);

onClickOutside(sidebarRef, () => (activeBurgerMenu.value = false));
</script>

<template>
  <div class="w-full top-0 bg-white font-serif">
    <div
      class="flex flex-row justify-between h-16 items-center px-4 py-8 border-b"
    >
      <div class="flex flex-row gap-2 items-center">
        <button @click="burgerMenuSidebar" class="lg:hidden">
          <Icon name="fa6-solid:bars" class="w-[15px] h-[15px] text-blue-800" />
        </button>
        <div class="text-2xl font-serif font-extrabold">{{ props.page }}</div>
      </div>
      <div class="flex flex-row gap-3 items-center max-sm:gap-2">
        <Icon
          name="material-symbols:account-circle"
          class="w-[28px] h-[28px]"
        />
        <div class="text-xs font-bold font-sans">{{ props.profileName }}</div>
        <div
          class="bg-green-lime p-2 flex items-center justify-center rounded-md text-xs text-green-700 font-bold font-sans"
        >
          {{ profileRole }}
        </div>
        <Icon
          name="material-symbols:keyboard-arrow-down-rounded"
          class="w-[18px] h-[18px] text-gray-500"
        />
      </div>
    </div>
    <div v-if="activeBurgerMenu" class="w-screen h-screen fixed inset-0" >
      <div class="w-full h-full absolute inset-0 z-0 bg-black/60"></div>
      <OrganismSidebarMobile ref="sidebarRef" class="absolute z-10" />
    </div>
  </div>
</template>
