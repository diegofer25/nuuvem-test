<template>
  <div class="file-content wiki">
    <h1 dir="auto">
      <a
        id="user-content-test-javascript-1"
        class="anchor"
        href="#test-javascript-1"
        aria-hidden="true"
      ></a
      >Test Javascript 1
    </h1>

    <p dir="auto">
      The idea with this test is to allow us to better comprehend the skills of
      candidates to developer jobs in regards to their knowledge of the
      Javascript language, it's runtime and ecosystem, in various experience
      levels.
    </p>

    <p dir="auto">
      This test should be completed by you on your own, in your own time. Take
      as much time as you need, but usually this test shouldn't take more than a
      couple of hours to be done.
    </p>

    <h2 dir="auto">
      <a
        id="user-content-delivery-instructions"
        class="anchor"
        href="#delivery-instructions"
        aria-hidden="true"
      ></a
      >Delivery instructions
    </h2>

    <p dir="auto">
      Download the instructions from this repo and, once done, put all project
      files in a .zip file and send it to your contact at Nuuvem. You should
      also include instructions on how to execute the code you created, how to
      install any dependencies and how to run any tests, if necessary.
    </p>

    <h2 dir="auto">
      <a
        id="user-content-test-descriptions"
        class="anchor"
        href="#test-descriptions"
        aria-hidden="true"
      ></a
      >Test descriptions
    </h2>

    <h3 dir="auto">
      <a
        id="user-content-1-prime-numbers"
        class="anchor"
        href="#1-prime-numbers"
        aria-hidden="true"
      ></a
      >1. Prime Numbers
    </h3>

    <p dir="auto">
      Implement a function <code>isPrime()</code> that receives an integer
      number and returns <code>true</code> or <code>false</code>, indicating
      whether the given number is prime. For example:
    </p>

    <pre class="code highlight js-syntax-highlight javascript white" lang="javascript" v-pre="true"><code><span id="LC1" class="line" lang="javascript"><span class="nx">isPrime</span><span class="p">(</span><span class="mi">0</span><span class="p">)</span>               <span class="c1">// false</span></span>
<span id="LC2" class="line" lang="javascript"><span class="nx">isPrime</span><span class="p">(</span><span class="mi">1</span><span class="p">)</span>               <span class="c1">// false</span></span>
<span id="LC3" class="line" lang="javascript"><span class="nx">isPrime</span><span class="p">(</span><span class="mi">17</span><span class="p">)</span>              <span class="c1">// true</span></span>
<span id="LC4" class="line" lang="javascript"><span class="nx">isPrime</span><span class="p">(</span><span class="mi">10000000000000</span><span class="p">)</span>  <span class="c1">// false</span></span></code></pre>
    <p dir="auto">Bonus questions:</p>

    <ul dir="auto">
      <li>
        What is the time complexity of the <code>isPrime()</code> funtion as you
        wrote it?
      </li>
      <li>
        What if I asked you to return all prime number from zero up to the
        number supplied? How would you solve this? Would you re-use the
        <code>isPrime()</code> function? Why or why not? What is the time
        complexity of this new function? (you can implement this or just talk
        about your thought proccess)
      </li>
    </ul>

    <h3 dir="auto">
      <a
        id="user-content-2-balanced-string"
        class="anchor"
        href="#2-balanced-string"
        aria-hidden="true"
      ></a
      >2. Balanced String
    </h3>

    <p dir="auto">
      Implement a function <code>isBalanced()</code> that takes a string and
      returns <code>true</code> or <code>false</code> indicating whether its
      round braces (parentheses) are balanced. For example:
    </p>

    <pre class="code highlight js-syntax-highlight javascript white" lang="javascript" v-pre="true"><code><span id="LC1" class="line" lang="javascript"><span class="nx">isBalanced</span><span class="p">(</span><span class="s1">')('</span><span class="p">)</span>                      <span class="c1">// false</span></span>
<span id="LC2" class="line" lang="javascript"><span class="nx">isBalanced</span><span class="p">(</span><span class="s1">'(()'</span><span class="p">)</span>                     <span class="c1">// false</span></span>
<span id="LC3" class="line" lang="javascript"><span class="nx">isBalanced</span><span class="p">(</span><span class="s1">'()()'</span><span class="p">)</span>                    <span class="c1">// true</span></span>
<span id="LC4" class="line" lang="javascript"><span class="nx">isBalanced</span><span class="p">(</span><span class="s1">'foo ( bar ( baz ) boo )'</span><span class="p">)</span> <span class="c1">// true</span></span>
<span id="LC5" class="line" lang="javascript"><span class="nx">isBalanced</span><span class="p">(</span><span class="s1">'foo ( bar ( baz )'</span><span class="p">)</span>       <span class="c1">// false</span></span>
<span id="LC6" class="line" lang="javascript"><span class="nx">isBalanced</span><span class="p">(</span><span class="s1">'foo ( bar ) )'</span><span class="p">)</span>           <span class="c1">// false</span></span></code></pre>
    <p dir="auto">
      Bonus: implement a new function, <code>isBalanced2()</code>, that does the
      same as you implemented above, but supports 3 types of braces: curly
      <code>{}</code>, square <code>[]</code>, and round <code>()</code>. For
      example:
    </p>

    <pre class="code highlight js-syntax-highlight javascript white" lang="javascript" v-pre="true"><code><span id="LC1" class="line" lang="javascript"><span class="nx">isBalanced2</span><span class="p">(</span><span class="s1">'(foo { bar (baz) [boo] })'</span><span class="p">)</span> <span class="c1">// true</span></span>
