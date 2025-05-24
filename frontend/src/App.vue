<template>
  <v-app>

      <v-navigation-drawer v-if="!$vuetify.display.mobile" expand-on-hover rail>
        <!-- <v-list v-if="isAuth">
          <v-list-item
            prepend-icon="mdi-account"
            subtitle="Logged in as"
          >
          <v-list-item-title>
            {{ user() ? user().name : "неавторизован" }}
          </v-list-item-title>
            
        </v-list-item>
        </v-list>

        <v-divider></v-divider> -->

        <v-list density="compact" nav>
          <v-list-item 
            to="/"
            prepend-icon="mdi-home"
            title="Главная"
            value="home">
            
          </v-list-item>
          <v-list-item
            v-if="!isAuth"   
            to="/login"
            prepend-icon="mdi-login"
            title="Авторизация">

          </v-list-item>

          
          <v-list-item 
            v-if="isAuth" 
            to="/okved"
            prepend-icon="mdi-format-list-group"
            title="ОКВЭД"
            value="okved">
          </v-list-item>
          <!-- <v-list-item 
            v-if="isAuth"
            to="/employment_minstat"
            prepend-icon="mdi-chart-bar"
            title="Графики">
          </v-list-item> -->
          <v-list-item 
            v-if="isAuth" 
            to="/okved/edit"
            prepend-icon="mdi-file-edit"
            title="Редактирование (ОКВЭД)">
          </v-list-item>
          <v-list-item 
            v-if="isAuth" 
            to="/employment_minstat/edit"
            prepend-icon="mdi-file-edit"
            title="Редактирование (МинСтат)">
          </v-list-item>


          
          <v-list-item 
            v-if="isAuth" 
            @click="logout()"
            prepend-icon="mdi-logout"
            title="Выйти">
          </v-list-item>

        </v-list>
      </v-navigation-drawer>


    
    <v-app-bar v-if="$vuetify.display.mobile"  color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title @click="this.$router.push(`/`);">Статистика</v-toolbar-title>

      <v-spacer></v-spacer>

      
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      location="left"
      app
      temporary
      v-if="$vuetify.display.mobile"
    >
      <v-list>
        
          <v-list-item to="/">
            <v-list-item-title>Главная</v-list-item-title>
          </v-list-item>

          <v-list-item v-if="!isAuth" to="/login">
            <v-list-item-title>Авторизация</v-list-item-title>
          </v-list-item>
          
          <v-list-item v-if="isAuth" to="/okved">
            <v-list-item-title>ОКВЭД</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isAuth" to="/employment_minstat">
            <v-list-item-title class="text-wrap">Дашборды (МинСтат)</v-list-item-title>
          </v-list-item>
          <v-list-item v-if="isAuth" to="/edit_minstat_data">
            <v-list-item-title class="text-wrap">Редактирование данных (МинСтат)</v-list-item-title>
          </v-list-item>
         
          <v-list-item v-if="isAuth" @click="logout()">
            <v-list-item-title>Выйти</v-list-item-title>
          </v-list-item>
        
      </v-list>
    </v-navigation-drawer>
    <v-main height="100vh">
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <!-- <v-footer padless color="grey lighten-4">
      <v-col class="text-center py-4" cols="12">
        © {{ new Date().getFullYear() }} Perm HR Forecast 
      </v-col>
    </v-footer> -->
  </v-app>
  
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {
      drawer: false, // State for navigation drawer
    };
  },
  
  methods: {
    ...mapActions({
      logout: "auth/logout",
    }),
    ...mapActions({
      getUser: "user/getUserByUid",
    }),

    user() {
      return this.$store.state.user.user;
    },
  },
  async mounted() {
    const uid = localStorage.getItem("uid");
    uid
      ? this.$store.commit("auth/setAuth", true)
      : this.$store.commit("auth/setAuth", false);
    if (uid) {
      await this.getUser();
    }
  },

  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
    }),
  },
};
</script>


