<template>
  <v-card max-width="800" class="elevation-0 mt-5 ml-auto mr-auto">
    <v-card-title class="text-wrap" align="center">
      Дашборды (МинСтат)
    </v-card-title>
  </v-card>

  <!-- Graph for each OKVED section -->
  <v-card 
    v-if="employmentMinstat()"
    v-for="(employments, section) in groupedEmployment"
    :key="section"
    class="mt-8 mx-auto overflow-visible"
    max-width="800"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      color="cyan"
      elevation="12"
      max-width="calc(100% - 32px)"
      rounded="lg"
    >
      <!-- Display a sparkline graph using data from each section -->
      <v-sparkline
        :labels="getLabels(employments)"
        :model-value="getGraphData(employments)"
        color="white"
        line-width="2"
        padding="16"
        class="mb-4"
        smooth
      ></v-sparkline>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="text-h6 font-weight-light mb-2">
        {{ section }}
      </div>
      <div class="subheading font-weight-light text-grey">
        График количества работников по годам
      </div>
    </v-card-text>
    
  </v-card>

  
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      headers: [
        { title: "Год", key: "year" },
        { title: "Численность сотрудников", key: "number_of_employees" },
        { title: "Средняя зарплата", key: "salary" },
        { title: "", key: "edit", sortable: false },
        { title: "", key: "delete", sortable: false },
      ],
      confirmDeleteDialog: false,
      editDialog: false,
      employmentToDelete: null,
      editingEmployment: null,
      employmentForm: {
        year: "",
        number_of_employees: "",
        okved_section_id: "",
        salary: "",
      },
      valid: false,
      rules: {
        required: (value) => !!value || "Это поле обязательно",
      },
    };
  },
  computed: {
    groupBy() {
      return [{ key: "okved_section.name", order: "asc" }];
    },
    // Group employment data by OKVED section name
    groupedEmployment() {
      return this.employmentMinstat().reduce((groups, employment) => {
        const sectionName = employment.okved_section?.name || "Неизвестно";
        if (!groups[sectionName]) {
          groups[sectionName] = [];
        }
        groups[sectionName].push(employment);
        return groups;
      }, {});
    },
  },
  methods: {
    // Get list of OKVED sections from the store
    okvedSections() {
      return this.$store.state.okved.data;
    },
    ...mapActions({
      getOkvedSections: "okved/getOkvedSections",
    }),
    // Get employment data from the store
    employmentMinstat() {
      return this.$store.state.employment_minstat.data;
    },
    ...mapActions({
      getEmploymentMinstat: "employment_minstat/getEmploymentMinstat",
      createEmploymentMinstat: "employment_minstat/createEmploymentMinstat",
      updateEmploymentMinstat: "employment_minstat/updateEmploymentMinstat",
      deleteEmploymentMinstat: "employment_minstat/deleteEmploymentMinstat",
    }),
    // Helper: Extract labels (e.g., years) for the graph
    getLabels(employments) {
      return employments.map(e => e.year);
    },
    // Helper: Extract graph data (e.g., average salary) for the graph
    getGraphData(employments) {
      return employments.map(e => e.number_of_employees);
    },
    openCreateDialog() {
      this.editingEmployment = null;
      this.employmentForm = {
        year: "",
        number_of_employees: "",
        okved_section_id: "",
        salary: "",
      };
      this.editDialog = true;
    },
    openEditDialog(employment) {
      this.editingEmployment = employment;
      this.employmentForm = { ...employment };
      this.editDialog = true;
    },
    closeEditDialog() {
      this.editDialog = false;
      this.employmentForm = {
        year: "",
        number_of_employees: "",
        okved_section_id: "",
        salary: "",
      };
    },
    async saveEmployment() {
      const formData = { ...this.employmentForm };
      if (this.editingEmployment) {
        formData.id = this.editingEmployment.id;
        await this.updateEmploymentMinstat(formData);
      } else {
        await this.createEmploymentMinstat(formData);
      }
      await this.getEmploymentMinstat();
      this.closeEditDialog();
    },
    confirmDelete(employment) {
      this.employmentToDelete = employment;
      this.confirmDeleteDialog = true;
    },
    closeConfirmDialog() {
      this.confirmDeleteDialog = false;
      this.employmentToDelete = null;
    },
    async deleteConfirmed() {
      if (this.employmentToDelete) {
        await this.deleteEmploymentMinstat(this.employmentToDelete.id);
        await this.getEmploymentMinstat();
        this.closeConfirmDialog();
      }
    },
  },
  async created() {
    await this.getEmploymentMinstat();
    await this.getOkvedSections();
  },
};
</script>