<span id="LC2" class="line" lang="javascript"><span class="nx">isBalanced2</span><span class="p">(</span><span class="s1">'foo { bar { baz }'</span><span class="p">)</span>         <span class="c1">// false</span></span>
<span id="LC3" class="line" lang="javascript"><span class="nx">isBalanced2</span><span class="p">(</span><span class="s1">'foo { (bar [baz] } )'</span><span class="p">)</span>      <span class="c1">// false</span></span></code></pre>
    <h3 dir="auto">
      <a
        id="user-content-3-debugging-existing-code"
        class="anchor"
        href="#3-debugging-existing-code"
        aria-hidden="true"
      ></a
      >3. Debugging existing code
    </h3>

    <h4 dir="auto">
      <a
        id="user-content-31-greetings"
        class="anchor"
        href="#31-greetings"
        aria-hidden="true"
      ></a
      >3.1 Greetings
    </h4>

    <p dir="auto">
      I want this code to return "hey amy", but it is returning "hey arnold" -
      why?
    </p>

    <pre class="code highlight js-syntax-highlight javascript white" lang="javascript" v-pre="true"><code><span id="LC1" class="line" lang="javascript"><span class="kd">function</span> <span class="nx">greet</span> <span class="p">(</span><span class="nx">person</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC2" class="line" lang="javascript">  <span class="k">if</span> <span class="p">(</span><span class="nx">person</span> <span class="o">==</span> <span class="p">{</span> <span class="na">name</span><span class="p">:</span> <span class="s1">'amy'</span> <span class="p">})</span> <span class="p">{</span></span>
<span id="LC3" class="line" lang="javascript">    <span class="k">return</span> <span class="s1">'hey amy'</span></span>
<span id="LC4" class="line" lang="javascript">  <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></span>
<span id="LC5" class="line" lang="javascript">    <span class="k">return</span> <span class="s1">'hey arnold'</span></span>
<span id="LC6" class="line" lang="javascript">  <span class="p">}</span></span>
<span id="LC7" class="line" lang="javascript"><span class="p">}</span></span>
<span id="LC8" class="line" lang="javascript"><span class="nx">greet</span><span class="p">({</span> <span class="na">name</span><span class="p">:</span> <span class="s1">'amy'</span> <span class="p">})</span></span></code></pre>
    <p dir="auto">
      Explain the problem and write a new code with the proposed solution.
    </p>

    <h4 dir="auto">
      <a
        id="user-content-32-barking-dogs"
        class="anchor"
        href="#32-barking-dogs"
        aria-hidden="true"
      ></a
      >3.2 Barking dogs
    </h4>

    <p dir="auto">
      I want my dog to <code>bark()</code>, but instead, I get an error. Why?
    </p>

    <pre class="code highlight js-syntax-highlight javascript white" lang="javascript" v-pre="true"><code><span id="LC1" class="line" lang="javascript"><span class="kd">function</span> <span class="nx">Dog</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></span>
<span id="LC2" class="line" lang="javascript">  <span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">name</span></span>
<span id="LC3" class="line" lang="javascript"><span class="p">}</span></span>
<span id="LC4" class="line" lang="javascript"><span class="nx">Dog</span><span class="p">.</span><span class="nx">bark</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></span>
<span id="LC5" class="line" lang="javascript">  <span class="nx">console</span><span class="p">.</span><span class="nx">log</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">' says woof'</span><span class="p">)</span></span>
<span id="LC6" class="line" lang="javascript"><span class="p">}</span></span>
<span id="LC7" class="line" lang="javascript"><span class="kd">let</span> <span class="nx">fido</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">Dog</span><span class="p">(</span><span class="s1">'fido'</span><span class="p">)</span></span>
<span id="LC8" class="line" lang="javascript"><span class="nx">fido</span><span class="p">.</span><span class="nx">bark</span><span class="p">()</span></span></code></pre>
    <p dir="auto">
      Explain the problem and write a new code with the proposed solution.
    </p>

    <p dir="auto">
      Bonus: is there more than one way to solve this? If so, what are the pros
      and cons of each solution?
    </p>

    <h3 dir="auto">
      <a
        id="user-content-4-service-workers"
        class="anchor"
        href="#4-service-workers"
        aria-hidden="true"
      ></a
      >4. Service Workers
    </h3>

    <p dir="auto">This one is optional, but highly recommended.</p>

    <p dir="auto">
      Implement a web page that contains an <code>&lt;img&gt;</code> tag that
      point to an external image URL. Use a service worker so that when opening
      the page for the first time, the image is loaded and displayed, but it is
      also cached locally somehow, so that any subsequent accesses to the page
      now display the image from the local cache (even if the computer is
      offline).
    </p>

    <p dir="auto">
      Bonus points: how would you know when the image was updated, so you could
      not use the cached version anymore but instead request, display and cache
      the new version? (You can either implement this or just describe how you
      would do it)
    </p>

    <p dir="auto">
      Tip: you may assume this should only run on latest versions of Chrome and
      Firefox, on the desktop.
    </p>

    <h2 dir="auto">
      <a
        id="user-content-review"
        class="anchor"
        href="#review"
        aria-hidden="true"
      ></a
      >Review
    </h2>

    <p dir="auto">Your response will be evaluated by the following criteria:</p>

    <ol dir="auto">
      <li>Did you follow closely the test specification?</li>
      <li>
        Your hability to clearly express your intent, both through code and
        text;
      </li>
      <li>
        Quality of the code itself, how it's strutured and how it complies with
        good, modern Javascript practices;
      </li>
      <li>
        Quality and coverage of unit / funcional / automated tests, if any;
      </li>
      <li>
        Familiarity with the standard libraries of the language and other
        packages;
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "Instructions"
};
</script>
