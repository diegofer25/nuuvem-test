<template>
  <div id="app">
    <v-app>
      <v-container>
        <v-layout row wrap justify-center>
          <v-flex xs12>
            <v-layout row wrap justify-center>
              <img height="auto" src="./assets/logo.png" />
            </v-layout>
          </v-flex>
          <v-flex xs12>
            <v-layout row wrap justify-center>
              <router-view></router-view>
            </v-layout>
          </v-flex>
          <v-flex xs12 sm10 md8 lg6 xl4 class="mt-5">
            <v-layout justify-end>
              -
              <a
                href="https://br.linkedin.com/in/diego-lamarao"
                target="_blank"
              >
                Diego Lamarão</a
              >
            </v-layout>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style></style>
