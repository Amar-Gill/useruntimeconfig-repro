<script setup lang="ts">
const {
  public: { clientTest },
} = useRuntimeConfig();
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>{{ clientTest }}</div>
  </div>
</template>
