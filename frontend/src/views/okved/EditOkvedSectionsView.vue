<template>
  <v-card max-width="800" class="elevation-0 mt-5 ml-auto mr-auto">
    <v-card-title class="text-wrap" align="center">
      Редактирование данных (ОКВЭД-секции)
    </v-card-title>
  </v-card>

  <v-card class="elevation-5 mt-5 ml-auto mr-auto" max-width="800">
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-btn icon="mdi-plus" color="primary" @click="openCreateDialog"></v-btn>
    </v-toolbar>

    <v-container v-if="okvedSections() && okvedSections().length">
      <v-data-table
        :headers="headers"
        :items="okvedSections()"
        :items-per-page="-1"
        hide-default-footer
      >
        <template v-slot:item.edit="{ item }">
          <v-btn size="small" color="primary" class="mr-2" @click="openEditDialog(item)">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
        </template>

        <template v-slot:item.delete="{ item }">
          <v-btn size="small" color="red" @click="confirmDelete(item)">
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-container>

    <v-alert v-else type="info" class="ma-4">
      Нет данных
    </v-alert>
  </v-card>

  <!-- Create / Edit Dialog -->
  <v-dialog v-model="editDialog" max-width="450px">
    <v-card>
      <v-card-title class="text-h5">
        {{ editingSection ? "Редактировать" : "Создать" }}
      </v-card-title>
      <v-card-text>
        <v-form ref="sectionForm" v-model="valid" @submit.prevent="saveSection">
          <v-text-field
            v-model="sectionForm.okved_section_code"
            label="Код ОКВЭД-секции"
            clearable
 
          ></v-text-field>
          <v-text-field
            v-model="sectionForm.okved_section_name"
            label="Наименование"
            clearable
            :rules="[rules.required]"
          ></v-text-field>
          <v-text-field
            v-model="sectionForm.img_url"
            label="URL изображения"
            clearable
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn text @click="closeEditDialog">Отмена</v-btn>
        <v-btn color="primary" :disabled="!valid" @click="saveSection">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>

  <!-- Delete Confirmation Dialog -->
  <v-dialog v-model="confirmDeleteDialog" max-width="400px">
    <v-card>
      <v-card-title class="text-h5">Подтвердите удаление</v-card-title>
      <v-card-text>
        Вы уверены, что хотите удалить "{{ sectionToDelete?.okved_section_name }}"?
      </v-card-text>
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
      headers: [
        { title: "Код", key: "okved_section_code" },
        { title: "Наименование", key: "okved_section_name" },
        { title: "Изображение", key: "img_url" },
        { title: "", key: "edit", sortable: false },
        { title: "", key: "delete", sortable: false },
      ],
      editDialog: false,
      confirmDeleteDialog: false,
      sectionToDelete: null,
      editingSection: null,
      sectionForm: { okved_section_code: "", okved_section_name: "", img_url: "" },
      valid: false,
      rules: {
        required: (v) => !!v || "Это поле обязательно",
      },
    };
  },
  methods: {
    okvedSections() {
      return this.$store.state.okved.data || [];
    },
    ...mapActions("okved", [
      "getOkvedSections",
      "createOkvedSection",
      "updateOkvedSection",
      "deleteOkvedSection",
    ]),

    openCreateDialog() {
      this.editingSection = null;
      this.sectionForm = { okved_section_code: "", okved_section_name: "", img_url: "" };
      this.editDialog = true;
    },
    openEditDialog(section) {
      this.editingSection = section;
      this.sectionForm = { ...section };
      this.editDialog = true;
    },
    closeEditDialog() {
      this.editDialog = false;
      this.sectionForm = { okved_section_code: "", okved_section_name: "", img_url: "" };
    },
    async saveSection() {
      const payload = { ...this.sectionForm };
      if (this.editingSection) {
        payload.id = this.editingSection.id;
        await this.updateOkvedSection(payload);
      } else {
        await this.createOkvedSection(payload);
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
      if (!this.sectionToDelete) return;
      await this.deleteOkvedSection(this.sectionToDelete.id);
      await this.getOkvedSections();
      this.closeConfirmDialog();
    },
  },
  async created() {
    await this.getOkvedSections();
  },
};
</script>
