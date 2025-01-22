<template>
  <div class="w-screen h-screen flex flex-row overflow-hidden">
    <Sidebar />
    <div class="w-full flex flex-col">
      <Header page="Post" profile-name="ICM Editor" profile-role="Editor" />
      <div class="overflow-auto">
        <slot />
      </div>
    </div>
  </div>
</template>
