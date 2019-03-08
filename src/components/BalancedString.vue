<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout justify-space-between>
        <p class="title mt-2">Balanced Strings</p>
        <v-dialog v-model="dialog" width="500">
          <v-btn color="primary" icon small slot="activator">
            <v-icon>code</v-icon>
          </v-btn>
          <v-card>
            <v-card-text>
              <iframe
                height="542"
                style="width: 100%;"
                scrolling="no"
                title="Balanced String"
                src="//codepen.io/diegolamarao/embed/NJjBgr/?height=542&theme-id=0&default-tab=js"
                frameborder="no"
                allowtransparency="true"
                allowfullscreen="true"
              >
                See the Pen
                <a href="https://codepen.io/diegolamarao/pen/NJjBgr/"
                  >Balanced String</a
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
        type="text"
        label="Type '(' or ')'"
        autofocus
        @input="checkInput"
      ></v-text-field>
    </v-flex>
    <v-flex v-if="input">
      <p class="text-xs-center">
        "{{ input }}" Is balanced ? <b>{{ isBalances }}</b>
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "BalancedString",
  computed: {
    isBalances() {
      const { parentheses } = this;
      return parentheses.left.length === parentheses.right.length;
    }
  },
  data: () => ({
    dialog: false,
    input: "",
    parentheses: {
      left: [],
      right: []
    }
  }),
  methods: {
    checkInput(input) {
      const letters = input.split("");
      this.parentheses = this.checkLetters(letters);
    },

    checkLetters(letters) {
      return letters.reduce(
        (acc, letter) => {
          if (letter === "(") acc.left.push(letter);
          if (letter === ")") acc.right.push(letter);
          return acc;
        },
        { left: [], right: [] }
      );
    }
  }
};
</script>
