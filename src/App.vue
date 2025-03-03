<script setup lang="ts">
import { Button } from './components/ui/button'
import { schema } from './schema'
import { MyAutoForm } from './components/my-auto-form';

</script>

<template>
  <div class="app-container">
    <div class="form-container">
      <MyAutoForm>yooo</MyAutoForm>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  background-color: gray;
  width: 100%;
  height: 100vh;
}
.form-container {
  padding: 24px 0;
  width: 500px;
  margin: auto;
}
</style>
