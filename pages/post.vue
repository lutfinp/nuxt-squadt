<script>
definePageMeta({
  layout: "texteditor",
});
</script>

<template>
  <div class="mt-24 flex justify-center items-center">
    <div class="w-[600px] flex flex-col">
      <div class="container max-w-4xl border-b py-4">
        <ClientOnly>
          <AtomTiptapEditor placeholder="Tulis Judul Artikel" varian="title" />
        </ClientOnly>
      </div>
      <div class="container max-w-4xl py-8 border-b">
        <ClientOnly>
          <AtomTiptapEditor
            placeholder="Tulis excerpt artikel"
            varian="excerpt"
          />
        </ClientOnly>
      </div>
      <div class="container max-w-4xl py-8">
        <ClientOnly>
          <AtomTiptapEditor placeholder="Tulis sesuatu" varian="normal" />
        </ClientOnly>
      </div>
    </div>
  </div>
</template>
