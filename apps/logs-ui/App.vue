<script>
import TheTable from "./components/TheTable.vue";

export default {
  components: {
    TheTable,
  },
};
</script>

<script setup>
const config = useRuntimeConfig();
const { data: logs } = await useAsyncData("logs", () =>
  $fetch(`${config.logsApiUrl}/logs`)
);
</script>

<template>
  <main class="bg-slate-900">
    <section class="container">
      <h1 class="my-8 text-2xl font-bold text-slate-50">Latest answers 📦:</h1>
      <TheTable :data="logs"></TheTable>
    </section>

    <footer>
      <p class="text-slate-500"><span>Mode:</span>&nbsp;{{ config.appMode }}</p>
    </footer>
  </main>
</template>

<style scoped>
main {
  display: flex;
  min-height: 100vh;
}

.container {
  max-width: 1140px;
  height: 100%;
  margin: 0 auto;
}

footer {
  margin-top: auto;
}
</style>
