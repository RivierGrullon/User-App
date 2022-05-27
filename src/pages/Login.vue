<script setup lang="ts">
//@ts-ignore
import { ref } from "vue";
import { useUserStore } from "../stores/UserStore";
import { useRouter } from "vue-router";
import ErrorAlert from "../components/ErrorAlert.vue";

let email = ref("");
let password = ref("");
let store = useUserStore();
let router = useRouter();
function Auth() {
  store
    .Login(email.value, password.value)
    .then(() => {
      router.push("/home");
    })
    .catch((error) => {
      console.log(error);
    });
}
</script>
<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="/img/black-logo.png"
          alt="Mctekk logo"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Sign In
        </h2>
      </div>
      <error-alert v-show="store.error" :error="store.error!" />
      <div v-for="(error, key) in store.multipleErrors">
        <!-- ignore next line -->
        <error-alert v-show="store.error" :error="error" :key="key" />
      </div>
      <div class="mt-8 space-y-6">
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <input
              type="email"
              required
              v-model="email"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>

          <div>
            <input
              type="password"
              required
              v-model="password"
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Password"
            />
          </div>
        </div>
        <div>
          <button
            type="submit"
            @click.prevent="Auth()"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
          <div class="my-3 text-blue-600">
            <router-link to="/signup">
              <span> New User? Sign Up </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
