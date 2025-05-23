<template>
  <v-container>
    <!-- Hero Section -->
    <v-sheet
      class="hero-section"
      color="surface-light"
      height="500px"
      tile
    >
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="display-2 font-weight-bold">
            AI-Powered Forecasts<br />for Perm Region’s Workforce
          </h1>
          <p class="subtitle-1 mt-4">
            Collect, analyze, and predict regional staffing needs seamlessly,  
            guided by the Perm Region Development Programme.
          </p>
          <v-btn large color="primary" class="mt-6" to="/dashboard">
            Get Started
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Features -->
    <v-container max-width="1000">
      <v-row>
        <v-col  v-for="feat in features" :key="feat.title">
          <v-card outlined height="150px" max-width="300px" class="mx-2">
            <v-card-title class="headline">{{ feat.title }}</v-card-title>
            <v-card-text>{{ feat.desc }}</v-card-text>

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
   


</template>


<script>
import { mapState } from "vuex";

export default {
  name: "HomeView",
  data() {
    return {
      features: [
        {
          title: "Data Collection",
          desc:
            "Automate the gathering of demographic, educational, and economic indicators across the region.",
          link: "/features/collection",
        },
        {
          title: "Data Analysis",
          desc:
            "Leverage AI to clean, visualize, and interpret workforce trends in real time.",
          link: "/features/analysis",
        },
        {
          title: "Forecasting",
          desc:
            "Generate accurate projections of staffing needs aligned with the development programme.",
          link: "/features/forecasting",
        },
      ],
    };
  },
  computed: {
   
  },
};
</script>

<style scoped>
.hero-section {
  background: linear-gradient(
    135deg,
    rgba(75, 172, 252, 0.829),
    rgba(0, 67, 168, 0.8)
  );
  color: white;
}
</style>