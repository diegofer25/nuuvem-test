<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout justify-space-between>
        <p class="title mt-2">Prime Numbers</p>
        <v-dialog v-model="dialog" width="500">
          <v-btn color="primary" icon small slot="activator">
            <v-icon>code</v-icon>
          </v-btn>
          <v-card>
            <v-card-text>
              <iframe
                height="407"
                style="width: 100%;"
                scrolling="no"
                title="Prime Number"
                src="//codepen.io/diegolamarao/embed/momLPr/?height=407&theme-id=0&default-tab=js"
                frameborder="no"
                allowtransparency="true"
                allowfullscreen="true"
              >
                See the Pen
                <a href="https://codepen.io/diegolamarao/pen/momLPr/"
                  >Prime Number</a
                >
                by Diego (<a href="https://codepen.io/diegolamarao"
                  >@diegolamarao</a
                >) on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" flat @click="dialog = false;"> Ok </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <v-text-field
        v-model="input"
        type="number"
        label="Type a number"
        autofocus
        @input="checkInput"
      ></v-text-field>
    </v-flex>
    <v-flex xs12 v-if="input">
      <p class="text-xs-center">
        {{ input }} Is prime ? <b>{{ check }}</b>
        <span class="caption grey--text" v-text="timestamp"></span>
      </p>
      <p class="text-xs-center" v-if="primes.length">
        All prime numbers from 0 to {{ input }} <br />
        <span
          class="caption grey--text"
          v-text="primes.join(', ') + timeOfAllPrimes"
        ></span>
      </p>
    </v-flex>
    <v-flex xs12>
      <p class="grey--text font-italic">
        What if I asked you to return all prime number from zero up to the
        number supplied? How would you solve this? Would you re-use the
        isPrime() function? Why or why not? What is the time complexity of this
        new function? (you can implement this or just talk about your thought
        proccess)
      </p>
      <p>
        <strong>Answer:</strong> We can do it, but dependent of number length,
        this can cause problem in performance of the browser, a simple solution
        for this problem is create a
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers"
          target="_blank"
          >Web Worker</a
        >
        and process this in other tread
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "PrimeNumbers",
  computed: {
    timestamp() {
      return `(checked in ${(this.end - this.start).toFixed(3)}ms)`;
    }
  },
  data: () => ({
    input: "",
    start: 0,
    end: 0,
    check: false,
    primes: [],
    timeOfAllPrimes: 0,
    dialog: false
  }),
  methods: {
    checkInput(input) {
      if (input) {
        const number = Number(input);
        this.start = performance.now();
        this.check = this.isPrime(number);
        this.end = performance.now();

        const start = performance.now();
        this.primes = this.allPrimes(number);
        this.timeOfAllPrimes = ` - (checked in ${(
          performance.now() - start
        ).toFixed(3)}ms)`;
      }
    },

    isPrime(number) {
      if (typeof number === "number" && number > 1) {
        return Array.from({ length: number }).reduce((acc, item, index) => {
          if (index + 2 < number && acc) {
            acc = number % (index + 2) !== 0;
          }
          return acc;
        }, true);
      }
      return false;
    },

    allPrimes(number) {
      return Array.from({ length: number })
        .map((item, index) => index + 1)
        .filter(num => this.isPrime(num));
    }
  }
};
</script>
