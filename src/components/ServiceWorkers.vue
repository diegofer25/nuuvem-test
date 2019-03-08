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
    <v-flex xs12>
      <p class="mb-1 grey--text caption">
        Bonus points: how would you know when the image was updated, so you
        could not use the cached version anymore but instead request, display
        and cache the new version? (You can either implement this or just
        describe how you would do it)
      </p>
      <p>
        <b>Awnser: </b> One way to update the cached images is adding a variable
        in url Ex: '/image.png?lastupdate=1552075222323'. With this, when the
        lastupdate variable change the cached image will can be deleted and add
        a new image
      </p>
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
