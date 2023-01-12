<script>
export default {
  name: "TheTableRow",
  props: ["value"],
};
</script>

<template>
  <td
    class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400"
  >
    {{ value }}
  </td>
</template>

<style scoped></style>
