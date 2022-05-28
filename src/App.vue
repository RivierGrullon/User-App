<script setup lang="ts">
import { useUserStore } from './stores/userStore';
import { useRouter } from 'vue-router';

const router = useRouter();
const store = useUserStore();

if (store.token) {
  router.push('/home');
}
</script>

<template>
  <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
