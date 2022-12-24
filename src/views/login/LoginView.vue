<template>
  <v-row justify="center">
    <div>
      아이디 : <input type="text" v-model="username" /> <br />
      비밀번호 : <input type="text" v-model="password" /> <br /><br />
      <v-btn @click="login">로그인</v-btn><br />
      <!-- <v-btn @click="loginKakao">카카오로 시작하기</v-btn> -->
    </div>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import { login as _login, getUser } from "@/service/auth";

export default {
  data: () => ({
    showPassword: false,
    username: "",
    password: "",
  }),

  methods: {
    ...mapActions("user", ["setToken", "setName", "setId"]),

    async login() {
      try {
        const response = await _login({
          id: this.username,
          pwd: this.password,
        });
        this.setToken(response.data.token);

        const user = await getUser();
        this.setId(user.data.id);
        this.setName(user.data.name);
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: {},
};
</script>

<style scoped>
input {
  border: 1px solid gray;
}
</style>
