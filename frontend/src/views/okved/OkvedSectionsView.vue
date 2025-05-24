<template>
  
  <v-container>

    
    <v-container v-if="okvedSections() && okvedSections().length" max-width="1200">
      <v-row 
        
      >
        <v-col v-for="item in okvedSections()"
        :key="item.id">
          <v-card class="ma-2" max-width="400" min-width="300">
            <!-- Event Image with Title Overlay -->
            <!-- <v-img :src="item.img_url" min-height="150px"  class="white--text align-end">
              
            </v-img> -->

            <v-sparkline
              :labels="getLabels(item.employment_minstat)"
              :model-value="getGraphData(item.employment_minstat)"
              color="primary"
              height="200"
              line-width="2"
              padding="16"
              class="mb-4"
              smooth
            ></v-sparkline>
            <v-card-title class="text-wrap">{{ item.okved_section_name }}</v-card-title>
            <v-card-subtitle class="text-wrap">{{ item.okved_section_code }}</v-card-subtitle>
            <v-card-text>
              <v-btn class="mb-2" block color="primary">Прогноз</v-btn>
              <v-btn class="mb-2" variant="tonal" block color="primary">Профессии</v-btn>
            </v-card-text>

            <!-- Action Buttons -->
            <!-- <v-card-actions class="justify-end">
              
              <v-btn icon="mdi-pencil" color="blue-darken-1" variant="text" @click="openEditDialog(item)"></v-btn>
              <v-btn icon="mdi-delete" color="red-darken-1" variant="text" @click="confirmDelete(item)"></v-btn>
            </v-card-actions> -->
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- No Data Alert -->
    <v-alert v-else type="info" class="ma-4">
      Нет данных
    </v-alert>

    <!-- Create Button -->
    <!-- <v-btn
      fab
      icon="mdi-plus"
      color="primary"
      position="fixed"
      location="bottom right"
      size="large"
      elevation="8"
      class="ma-4"
      @click="openCreateDialog"
    /> -->

  </v-container>
  

  <v-dialog v-model="editDialog" max-width="450px">
    <v-card>
      <v-card-title class="text-h5">
        {{ editingSection ? "Редактировать" : "Создать" }}
      </v-card-title>
      <v-card-text>
        <v-form ref="sectionForm" v-model="valid" @submit.prevent="saveSection">
          <v-text-field v-model="sectionForm.okved_section_code" label="Код" clearable :rules="[rules.required]"></v-text-field>
          <v-text-field v-model="sectionForm.okved_section_name" label="Наименование" clearable :rules="[rules.required]"></v-text-field>
          <v-text-field v-model="sectionForm.img_url" label="Картинка" clearable></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeEditDialog">Отмена</v-btn>
        <v-btn color="primary" :disabled="!valid" @click="saveSection">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <v-dialog v-model="confirmDeleteDialog" max-width="400px">
    <v-card>
      <v-card-title class="text-h5">Подтвердите удаление</v-card-title>
      <v-card-text>Вы уверены, что хотите удалить "{{ sectionToDelete?.okved_section_name }}"?</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeConfirmDialog">Отмена</v-btn>
        <v-btn color="red" @click="deleteConfirmed">Удалить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  
  

</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      confirmDeleteDialog: false,
      editDialog: false,
      sectionToDelete: null,
      editingSection: null,
      sectionForm: { okved_section_code: "", okved_section_name: "", img_url: "" },
      valid: false,
      rules: {
        required: (value) => !!value || "Это поле обязательно",
      },
    };
  },
  computed: {
    
  },
  methods: {
    okvedSections() {
      return this.$store.state.okved.data || [];
    },
    ...mapActions({
      getOkvedSections: "okved/getOkvedSections",
      createOkvedSection: "okved/createOkvedSection",
      updateOkvedSection: "okved/updateOkvedSection",
      deleteOkvedSection: "okved/deleteOkvedSection",
    }),

    getLabels(employments) {
      return employments.map(e => e.year.toString());
    },
    // Helper: Extract graph data (e.g., average salary) for the graph
    getGraphData(employments) {
      return employments.map(e => e.number_of_employees);
    },

    goToPage(section) {
      this.$router.push({ name: "okved-classes", params: { id: section.id } });
    },

    openCreateDialog() {
      this.editingSection = null;
      this.sectionForm = { okved_section_code: "", okved_section_name: "", img_url: "" };
      this.editDialog = true;
    },
    openEditDialog(section) {
      this.editingSection = section;
      this.sectionForm = section;
      this.editDialog = true;
    },
    closeEditDialog() {
      this.editDialog = false;
      this.sectionForm = { okved_section_code: "", okved_section_name: "", img_url: "" };
    },
    async saveSection() {
      const sectionData = { ...this.sectionForm };
      if (this.editingSection) {
        sectionData.section_id = this.editingSection.section_id;
        await this.updateOkvedSection(sectionData);
      } else {
        await this.createOkvedSection(sectionData);
      }
      await this.getOkvedSections();
      this.closeEditDialog();
    },
    confirmDelete(section) {
      this.sectionToDelete = section;
      this.confirmDeleteDialog = true;
    },
    closeConfirmDialog() {
      this.confirmDeleteDialog = false;
      this.sectionToDelete = null;
    },
    async deleteConfirmed() {
      if (this.sectionToDelete) {
        await this.deleteOkvedSection(this.sectionToDelete.id);
        await this.getOkvedSections();
        this.closeConfirmDialog();
      }
    },
  },
  async created() {
    await this.getOkvedSections();
  },
};
</script>
