<template>
  <v-flex xs12 sm10 md8 lg6 xl4>
    <v-card class="px-2 my-3">
      <div v-if="test === 'prime-numbers'"><prime-numbers /></div>
      <div v-else-if="test === 'balanced-strings'"><balanced-string /></div>
      <div v-else-if="test === 'debugging-code'"><debugging-code /></div>
      <div v-else-if="test === 'service-workers'"><service-workers /></div>
      <div v-else-if="test === 'instructions'"><instructions /></div>
      <div v-else>NOT FOUND</div>
    </v-card>
    <v-layout row wrap>
      <v-btn class="mx-0" color="primary" @click.stop="$router.go(-1);"
        >Back</v-btn
      >
    </v-layout>
  </v-flex>
</template>

<script>
import PrimeNumbers from "./PrimeNumbers";
import BalancedString from "./BalancedString";
import DebuggingCode from "./DebuggingCode";
import ServiceWorkers from "./ServiceWorkers";
import Instructions from "./Instructions";

export default {
  name: "TestLayout",
  props: ["test"],
  components: {
    PrimeNumbers,
    BalancedString,
    DebuggingCode,
    ServiceWorkers,
    Instructions
  }
};
</script>
