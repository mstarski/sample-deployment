<script>
import TheTableRow from "./TheTableRow.vue";
import TheTableColumn from "./TheTableColumn.vue";

export default {
  name: "TheTable.vue",
  components: { TheTableColumn, TheTableRow },
  props: ["data"],

  data: () => ({
    columns: [
      "#",
      "Player IP",
      "Category",
      "Question",
      "Difficulty",
      "User's Answer",
      "Is Correct",
      "Validated",
    ],
  }),
};
</script>

<template>
  <div class="mt-4 -mb-3">
    <div
      class="not-prose relative bg-slate-50 rounded-xl overflow-hidden dark:bg-slate-800/25"
    >
      <div
        class="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,#fff,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"
        style="background-position: 10px 10px"
      ></div>
      <div class="relative rounded-xl overflow-auto">
        <div class="shadow-sm overflow-hidden my-8">
          <table class="border-collapse table-auto w-full text-sm">
            <thead>
              <tr>
                <TheTableColumn
                  v-for="column in columns"
                  :value="column"
                ></TheTableColumn>
              </tr>
            </thead>
            <tbody class="bg-white dark:bg-slate-800">
              <tr v-for="log in data">
                <TheTableRow :value="log.id"></TheTableRow>
                <TheTableRow :value="log.player_ip"></TheTableRow>
                <TheTableRow :value="log.category"></TheTableRow>
                <TheTableRow :value="log.question"></TheTableRow>
                <TheTableRow :value="log.difficulty"></TheTableRow>
                <TheTableRow :value="log.answer"></TheTableRow>
                <TheTableRow value="✅"></TheTableRow>
                <TheTableRow value="✅"></TheTableRow>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div
        class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"
      ></div>
    </div>
  </div>
</template>
