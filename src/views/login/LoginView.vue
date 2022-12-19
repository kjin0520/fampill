<template>
  <v-row justify="center">
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>로그인</h1>
    </div>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import { login as _login, getUser } from "@/service/auth";

export default {
  data: () => ({
    showPassword: false,
    id: "",
    password: "",
  }),

  methods: {
    ...mapActions("user", ["setToken", "setName", "setId"]),

    async login() {
      try {
        const response = await _login({ id: this.id, pwd: this.password });
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

<style></style>
