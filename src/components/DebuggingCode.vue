<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-layout justify-space-between>
        <p class="title mt-2">Debugging Existing Code</p>
      </v-layout>
    </v-flex>
    <v-flex xs12>
      <p class="subheading mb-1">3.1 Greetings</p>
      <p class="mb-1">
        I want this code to return "hey amy", but it is returning "hey arnold" -
        why?
      </p>
      <p class="mb-1">
        Explain the problem and write a new code with the proposed solution.
      </p>
      <pre class="grey lighten-2 pt-2">
        function greet (person) {
          if (person == { name: 'amy' }) {
            return 'hey amy'
          } else {
            return 'hey arnold'
          }
        }
        greet({ name: 'amy' })
      </pre>
      <p class="mb-1">
        <b>Answer:</b> Well, you can't compare object with other object
        directly, you need compare a enter of the object with primitive type
        content like Char/String, Number or Boolean. Below the code fixed.
      </p>
      <pre class="green lighten-3 pt-2">
        function greet ({ name }) {
          if (name == 'amy') {
            return 'hey amy'
          } else {
            return 'hey arnold'
          }
        }
        greet({ name: 'amy' })
      </pre>
    </v-flex>
    <v-flex xs12>
      <p class="subheading mb-1 mt-2">3.2 Barking dogs</p>
      <p class="mb-1">
        I want my dog to bark(), but instead, I get an error. Why?
      </p>
      <p class="mb-1">
        Explain the problem and write a new code with the proposed solution.
      </p>
      <pre class="grey lighten-2 pt-2">
        function Dog (name) {
          this.name = name
        }
        Dog.bark = function () {
          console.log(this.name + ' says woof')
        }
        let fido = new Dog('fido')
        fido.bark()
      </pre>
      <p class="mb-1">
        <b>Answer:</b> Functions cannot receive other functions inside directly,
        to do this is needed add a prototype entry with the function, see below.
      </p>
      <pre class="green lighten-3 pt-2">
        function Dog (name) {
          this.name = name
        }
        Dog.prototype.bark = function () {
          console.log(this.name + ' says woof')
        }
        let fido = new Dog('fido')
        fido.bark()
      </pre>
      <p class="mb-1">
        Bonus: is there more than one way to solve this? If so, what are the
        pros and cons of each solution? <br />
        <b>Answer:</b> Yes, with ES6 we can use
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes"
          target="_blank"
          >Class</a
        >
        in Javascript and with this we can add props and functions to the class
        and instantiate the class object with all function of the class
      </p>
      <pre class="green lighten-3 pt-2">
        class Dog {
          constructor (name) {
            this.name = name
          }
         bark = function () {
            console.log(this.name + ' says woof')
          }
        }
        let fido = new Dog('fido')
        fido.bark()
      </pre>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "DebuggingCode",
  computed: {},
  data: () => ({
    dialog: false
  }),
  methods: {}
};
</script>
