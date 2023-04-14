<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>

  <HelloWorld msg="Vite + Vue" />

  <Counter :step="2">
    <template #additional-infos>
      <ul>
        <li>
          step = 2
        </li>
      </ul>
    </template>
  </Counter>
  
  <Counter />

  <Counter :min="-1">
    <template #additional-infos>
      <ul>
        <li>
          min = -1
        </li>
      </ul>
    </template>
  </Counter>

  <Counter :step="2" :min="-4" :max="14">
    <template #additional-infos>
      <ul>
        <li>
          step = 2
        </li>
        <li>
          min = -4
        </li>
        <li>
          max = 14
        </li>
      </ul>
    </template>
  </Counter>

  <ClickCounter side="bottom" />

  <ClickCounter $count="count" />

  <ClickCounter $count="count" />
</template>

<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue';
import ClickCounter from './components/ClickCounter.vue';

let count = $ref(10);
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
