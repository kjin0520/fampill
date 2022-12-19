<template>
  <v-app>
    <v-app-bar app> </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", to: "/about" },
        { title: "Page-1", icon: "mdi-clipboard-edit-outline", to: "/board" },
        { title: "Page-2", icon: "person", to: "/user" },
        { title: "Page-3", icon: "mdi-film", to: "/album" },
        { title: "Page-4", icon: "mdi-silverware", to: "/custom" },
      ],
      right: null,
    };
  },

  methods: {
    ...mapActions({ setToken: "user/setToken" }),
    logout() {
      if (confirm("로그아웃 하시겠습니까?")) {
        this.setToken("");
      }
    },
  },

  computed: {
    ...mapGetters("user", ["name"]),
  },
};
</script>

<style scoped></style>
