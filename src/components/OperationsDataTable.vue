<template>
  <!-- DataTales Example -->
  <div class="card shadow mb-4">
    <div class="card-header py-3">
      <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <!--          ajax="/data.json"-->
        <DataTable
          :columns="columns"
          :data="operations"
          class="display table table-bordered"
          width="100%"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { DataTable } from "datatables.net-vue3";

import DataTablesCore from "datatables.net-bs5";
import DataTablesLib from "datatables.net";
DataTable.use(DataTablesLib);
DataTable.use(DataTablesCore);

export default {
  name: "OperationsDataTable",
  components: {
    DataTable,
  },
  data() {
    return {
      columns: [
        { title: "name", data: "name" },
        { title: "position", data: "position" },
        { title: "office", data: "office" },
        { title: "extn", data: "extn" },
        { title: "start_date", data: "start_date" },
        { title: "salary", data: "salary" },
      ],
      operations: [
        {
          name: "Stade Brestois 29",
          position: 22,
          office: 4,
          extn: 8,
          start_date: 10,
          salary: -11,
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss"></style>
