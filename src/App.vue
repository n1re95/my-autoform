<script setup lang="ts">
import { Button } from './components/ui/button'
</script>

<template>
  <div class="app-container">
    <div class="form-container">
      <Button>testShit</Button>
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
  width: 500px;
  margin: auto;
}
</style>
