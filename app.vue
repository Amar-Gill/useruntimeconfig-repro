<script setup lang="ts">
const {
  public: { clientTest },
} = useRuntimeConfig();

const { data } = useFetch("/api/test");
</script>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <div>client side env var: {{ clientTest }}</div>
    <div>server side env var: {{ data }}</div>
  </div>
</template>
