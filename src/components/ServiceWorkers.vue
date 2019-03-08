<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout justify-space-between>
        <p class="title mt-2">Service Workers</p>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-layout row justify-center>
        <img src="/nuuvemlogo.png" alt="Nuuvem" />
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "ServiceWorkers",
  mounted() {
    caches.open("images").then(function(cache) {
      cache.add("/nuuvemlogo.png");
    });
  }
};
</script>
