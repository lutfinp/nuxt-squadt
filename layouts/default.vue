<template>
  <div class="w-screen h-screen flex flex-row overflow-hidden">
    <OrganismSidebar  />
    <div class="w-full flex flex-col">
      <OrganismHeader page="Post" profile-name="ICM Editor" profile-role="Editor" />
      <div class="overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
