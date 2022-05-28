<script lang="ts" setup>
import ErrorAlert from "../components/ErrorAlert.vue";
import User from "../components/User.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";
import { onMounted, ref } from "vue";

const router = useRouter();
const users = ref([]);
const store = useUserStore();

onMounted(async () => {
  const response = await fetch("https://apidev.kanvas.dev/v2/users", {
    headers: {
      Authorization: store.token!,
    },
  });
    users.value = await response.json();
});
</script>

<template>
  <div class="w-auto max-w-lg mx-auto mt-5">
    <img
      class="mx-auto h-12 w-auto"
      src="/img/black-logo.png"
      alt="Mctekk logo"
    />
    <error-alert v-show="store.error" :error="store.error" />
  </div>

  <div class="bg-gray-100 mt-4 w-2/3 mx-auto rounded h-auto p-3">
    <User v-for="user in users" :user="user" />
  </div>
  <div
    class="text-grey mt-4 w-2/3 mx-auto rounded h-auto p-3"
    @click="store.Logout().then(()=> router.push('/login'))"
  >
    <i class="fa-solid fa-arrow-right-from-bracket"></i>
    <button
      class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
      Logout
    </button>
  </div>
</template>
