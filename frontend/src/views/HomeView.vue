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
          link: "/features/collection",
        },
        {
          title: "Анализ данных",
          desc:
            "Использование ИИ для очистки, визуализации и интерпретации трендов на рынке труда в режиме реального времени.",
          link: "/features/analysis",
        },
        {
          title: "Прогнозирование",
          desc:
            "Разработка прогнозов потребности в кадрах в соответствии с программой развития.",
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
    rgba(0, 49, 122, 0.8)
  );
  color: white;
}
</style>
