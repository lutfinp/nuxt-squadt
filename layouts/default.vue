<template>
  <div class="w-full flex flex-row">
    <Sidebar />
    <div class="w-full flex flex-col">
      <Header page="Post" profile-name="ICM Editor" profile-role="Editor" />
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>
