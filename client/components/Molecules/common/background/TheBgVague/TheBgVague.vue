<template>
  <div class="bg-vague">
    <!-- Gradient Shape Container 1 -->
    <div
      class="bg-vague__gradient-container bg-vague__gradient-container--first"
      aria-hidden="true"
    >
      <div
        class="bg-vague__gradient bg-vague__gradient--first"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
    <!-- Gradient Shape Container 2 -->
    <div
      class="bg-vague__gradient-container bg-vague__gradient-container--second"
      aria-hidden="true"
    >
      <div
        class="bg-vague__gradient bg-vague__gradient--second"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
      />
    </div>
  </div>
</template>

<style lang="scss">
/* Assuming additional customizations might be needed */
.bg-vague__gradient-container {
  @apply absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden opacity-30 blur-3xl;
  -translate-y: 1/2;
}

.bg-vague__gradient-container--first {
  @apply -translate-y-1/2;
}

.bg-vague__gradient-container--second {
  @apply top-0 pt-32 opacity-25 sm:pt-40 xl:justify-end;
}

.bg-vague__gradient {
  @apply w-full aspect-[1313/771] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc];
}

.bg-vague__gradient--first {
  @apply ml-[max(50%,38rem)];
}

.bg-vague__gradient--second {
  @apply ml-[-22rem] flex-none origin-top-right rotate-[30deg] xl:ml-0 xl:mr-[calc(50%-12rem)];
}

</style>
