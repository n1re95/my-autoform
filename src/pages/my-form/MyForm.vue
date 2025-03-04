<script setup lang="ts">
import { MyAutoForm } from '@/components/my-auto-form'
import { schema } from '@/pages/my-form/schema';
</script>

<template>
  <MyAutoForm
    :schema="schema"
  >
    my-autoform component
  </MyAutoForm>
</template>
