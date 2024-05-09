<template>
  <app-layout>
    <data-table></data-table>
  </app-layout>
</template>

<script>
import AppLayout from "@/components/Layouts/AppLayout.vue";
import DataTable from "@/components/OperationsDataTable.vue";

export default {
  name: "HomeView",
  components: {
    DataTable,
    AppLayout,
  },
};
</script>
