<template>
  <v-app v-if="!isLoaded">
    <v-system-bar>
      <v-icon icon="mdi-wifi-strength-4"></v-icon>
      <v-icon icon="mdi-signal" class="ml-2"></v-icon>
      <v-icon icon="mdi-battery" class="ml-2"></v-icon>
      <span class="ml-2">{{ nowTime }}</span>
    </v-system-bar>

    <VueSplash></VueSplash>
    <LoginView></LoginView>

    <v-bottom-navigation>
      <v-btn value="record">
        <v-icon>mdi-pencil</v-icon>

        기록
      </v-btn>

      <v-btn value="report">
        <v-icon>mdi-chart-box</v-icon>

        리포트
      </v-btn>

      <v-btn value="home">
        <v-icon>mdi-home</v-icon>

        홈
      </v-btn>

      <v-btn value="family">
        <v-icon>mdi-family-tree</v-icon>

        우리가족
      </v-btn>

      <v-btn value="mypage">
        <v-icon>mdi-account</v-icon>

        마이페이지
      </v-btn>
    </v-bottom-navigation>
  </v-app>
  <v-app v-else>
    <div>
      <LoadingBar>
        <v-system-bar>
          <v-icon icon="mdi-wifi-strength-4"></v-icon>
          <v-icon icon="mdi-signal" class="ml-2"></v-icon>
          <v-icon icon="mdi-battery" class="ml-2"></v-icon>
          <span class="ml-2">{{ nowTime }}</span>
        </v-system-bar>

        <LayoutView v-if="hasToken"></LayoutView>
        <LoginView v-else></LoginView>

        <v-bottom-navigation>
          <v-btn value="record">
            <v-icon>mdi-pencil</v-icon>

            기록
          </v-btn>

          <v-btn value="report">
            <v-icon>mdi-chart-box</v-icon>

            리포트
          </v-btn>

          <v-btn value="home">
            <v-icon>mdi-home</v-icon>

            홈
          </v-btn>

          <v-btn value="family">
            <v-icon>mdi-family-tree</v-icon>

            우리가족
          </v-btn>

          <v-btn value="mypage">
            <v-icon>mdi-account</v-icon>

            마이페이지
          </v-btn>
        </v-bottom-navigation>
      </LoadingBar>
    </div>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";

import { login } from "@/service/auth.js";

import LoginView from "@/views/login/LoginView.vue";
import LayoutView from "@/views/layout/LayoutView.vue";
import LoadingBar from "@/components/LoadingBar.vue";
import VueSplash from "@/components/VueSplash.vue";
import dayjs from "dayjs";

export default {
  components: {
    LayoutView,
    LoginView,
    LoadingBar,
    VueSplash,
  },

  data() {
    return {
      username: "",
      password: "",
      isLoaded: false,
      nowTime: dayjs().format("HH:mm"),
    };
  },

  computed: {
    ...mapGetters({ hasToken: "user/hasToken" }),
  },

  methods: {
    splashing() {
      setTimeout(() => {
        this.isLoaded = true;
      }, 100);
    },
  },

  async created() {
    // if (!this.username) {
    //   alert("유저 ID를 입력하세요");
    // }

    const response = await login({
      username: "wisejini@hanmail.net",
      password: "test1234!",
    });
    console.log(response);

    // this.splashing();
  },
};
</script>

<style>
#app {
  min-height: 100%;
  position: center;
}
</style>
