<template>
  <v-container>
    <!-- Герой-секция -->
    <v-sheet
      class="hero-section"
      color="surface-light"
      height="500px"
      tile
    >
      <v-row class="fill-height" align="center" justify="center">
        <v-col cols="12" md="8" class="text-center">
          <h1 class="display-2 font-weight-bold text-white">
            Прогнозирование кадровой потребности<br />Пермского края
          </h1>
          <p class="subtitle-1 mt-4 text-white">
            Сбор, анализ и прогнозирование потребности в кадрах  
            в соответствии с Программой развития Пермского края.
          </p>
          <v-btn large color="primary" class="mt-6" to="/okved">
            Начать
          </v-btn>
        </v-col>
      </v-row>
    </v-sheet>

    <!-- Особенности -->
    <v-container max-width="1000">
      <v-row>
        <v-col v-for="feat in features" :key="feat.title">
          <v-card outlined height="150px" max-width="300px" class="mx-2">
            <!-- <v-img
              :src="feat.img"
              min-height="150px"  class="white--text align-end"
            >
            </v-img> -->
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
          title: "Сбор данных",
          desc:
            "Автоматизация сбора демографических, образовательных и экономических показателей.",
          img: "https://positivethinking.tech/wp-content/uploads/2020/12/Data_volume_Big_Analytics_Streaming_France_Belgium_Luxembourg_Switzerland_Germany_Positive_Thinking_Company-800x480.jpg",
        },
        {
          title: "Анализ данных",
          desc:
            "Использование ИИ для очистки, визуализации и интерпретации трендов на рынке труда в режиме реального времени.",
          img: "https://analyzing-testing.netzsch.com/_Resources/Persistent/4/d/4/e/4d4ea9e36c3524300b40aa2ee2c37cf85ca4876d/NETZSCH_Data-Science_Big-Data-scaled-1847x1038-1600x899.webp",
        },
        {
          title: "Прогнозирование",
          desc:
            "Разработка прогнозов потребности в кадрах в соответствии с программой развития.",
          img: "https://www.devoteam.com/wp-content/uploads/2024/09/data-service.jpg",
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
    rgba(0, 49, 122, 0.8)
  );
  color: white;
}
</style>
