<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { RouterView } from 'vue-router'
import { URLS } from '@/constants';
</script>

<template>
  <div class="app-container">
    <div class="links">
      <RouterLink :to="URLS.MY">
        my
      </RouterLink>
      <RouterLink :to="URLS.EXAMPLE">
        example
      </RouterLink>
    </div>
    <div class="form-container">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  padding: 24px 0;
  gap: 12px;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
}
.form-container {
  width: 500px;
}
</style>
