<template>
  <v-flex xs10 sm8 md6 lg4 xl3 class="mt-2">
    <v-list>
      <template v-for="item in items">
        <v-list-tile
          :key="item.title"
          @click.stop="$router.push('/test' + item.router);"
        >
          <v-list-tile-content>
            <v-list-tile-title>
              <p class="mb-0 text-xs-center" v-html="item.title"></p>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-flex>
</template>

<script>
export default {
  name: "Menu",
  data: () => ({
    items: [
      {
        title: "1. Prime Numbers",
        router: "/prime-numbers"
      },
      {
        title: "2. Balanced String",
        router: "/balanced-strings"
      },
      {
        title: "3. Debugging existing code",
        router: "/debugging-code"
      },
      {
        title: "4. Service Workers",
        router: "/service-workers"
      },
      {
        title: "Instructions",
        router: "/instructions"
      }
    ]
  })
};
</script>

<style scoped></style>
