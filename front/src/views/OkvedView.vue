<template>
    <v-card max-width="800" class="elevation-0 mt-5 ml-auto mr-auto">
      <v-card-title align="center">
        ОКВЭД
      </v-card-title>
    </v-card>
    <v-card class="elevation-5 mt-5 ml-auto mr-auto" max-width="800">
      <v-toolbar flat>
        <v-btn icon="mdi-keyboard-backspace" color="primary" to="/"></v-btn>
        
        <v-spacer></v-spacer>
        <v-btn icon="mdi-plus" color="primary" @click="openCreateDialog">
        </v-btn>
      </v-toolbar>

      <v-container v-if="okvedList() && okvedList().length">
        <v-row
          v-for="item in okvedList()"
          :key="item.okved_id"
          >
          <v-col>
            <v-card class="ma-2">
              <v-card-title class="text-h6">
                {{ item.code }} - {{ item.okved_name }}
              </v-card-title>

              <v-card-actions class="justify-end">
                <v-btn
                  icon="mdi-pencil"
                  color="blue-darken-1"
                  variant="text"
                  @click="openEditDialog(item)"
                ></v-btn>
                <v-btn
                  icon="mdi-delete"
                  color="red-darken-1"
                  variant="text"
                  @click="confirmDelete(item)"
                ></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-alert v-else type="info" class="ma-4">
        Нет данных
      </v-alert>
    </v-card>
  
    <!-- Диалог создания/редактирования -->
    <v-dialog v-model="editDialog" max-width="450px">
      <v-card>
        <v-card-title class="text-h5">
          {{ editingOkved ? "Редактировать" : "Создать" }}
        </v-card-title>
        <v-card-text>
          <v-form ref="okvedForm" v-model="valid" @submit.prevent="saveOkved">
            <v-text-field
              v-model="okvedForm.code"
              label="Код"
              clearable
              :rules="[rules.required]"
            ></v-text-field>
            <v-text-field
              v-model="okvedForm.okved_name"
              label="Наименование"
              clearable
              :rules="[rules.required]"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeEditDialog()">Отмена</v-btn>
          <v-btn color="primary" :disabled="!valid" @click="saveOkved()">
            Сохранить
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  
    <!-- Диалог подтверждения удаления -->
    <v-dialog v-model="confirmDeleteDialog" max-width="400px">
      <v-card>
        <v-card-title class="text-h5">Подтвердите удаление</v-card-title>
        <v-card-text>
          Вы уверены, что хотите удалить "{{ okvedToDelete?.code }} - {{ okvedToDelete?.okved_name }}"?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="closeConfirmDialog()">Отмена</v-btn>
          <v-btn color="red" @click="deleteConfirmed()">Удалить</v-btn>
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
        okvedToDelete: null,
        editingOkved: null,
        okvedForm: {
          code: "",
          okved_name: "",
        },
        valid: false,
        rules: {
          required: (value) => !!value || "Это поле обязательно",
        },
      };
    },
    methods: {
        ...mapActions({
            getOkved: "okved/getOkved",
            createOkved: "okved/createOkved",
            updateOkved: "okved/updateOkved",
            deleteOkved: "okved/deleteOkved",
        }),
    
        okvedList() {
            return this.$store.state.okved.data;
        },
        
        openCreateDialog() {
            this.editingOkved = null;
            this.okvedForm = { code: "", okved_name: "" };
            this.editDialog = true;
        },
        openEditDialog(item) {
            this.editingOkved = item;
            this.okvedForm = { 
              code: item.code, 
              okved_name: item.okved_name 
            };
            this.editDialog = true;
        },
        closeEditDialog() {
            this.editDialog = false;
            this.okvedForm = { code: "", okved_name: "" };
        },
        async saveOkved() {
            const okvedData = { ...this.okvedForm };
            if (this.editingOkved) {
                okvedData.okved_id = this.editingOkved.okved_id;
                await this.updateOkved(okvedData);
                await this.getOkved();
            } else {
                await this.createOkved(okvedData);
                await this.getOkved();
            }
            this.closeEditDialog();
        },
        confirmDelete(item) {
            this.okvedToDelete = item;
            this.confirmDeleteDialog = true;
        },
        closeConfirmDialog() {
            this.confirmDeleteDialog = false;
            this.okvedToDelete = null;
        },
        async deleteConfirmed() {
            if (this.okvedToDelete) {
            await this.deleteOkved(this.okvedToDelete.okved_id);
            await this.getOkved();
            this.closeConfirmDialog();
            }
        },
    },
    async created() {
        await this.getOkved();
    },
  };
  </script>