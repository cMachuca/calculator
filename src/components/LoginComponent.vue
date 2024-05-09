<script>
import GuestLayout from "@/components/Layouts/GuestLayout.vue";
// import axios from "axios";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

export default {
  name: "LoginComponent",
  components: { GuestLayout },
  setup() {
    return { v$: useVuelidate() };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  validations() {
    return {
      email: { required, email }, // Matches this.firstName
      password: { required }, // Matches this.lastName
    };
  },
  methods: {
    async login() {
      const isFormCorrect = await this.v$.$validate();
      // you can show some extra alert to the user or just leave the each field to show it's `$errors`.
      if (!isFormCorrect) {
        return;
      }

      await this.$http.get("/sanctum/csrf-cookie");
      await this.$http
        .post("/login", { email: this.email, password: this.password })
        .then((res) => {
          if (res.status === 204) this.$router.push("/");
        });
    },
  },
};
</script>

<template>
  <guest-layout>
    <div class="row">
      <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
      <div class="col-lg-6">
        <div class="p-5">
          <div class="text-center">
            <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
          </div>
          <form class="user">
            <div class="form-group">
              <input
                type="email"
                :class="{ 'is-invalid': v$.email.$errors.length }"
                class="form-control form-control-user"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter Email Address..."
                v-model="email"
              />
              <div class="invalid-feedback">Email or password invalid</div>
            </div>

            <div class="form-group">
              <input
                type="password"
                :class="{ 'is-invalid': v$.password.$errors.length }"
                class="form-control form-control-user"
                id="exampleInputPassword"
                placeholder="Password"
                v-model="password"
              />
              <div class="invalid-feedback">Email or password invalid</div>
            </div>
            <div class="form-group">
              <div class="custom-control custom-checkbox small">
                <input
                  type="checkbox"
                  class="custom-control-input"
                  id="customCheck"
                />
                <label class="custom-control-label" for="customCheck"
                  >Remember Me</label
                >
              </div>
            </div>
            <button
              class="btn btn-primary btn-user btn-block"
              @click.prevent="login"
            >
              Login
            </button>
            <hr />
          </form>
          <hr />
          <div class="text-center">
            <RouterLink to="/register">Create an Account!</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </guest-layout>
</template>

<style scoped lang="scss"></style>
